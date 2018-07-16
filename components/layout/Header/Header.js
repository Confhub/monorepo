// @flow

import * as React from 'react';
import Link from 'next/link';
import { Layout, Menu, Icon } from 'antd';

type Props = {
  pathname: string,
  isAuth: boolean,
};

const Header = ({ pathname, isAuth, signOut, userData }: Props) => (
  <Layout.Header>
    <Link href="/">
      <div className="logo" />
    </Link>

    {isAuth && (
      <Menu theme="dark" mode="horizontal" style={{ lineHeight: '64px' }}>
        <Menu.Item key="signout" style={{ float: 'right' }}>
          <a onClick={signOut}>
            <Icon type="poweroff" />Sign Out{' '}
            {userData ? <span>&#40;{userData.email}&#41;</span> : null}
          </a>
        </Menu.Item>
      </Menu>
    )}

    {!isAuth && (
      <Menu theme="dark" mode="horizontal" style={{ lineHeight: '64px' }}>
        <Menu.Item key="signup" style={{ float: 'right' }}>
          <Link href="/signup" prefetch>
            <a>
              <Icon type="mail" />Sign Up
            </a>
          </Link>
        </Menu.Item>

        <Menu.Item key="signin" style={{ float: 'right' }}>
          <Link href="/signin" prefetch>
            <a>
              <Icon type="mail" />Sign In
            </a>
          </Link>
        </Menu.Item>

        <Menu.Item key="admin" style={{ float: 'right' }}>
          <Link href="/admin" prefetch>
            <a>
              <Icon type="dashboard" />Admin Panel
            </a>
          </Link>
        </Menu.Item>
      </Menu>
    )}

    <style jsx>{`
      .logo {
        width: 120px;
        height: 31px;
        background: rgba(255, 255, 255, 0.2);
        margin: 16px 24px 16px 0;
        float: left;
        cursor: pointer;
      }
    `}</style>
  </Layout.Header>
);

export default Header;
