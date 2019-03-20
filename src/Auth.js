import React, { Component } from 'react';
import { Row, Col, Card, Input } from "react-materialize";
import './Auth.css';

class Auth extends Component {
  render() {
    return (
      <div>
        <Row className="auth-form-container">
          <Col l={12} m={12} s={12}>
            <Card className='login-form-box' textClassName='white-text' title='We need to check your ID.' actions={[<a href='#'>Authenticate Me</a>]}>
              <Row>
                <Input s={12} m={6} l={6} label="Email" />
                <Input s={12} m={6} l={6} label="Password" type="password" />
              </Row>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Auth;