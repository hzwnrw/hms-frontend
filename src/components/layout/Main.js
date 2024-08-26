import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Layout, Drawer, Affix } from 'antd';
import Sidenav from './Sidenav';
import Header from './Header';
import Footer from './Footer';

const { Header: AntHeader, Content, Sider } = Layout;

function Main() {
  const [visible, setVisible] = React.useState(false);
  const [placement, setPlacement] = React.useState('right');
  const [sidenavColor, setSidenavColor] = React.useState('#1890ff');
  const [sidenavType, setSidenavType] = React.useState('transparent');
  const [fixed, setFixed] = React.useState(false);

  const openDrawer = () => setVisible(!visible);
  const handleSidenavType = (type) => setSidenavType(type);
  const handleSidenavColor = (color) => setSidenavColor(color);
  const handleFixedNavbar = (type) => setFixed(type);

  const { pathname } = useLocation();

  React.useEffect(() => {
    if (pathname === 'rtl') {
      setPlacement('left');
    } else {
      setPlacement('right');
    }
  }, [pathname]);

  return (
    <Layout
      className={`layout-dashboard ${pathname === 'profile' ? 'layout-profile' : ''} ${pathname === 'rtl' ? 'layout-dashboard-rtl' : ''}`}
    >
      <Drawer
        title={false}
        placement={placement === 'right' ? 'left' : 'right'}
        closable={false}
        onClose={() => setVisible(false)}
        visible={visible}
        key={placement === 'right' ? 'left' : 'right'}
        width={250}
        className={`drawer-sidebar ${pathname === 'rtl' ? 'drawer-sidebar-rtl' : ''}`}
      >
        <Layout
          className={`layout-dashboard ${pathname === 'rtl' ? 'layout-dashboard-rtl' : ''}`}
        >
          <Sider
            trigger={null}
            width={250}
            theme="light"
            className={`sider-primary ant-layout-sider-primary ${sidenavType === '#fff' ? 'active-route' : ''}`}
            style={{ background: sidenavType }}
          >
            <Sidenav color={sidenavColor} />
          </Sider>
        </Layout>
      </Drawer>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onCollapse={(collapsed, type) => console.log(collapsed, type)}
        trigger={null}
        width={250}
        theme="light"
        className={`sider-primary ant-layout-sider-primary ${sidenavType === '#fff' ? 'active-route' : ''}`}
        style={{ background: sidenavType }}
      >
        <Sidenav color={sidenavColor} />
      </Sider>
      <Layout>
        {fixed ? (
          <Affix>
            <AntHeader className={`${fixed ? 'ant-header-fixed' : ''}`}>
              <Header
                onPress={openDrawer}
                name={pathname}
                subName={pathname}
                handleSidenavColor={handleSidenavColor}
                handleSidenavType={handleSidenavType}
                handleFixedNavbar={handleFixedNavbar}
              />
            </AntHeader>
          </Affix>
        ) : (
          <AntHeader className={`${fixed ? 'ant-header-fixed' : ''}`}>
            <Header
              onPress={openDrawer}
              name={pathname}
              subName={pathname}
              handleSidenavColor={handleSidenavColor}
              handleSidenavType={handleSidenavType}
              handleFixedNavbar={handleFixedNavbar}
            />
          </AntHeader>
        )}
        <Content className="content-ant">
          <Outlet /> {/* This renders the routed content */}
        </Content>
        <Footer />
      </Layout>
    </Layout>
  );
}

export default Main;
