import { Navigate } from 'react-router-dom';
import { Login, Register, Dashboard } from '../pages';
import Layout from '../components/Layout';
// import UserProfile from '../components/UserProfile';

const routes = [
  // Trang công khai
  { path: '/login', element: <Login /> },
  { path: '/register', element: <Register /> },
  // Trang đã đăng nhập (dùng Layout)
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Navigate to="/dashboard" replace /> },
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'profile', element: <UserProfile /> },
      // Thêm các trang đã đăng nhập khác sau này (ví dụ: /products, /admin/subjects, v.v.)
    ],
  },
];

export default routes;