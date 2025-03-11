import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button, Avatar, Space } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { useCustomTranslation } from '../../hooks';
import LanguageSwitcher from '../LanguageSwitcher';
import { RootState } from '../../store';
import './Header.css';

const Header: React.FC<{ activeMenu: string; onMenuChange: (menu: string) => void; toggleSidebar: () => void }> = ({ activeMenu, onMenuChange, toggleSidebar }) => {
  const { t } = useCustomTranslation();
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.user.user);

  const handleMenuClick = (menu: string) => {
    onMenuChange(menu);
  };

  const handleLogout = () => {
    navigate('/login');
  };

  const handleProfileClick = () => {
    navigate('/profile');
  };

  return (
    <div className="header-container">
      <div className="header-left">
        <MenuOutlined className="hamburger" onClick={toggleSidebar} />
        <div className="logo">Logo</div>
        <span className="business-name">My Business</span>
      </div>
      <div className="header-menu">
        <Space size="middle">
          <Button type={activeMenu === 'overview' ? 'primary' : 'default'} onClick={() => handleMenuClick('overview')}>
            {t('header.overview')}
          </Button>
          <Button type={activeMenu === 'traceability' ? 'primary' : 'default'} onClick={() => handleMenuClick('traceability')}>
            {t('header.traceability')}
          </Button>
          <Button type={activeMenu === 'admin' ? 'primary' : 'default'} onClick={() => handleMenuClick('admin')}>
            {t('header.admin')}
          </Button>
        </Space>
      </div>
      <div className="header-right">
        <Space size="middle">
          <div onClick={handleProfileClick} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
            <Avatar src={user?.avatar || 'https://via.placeholder.com/40'} />
            <span className="user-name">{user?.full_name || 'Guest'}</span>
          </div>
          <LanguageSwitcher />
          <Button type="link" onClick={handleLogout}>{t('header.logout')}</Button>
        </Space>
      </div>
    </div>
  );
};

export default Header;