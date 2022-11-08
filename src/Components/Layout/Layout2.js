import {
  CloudServerOutlined,
    DesktopOutlined,
    DollarOutlined,
    ExportOutlined,
    FileOutlined,
    GifOutlined,
    GiftOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
  } from '@ant-design/icons';

import { Breadcrumb, Layout, Menu } from 'antd';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
  
  const { Header, Content, Footer, Sider } = Layout;
  
  
function getItem(
    label,
    key,
    icon=undefined,
    children=undefined,
) {
    return {
      key,
      icon,
      children,
      label,
    };
}
  
const items = [
    getItem('Dashboard', 'dashboard', <PieChartOutlined />),
    getItem('Customers', '/customers', <TeamOutlined />),
    getItem('plans', '/plans', <GiftOutlined />),
    getItem('Payments', 'sub3', <DollarOutlined />, [
        getItem('Pending Payments', '/payments'), 
        getItem('Payment History', '/payments/history')
    ]),
    getItem('Expense', 'sub4', <ExportOutlined />, [
        getItem('Expense Category', '/expense/category'), 
        getItem('Expense', '/expense')
    ]),
    getItem('Services', 'sub5', <CloudServerOutlined />, [
        getItem('Panels', '/panels'), 
        getItem('Nas', '/nas')
  ]),
];


 
  
const Layout2 = (props) => {

    const navigate = useNavigate();
    const authState = useSelector((state)=>state.auth);
    const [collapsed, setCollapsed] = useState(true);

    const handleMenuClick = (e) =>{
        if(!e.key.includes('sub')){
            navigate(`${e.key}`);
        }

    }
  
    return (
        <>
            {authState.check?(
                <Layout style={{ minHeight: '100vh' }} hasSider>
                <Sider collapsible collapsed={collapsed} 
                        onMouseEnter={() => setCollapsed(false)}
                        onMouseLeave={() => setCollapsed(true)}
                        style={{
                            overflow: 'auto',
                            height: '100vh',
                            position: 'fixed',
                            left: 0,
                            top: 0,
                            bottom: 0,
                            zIndex:'10000'
                          }}
                    >
                  <div className="logo" >
                    <h1 className='px-4 text-white py-4 text-lg'>
                        Logo
                    </h1>
                  </div>
                  <Menu theme="dark"
                        onClick={handleMenuClick}
                        defaultSelectedKeys={['1']} 
                        mode="inline" 
                        items={items} />
                </Sider>
                <Layout className="site-layout" style={{ marginLeft:collapsed?80:80 }}>
                  <Header className="site-layout-background bg-slate-50" style={{ padding: 0,backgroundColor:'#1890ff' }} />
                  <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '8px 0' }}>
                      <Breadcrumb.Item>Home</Breadcrumb.Item>
                      <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="site-layout-background" style={{ padding:'15px 10px', minHeight: 360 }}>
                      {props.children}
                    </div>
                  </Content>
                  <Footer style={{ textAlign: 'center' }}>©2022 Created by ISPBoxOffice</Footer>
                </Layout>
              </Layout>
            ):(
                <Navigate to="/login" replace />
            )}
        </>
    );
  };
  
  export default Layout2;