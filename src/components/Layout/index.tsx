import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Drawer } from 'antd';
import { useNotification } from '../../hooks';
import Header from '../Header';
import Sidebar from '../Sidebar';
import { RootState } from '../../store';
import './Layout.css';

const Layout: React.FC = () => {
  const { contextHolder } = useNotification();
  const [activeMenu, setActiveMenu] = useState('overview');
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const user = useSelector((state: RootState) => state.user.user);

  if (!user) {
    return <Outlet />;
  }

  return (
    <div className="layout-container">
      {contextHolder}
      <Header activeMenu={activeMenu} onMenuChange={setActiveMenu} toggleSidebar={() => setIsSidebarVisible(true)} />
      <div className="layout-content">
        <Sidebar activeMenu={activeMenu} />
        <Drawer
          title={null}
          placement="left"
          closable={false}
          onClose={() => setIsSidebarVisible(false)}
          open={isSidebarVisible}
          width={250}
          className="sidebar-drawer"
          bodyStyle={{ padding: 0 }}
        >
          <Sidebar activeMenu={activeMenu} />
        </Drawer>
        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;