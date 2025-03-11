// src/components/AppLayout.tsx
import React from 'react';
import { Layout, Menu } from 'antd';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { Link } from 'react-router-dom';

const { Header, Sider, Content } = Layout;

const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const user = useSelector((state: RootState) => state.user.currentUser);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider width={200}>
        <Menu mode="inline" defaultSelectedKeys={['1']} style={{ height: '100%', borderRight: 0 }}>
          <Menu.Item key="1">
            <Link to="/">Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/retail">Retail</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/trace">Trace</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: '#fff' }}>
          <div style={{ padding: '0 16px' }}>
            Welcome, {user?.full_name || 'User'}!
          </div>
        </Header>
        <Content style={{ margin: '16px' }}>
          <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
            {children}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;