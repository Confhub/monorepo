// @flow

import { Fragment } from 'react';
import Link from 'next/link';

type Props = {
  pathname: string,
  url: string,
  title: string,
};

const HeaderLink = ({ pathname, url, title }: Props) => {
  return (
    <Fragment>
      <Link prefetch href={url}>
        <a className={pathname === url ? 'is-active' : ''}>{title}</a>
      </Link>

      <style jsx>{`
        a {
          color: black;
        }
      `}</style>
    </Fragment>
  );
};

export default HeaderLink;
