import * as React from 'react';
import { withApollo } from 'react-apollo';

import AdminPageContainer from '../components/admin/AdminPage';

class AdminPage extends React.Component {
  public render() {
    return <AdminPageContainer />;
  }
}

export default withApollo(AdminPage);
