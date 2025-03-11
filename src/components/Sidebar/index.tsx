import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import { useCustomTranslation } from '../../hooks';
import './Sidebar.css';

const Sidebar: React.FC<{ activeMenu: string }> = ({ activeMenu }) => {
  const { t } = useCustomTranslation();
  const navigate = useNavigate();

  const getSidebarItems = () => {
    switch (activeMenu) {
      case 'traceability':
        return [
          { key: 'products', label: t('sidebar.products'), path: '/products' },
          { key: 'templates', label: t('sidebar.templates'), path: '/templates' },
          { key: 'print', label: t('sidebar.print'), path: '/print' },
          { key: 'activate', label: t('sidebar.activate'), path: '/activate' },
          { key: 'retail', label: t('sidebar.retail'), path: '/retail' },
          { key: 'lookup', label: t('sidebar.lookup'), path: '/lookup' },
        ];
      case 'admin':
        return [
          { key: 'subjects', label: t('sidebar.subjects'), path: '/subjects' },
          { key: 'invite', label: t('sidebar.invite'), path: '/invite' },
          { key: 'staff', label: t('sidebar.staff'), path: '/staff' },
          { key: 'profile', label: t('sidebar.profile'), path: '/profile' }, // Thêm mục "Hồ sơ người dùng"
        ];
      default:
        return [];
    }
  };

  const handleMenuItemClick = (path: string) => {
    navigate(path);
  };

  return (
    <div className="sidebar-container">
      {getSidebarItems().map((item) => (
        <Button
          key={item.key}
          type="link"
          onClick={() => handleMenuItemClick(item.path)}
          className="sidebar-item"
        >
          {item.label}
        </Button>
      ))}
    </div>
  );
};

export default Sidebar;