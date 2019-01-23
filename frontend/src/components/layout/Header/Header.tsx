import { Icon, Layout, Menu } from "antd";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

// interface Props {
//   isAuth: boolean;
//   userData: Object;
//   signOut: () => void;
// }

const Logo = styled.div`
  width: 120px;
  height: 31px;
  background: #001529;
  margin: 16px 24px 16px 0;
  float: left;
  cursor: pointer;
`;

// const Header = ({ isAuth, userData, signOut }: Props) => (
const Header = () => (
  <Layout.Header style={{ width: "100%", background: "#ffffff" }}>
    <Link href="/">
      <Logo />
    </Link>

    <Menu theme="light" mode="horizontal" style={{ lineHeight: "64px" }}>
      <Menu.Item key="newConference">
        <a
          href="https://goo.gl/forms/ND7hyjgEPBgZrewn2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon type="form" theme="outlined" />
          Add new conference
        </a>
      </Menu.Item>

      {/* <Menu.Item key="newConference">
        <Link href="/new-conference" prefetch={true}>
          <a>
            <Icon type="form" theme="outlined" />
            Add new conference
          </a>
        </Link>
      </Menu.Item>

     {!isAuth && (
        <Menu.Item key="signin">
          <Link href="/signin" prefetch={true}>
            <a>
              <Icon type="mail" theme="outlined" />
              Sign In
            </a>
          </Link>
        </Menu.Item>
      )}

      {!isAuth && (
        <Menu.Item key="signup">
          <Link href="/create-account" prefetch={true}>
            <a>
              <Icon type="mail" theme="outlined" />
              Sign Up
            </a>
          </Link>
        </Menu.Item>
      )}

      {isAuth && userData.role === 'MODERATOR' && (
        <Menu.Item key="admin">
          <Link href="/admin" prefetch={true}>
            <a>
              <Icon type="dashboard" theme="outlined" />
              Admin Panel
            </a>
          </Link>
        </Menu.Item>
      )}

      {isAuth && (
        <Menu.SubMenu
          title={
            <span>
              <Icon type="user" theme="outlined" />
              <span>{`${userData.name} (${userData.email})`}</span>
            </span>
          }
        >
          <Menu.Item key="profile">
            <Icon type="profile" theme="outlined" /> Profile
          </Menu.Item>
          <Menu.Item key="settings">
            <Icon type="setting" theme="outlined" /> Settings
          </Menu.Item>

          <Menu.Item key="signout">
            <a onClick={signOut}>
              <Icon type="poweroff" theme="outlined" />
              Sign Out
            </a>
          </Menu.Item>
        </Menu.SubMenu>
      )}

      {isAuth && (
        <Menu.Item key="role" disabled={true}>
          <div className={`role-badge ${userData.role.toLowerCase()}`}>
            {userData.role}
          </div>
        </Menu.Item>
      )} */}
    </Menu>

    {/* <style jsx global>{`
      .role-badge {
        display: inline-block;
        height: 20px;
        padding: 0 8px;
        border-radius: 10px;
        min-width: 20px;
        background: #d9d9d9;
        color: #fff;
        line-height: 20px;
        font-size: 12px;
        box-shadow: 0 0 0 1px #fff;

        &.attendee {
          background: #52c41a;
        }

        &.speaker {
          background: #1890ff;
        }

        &.moderator {
          background: #f5222d;
        }
      }
    `}</style> */}
  </Layout.Header>
);

export default Header;
