import * as React from 'react';
import Link from 'next/link';

import redirect from '../lib/redirect';
import checkLoggedIn from '../lib/checkLoggedIn';

import SigninBox from '../components/SigninBox';

export default class Signin extends React.Component {
  render() {
    return (
      <React.Fragment>
        <SigninBox />
        <hr />
        New?{' '}
        <Link prefetch href="/create-account">
          <a>Create account</a>
        </Link>
      </React.Fragment>
    );
  }
}
