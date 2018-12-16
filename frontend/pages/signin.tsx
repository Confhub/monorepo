import Link from 'next/link';
import * as React from 'react';

import checkLoggedIn from '../lib/checkLoggedIn';
import redirect from '../lib/redirect';

import SigninBox from '../components/SigninBox';

export default class Signin extends React.Component {
  public render() {
    return (
      <React.Fragment>
        <SigninBox />
        <hr />
        New?{' '}
        <Link prefetch={true} href="/create-account">
          <a>Create account</a>
        </Link>
      </React.Fragment>
    );
  }
}
