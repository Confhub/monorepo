import * as React from "react";
import Link from "next/link";
import { Layout, Menu, Icon } from "antd";

const Header = ({ isAuth, userData, signOut }) => (
  <Layout.Header style={{ width: "100%", background: "#ffffff" }}>
    <Link href="/">
      <div className="logo" />
    </Link>

    <Menu theme="light" mode="horizontal" style={{ lineHeight: "64px" }}>
      <Menu.Item key="newConference">
        <Link href="/new-conference" prefetch>
          <a>
            <Icon type="form" />
            Add new conference
          </a>
        </Link>
      </Menu.Item>

      {!isAuth && (
        <Menu.Item key="signin">
          <Link href="/signin" prefetch>
            <a>
              <Icon type="mail" />
              Sign In
            </a>
          </Link>
        </Menu.Item>
      )}

      {!isAuth && (
        <Menu.Item key="signup">
          <Link href="/create-account" prefetch>
            <a>
              <Icon type="mail" />
              Sign Up
            </a>
          </Link>
        </Menu.Item>
      )}

      {isAuth &&
        userData.role === "MODERATOR" && (
          <Menu.Item key="admin">
            <Link href="/admin" prefetch>
              <a>
                <Icon type="dashboard" />
                Admin Panel
              </a>
            </Link>
          </Menu.Item>
        )}

      {isAuth && (
        <Menu.SubMenu
          title={
            <span>
              <Icon type="user" />
              <span>{`${userData.name} (${userData.email})`}</span>
            </span>
          }
        >
          <Menu.Item key="profile">
            <Icon type="profile" /> Profile
          </Menu.Item>
          <Menu.Item key="settings">
            <Icon type="setting" /> Settings
          </Menu.Item>

          <Menu.Item key="signout">
            <a onClick={signOut}>
              <Icon type="poweroff" />
              Sign Out
            </a>
          </Menu.Item>
        </Menu.SubMenu>
      )}

      {isAuth && (
        <div className={`role-badge ${userData.role.toLowerCase()}`}>
          {userData.role}
        </div>
      )}
    </Menu>

    <style jsx>{`
      .logo {
        width: 120px;
        height: 31px;
        background: #001529;
        margin: 16px 24px 16px 0;
        float: left;
        cursor: pointer;
      }

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
    `}</style>
  </Layout.Header>
);

export default Header;
