import * as React from "react";
import styled from "styled-components";
import { Link } from "@reach/router";

import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

export default function Nav() {
  return (
    <Layout>
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Link style={{ textDecoration: "none" }} to="/">

        <Menu.Item key="1">Home</Menu.Item>
        </Link>

        <Link style={{ textDecoration: "none" }} to="addlocation">
        <Menu.Item key="3">Ort hinzufügen</Menu.Item>
        <Link style={{ textDecoration: "none" }} to="addlocation">
      </Menu>
</Layout>
  );
}
