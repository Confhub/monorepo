// @flow

import * as React from 'react';
import Link from 'next/link';

type Props = {
  pathname: string,
  url: string,
  title: string,
};

const HeaderLink = ({ pathname, url, title }: Props) => {
  return (
    <React.Fragment>
      <Link prefetch href={url}>
        <a className={pathname === url ? 'is-active' : ''}>{title}</a>
      </Link>

      <style jsx>{`
        a {
          color: black;
        }
      `}</style>
    </React.Fragment>
  );
};

export default HeaderLink;
