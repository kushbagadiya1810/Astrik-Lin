import React from "react";

import Page from "src/components/Page";
import LoginPage from "src/views/component/auth/Login";

const LoginView = () => {
  return (
    <Page title="Sign In">
      <LoginPage />
    </Page>
  );
};

export default LoginView;
