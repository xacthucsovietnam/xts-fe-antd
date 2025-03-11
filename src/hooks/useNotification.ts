import { useContext, useCallback } from 'react';
import { notification } from 'antd';
import { showNotification } from '../components/Notification';

export const useNotification = (): {
  notify: (config: { type: 'success' | 'error' | 'warning' | 'info'; message: string; description?: string }) => void;
  contextHolder: React.ReactNode;
} => {
  const [api, contextHolder] = notification.useNotification();

  const notify = useCallback((config: { type: 'success' | 'error' | 'warning' | 'info'; message: string; description?: string }) => {
    showNotification({
      ...config,
      onClose: () => {
        // Optional: Thêm logic khi thông báo đóng
      },
    });
  }, []);

  return {
    notify,
    contextHolder,
  };
};