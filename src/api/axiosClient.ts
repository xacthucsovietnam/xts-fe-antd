import axios, { AxiosError, InternalAxiosRequestConfig, AxiosResponse } from 'axios';
import  store  from '../store';
import { logout } from '../store/slices/authSlice';
import { clearUser } from '../store/slices/userSlice';
import { notification } from 'antd';
import { refreshAuthTokens } from '../services/authService';

// Định nghĩa kiểu mở rộng cho InternalAxiosRequestConfig
interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
  _retry?: boolean; // Thêm thuộc tính _retry tùy chọn
}

// Ép kiểu error.config thành CustomAxiosRequestConfig khi cần
type AxiosConfigWithRetry = InternalAxiosRequestConfig & { _retry?: boolean };

const api = axios.create({
  baseURL: 'http://dev.xacthucso.com.vn',
  timeout: 30000,
});

let isRefreshing = false;
let failedQueue: Array<{ resolve: (value: string) => void; reject: (reason?: any) => void }> = [];

const processQueue = (error: any, token: string | null = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token!); // Dùng ! để khẳng định token không null khi thành công
    }
  });
  failedQueue = [];
};

api.interceptors.request.use(
  async (config: InternalAxiosRequestConfig): Promise<InternalAxiosRequestConfig> => {
    const token = store.getState().auth.token;
    if (token) {
      config.headers = config.headers || {};
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    config.headers['Content-Type'] = config.headers['Content-Type'] || 'application/json';
    return config;
  },
  (error: AxiosError): Promise<AxiosError> => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data;
  },
  async (error: AxiosError): Promise<any> => {
    let message = 'Something went wrong';
    const status = error.response?.status;

    if (error.response && error.response.data) {
      if (typeof error.response.data === 'object' && 'message' in error.response.data) {
        message = (error.response.data as { message?: string }).message || error.message || message;
      } else if (typeof error.response.data === 'string') {
        message = error.response.data;
      }
    } else if (error.message) {
      message = error.message;
    }

    // Ép kiểu error.config thành AxiosConfigWithRetry để sử dụng _retry
    if (status === 401 && error.config && !((error.config as AxiosConfigWithRetry)._retry)) {
      const originalRequest = error.config as AxiosConfigWithRetry;

      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({
            resolve: (token) => {
              originalRequest.headers!['Authorization'] = `Bearer ${token}`; // Dùng ! để đảm bảo headers tồn tại
              resolve(api(originalRequest));
            },
            reject,
          });
        });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const newToken = await refreshAuthTokens();
        originalRequest.headers!['Authorization'] = `Bearer ${newToken}`;
        processQueue(null, newToken);
        return api(originalRequest);
      } catch (refreshError) {
        processQueue(refreshError, null);
        notification.error({
          message: 'Session Expired',
          description: 'Unable to refresh token. Logging out...',
        });
        store.dispatch(logout());
        store.dispatch(clearUser());
        window.location.href = '/login';
        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    if (status === 403) {
      notification.error({ message: 'Forbidden', description: 'You do not have permission.' });
    } else if (status === 500) {
      notification.error({ message: 'Server Error', description: message });
    } else {
      notification.error({ message: `Error ${status || ''}`, description: message });
    }

    const errorResponse = {
      message,
      status,
      ...(typeof error.response?.data === 'object' ? error.response?.data : {}),
    };

    return Promise.reject(errorResponse);
  }
);

export default api;