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

      {isAuth && (
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
        <Menu.Item key="signout">
          <a onClick={signOut}>
            <Icon type="poweroff" />
            Sign Out{" "}
            {userData ? (
              <span>
                &#40;
                {userData.email}
                &#41;
              </span>
            ) : null}
          </a>
        </Menu.Item>
      )}

      {/* <Menu.Item key="user">
        <p>Hello</p>
        </Menu.Item> */}
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
    `}</style>
  </Layout.Header>
);

export default Header;
