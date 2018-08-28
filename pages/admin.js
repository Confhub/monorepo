import * as React from "react";
import { withApollo } from "react-apollo";

import AdminPage from "../components/admin/AdminPage";

class AdminPageContainer extends React.Component {
  // static async getInitialProps(context) {

  //   const { currentUser } = await checkLoggedIn(context.apolloClient);

  //   if (!currentUser.user || !currentUser.user.isAdmin) {
  //     redirect(context, '/');
  //   }

  //   return {};
  // }

  render() {
    return <AdminPage />;
  }
}

export default withApollo(AdminPageContainer);
