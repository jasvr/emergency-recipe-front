import React, { Component } from "react";
import { Row, Col, Card, Input } from "react-materialize";
import { Link } from "react-router-dom";
import "./Auth.css";

class Auth extends Component {
  constructor(props) {
    super(props);
    this.loginAndRedirect = this.loginAndRedirect.bind(this);
    this.signUpAndRedirect = this.signUpAndRedirect.bind(this);
  }

  loginAndRedirect(event) {
    this.props.handleLogIn(event);
    this.props.history.push("/");
  }

  signUpAndRedirect(event) {
    this.props.handleSignUp(event);
    this.props.history.push("/");
  }

  render() {
    return (
      <div>
        <Row className="auth-form-container">
          <Col l={12} m={12} s={12}>
            <Card
              className="login-form-box"
              textClassName="white-text"
              title="We need to check your ID."
              actions={[
                <Link
                  key={"1"}
                  id="authenticate-link"
                  onClick={this.signUpAndRedirect}
                  to="/home"
                >
                  Create A New Account
                </Link>,
                <Link
                  key={"2"}
                  id="authenticate-link"
                  onClick={this.loginAndRedirect}
                  to="/home"
                >
                  Sign In
                </Link>
              ]}
            >
              <Row className="auth-inputs">
                <form>
                  <Input
                    s={12}
                    m={6}
                    l={6}
                    label="Username"
                    name="username"
                    onChange={this.props.handleAuthInput}
                  />
                  <Input
                    s={12}
                    m={6}
                    l={6}
                    label="Password"
                    name="password"
                    type="password"
                    onChange={this.props.handleAuthInput}
                  />
                </form>
              </Row>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Auth;
