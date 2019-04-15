import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Navbar from '../component/navbar/NavBar.js';

export default class Login extends React.Component {
  render() {
    return (
      <>
      <Navbar />
      <Form>
        <FormGroup row>
          <Label for="exampleEmail" sm={2}>Username</Label>
          <Col sm={10}>
            <Input type="text" name="email" id="exampleEmail" placeholder="Masukkan Username" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="examplePassword" sm={2}>NIK</Label>
          <Col sm={10}>
            <Input type="password" name="password" id="examplePassword" placeholder="Masukkan Nomer NIK" />
          </Col>
        </FormGroup>
        <FormGroup check row>
          <Col sm={{ size: 10, offset: 2 }}>
            <Button>Submit</Button>
          </Col>
        </FormGroup>
      </Form>
      </>
    );
  }
}