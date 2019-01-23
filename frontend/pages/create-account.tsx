import Link from 'next/link';
import * as React from 'react';

import checkLoggedIn from '../lib/checkLoggedIn';
import redirect from '../lib/redirect';

import RegisterBox from '../src/components/RegisterBox';

export default class CreateAccount extends React.Component {
  public render() {
    return (
      <React.Fragment>
        <RegisterBox />
        <hr />
        Already have an account?{' '}
        <Link prefetch={true} href="/signin">
          <a>Sign in</a>
        </Link>
      </React.Fragment>
    );
  }
}
