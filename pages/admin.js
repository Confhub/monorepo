// @flow

import * as React from 'react';
import { withApollo, compose } from 'react-apollo';

import AdminPage from '../components/admin/AdminPage';

import redirect from '../lib/redirect';
import checkLoggedIn from '../lib/checkLoggedIn';

class AdminPageContainer extends React.Component<{}> {
  static async getInitialProps(context: any) {
    const { currentUser } = await checkLoggedIn(context.apolloClient);
    console.log(!currentUser);

    if (!currentUser.user || !currentUser.user.isAdmin) {
      redirect(context, '/');
    }

    return {};
  }

  render() {
    return <AdminPage />;
  }
}

export default withApollo(AdminPageContainer);
