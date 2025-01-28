import React from "react";
import { Flex, Layout, Menu } from "antd";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { UserOutlined, LaptopOutlined, NotificationOutlined } from "@ant-design/icons";
import { Detailcon, FlagIcon, HammerIcon, NotificationIcon, ProfileIcon, StatisticIcon } from "../icons";
import SettingsIcon from "../icons/SettingsIcon";

const { Header, Content, Sider } = Layout;

const DashboardLayout: React.FC = () => {
  const navigate = useNavigate();
  // const {
  //   token: { colorBgContainer, borderRadiusLG },
  // } = theme.useToken();

  const menuItems = [
    {
      key: "detail",
      icon: <Detailcon />,
      label: "Детализация",
      onClick: () => navigate("/detail"),
    },
    {
      key: "statistic",
      icon: <StatisticIcon />,
      label: "Статистика",
      onClick: () => navigate("/statistic"),
    },
    {
      key: "benefits",
      icon: <HammerIcon />,
      label: "Привилегии ",
      onClick: () => navigate("/benefits"),
    },
    {
      key: "settings",
      icon: <SettingsIcon />,
      label: "Настройки",
      onClick: () => navigate("/settings"),
    },
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header style={{ display: "flex", alignItems: "center", color: "#222", background: '#fff' }}>

        <div className="header">
          <Link to="/">
            <img src="logo.png" alt="" />
          </Link>

          <ul style={{display: "flex", gap: 32}}>
            <li style={{display: "flex", gap: 8, alignItems: "center"}}>
              <NotificationIcon />
              <span>Квота: выключиа</span>
            </li>
            <li style={{display: "flex", gap: 8, alignItems: "center"}}>
              <FlagIcon />
              <span>RUS</span>
            </li>
            <li style={{display: "flex", gap: 8, alignItems: "center"}}>
              <ProfileIcon />
              <span>Мамадсаидов Саид</span>
            </li>
          </ul>
        </div> 
       
      </Header>

      <Layout>
        <Sider
          width={200}
          style={{
            background: '#161616',
            borderRadius: '',
          }}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={["dashboard"]}
            style={{ height: "100%", borderRight: 0 }}
            items={menuItems}
          />
        </Sider>

        <Layout style={{ padding: "24px" }}>
          <Content
            style={{
              background: 'colorBgContainer',
              borderRadius: 'borderRadiusLG',
              padding: "24px",
              minHeight: 280,
            }}
          >
            <Outlet />
          </Content>

        
        </Layout>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
