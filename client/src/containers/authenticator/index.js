import React, { Component } from "react";
import { Authenticator } from "aws-amplify-react";
import { Bootstrap } from "a-theme-react";
import LoginForm from "../loginform";
import RegisterForm from "../registerform";
import ConfirmRegisterForm from "../confirmregisterform";
import VerifyContactForm from "../verifycontactform";
import ForgotPasswordForm from "../forgotpasswordform";
import AfterLoginForm from "../afterloginform";

export default class Login extends Component {
  render() {
    return (
      <div className="widget">
        <Authenticator hideDefault>
          <LoginForm />
          <RegisterForm />
          <ConfirmRegisterForm />
          <VerifyContactForm />
          <ForgotPasswordForm />
          <AfterLoginForm />
        </Authenticator>
      </div>
    );
  }
}
