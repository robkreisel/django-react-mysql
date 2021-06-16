import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import {
  Alert,
  Container,
  Button,
  Row,
  Col,
  Form,
  FormControl
} from "react-bootstrap";

class ResendActivation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      emailError: "",
      status: ""
    };
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onResendClick = () => {
    this.setState({ emailError: "" });
    this.setState({ status: "" });

    const userData = {
      email: this.state.email
    };

    axios
      .post("/api/v1/users/resend_activation/", userData)
      .then(response => {
        this.setState({ status: "success" });
      })
      .catch(error => {
        if (error.response && error.response.data.hasOwnProperty("email")) {
          this.setState({ emailError: error.response.data["email"] });
        } else {
          this.setState({ status: "error" });
        }
      });
  };
  render() {
    let errorAlert = (
      <Alert variant="danger">
        <Alert.Heading>Problem sending activation email</Alert.Heading>
        Please try again or contact support for assistance.
      </Alert>
    );

    let successAlert = (
      <Alert variant="success">
        <Alert.Heading>Email sent </Alert.Heading>
        <p>
          Another email has been sent to the address provided. Please click the link in the email
          to activate your account.
        </p>
        <p>
          Check your spam folder and contact support if you do not receive the email within a few
          minutes.
        </p>
      </Alert>
    );

    let form = (
      <div>
        <Form>
          <Form.Group controlId="emailId">
            <Form.Label>
              Your account is inactive. Please enter your email address so an activation link can
              be sent to you.
            </Form.Label>
            <Form.Control
              isInvalid={this.state.emailError}
              type="text"
              name="email"
              placeholder="Enter email"
              value={this.state.email}
              onChange={this.onChange}
            />
            <FormControl.Feedback type="invalid">
              {this.state.emailError}
            </FormControl.Feedback>
          </Form.Group>
        </Form>
        <Button color="primary" onClick={this.onResendClick}>
          Send activation email
        </Button>
      </div>
    );

    let alert = "";
    if (this.state.status === "error") {
      alert = errorAlert;
    } else if (this.state.status === "success") {
      alert = successAlert;
    }

    return (
      <Container>
        <Row>
          <Col md="6">
            <h1>Resend Activation Email</h1>
            {alert}
            {this.state.status !== "success" && form}
          </Col>
        </Row>
      </Container>
    );
  }
}

ResendActivation.propTypes = {};

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(withRouter(ResendActivation));
