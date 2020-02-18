import React, { Component } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import './Register.css';

class Register extends Component {
    render() {
        return (
            <div className="Register">
                <Card>
                    <Card.Body>
                        <Card.Text>
                            <Form>
                                <Form.Group>
                                    <b> <Form.Label>Username</Form.Label> </b>
                                    <Form.Control type="name" placeholder="place here"/>
                                    <b> <Form.Label>Email</Form.Label> </b>
                                    <Form.Control type="email" placeholder="place here"/>
                                    <b> <Form.Label>Password</Form.Label> </b>
                                    <Form.Control type="password" placeholder="place here"/>
                                    <b> <Form.Label>Password Confirmation</Form.Label> </b>
                                    <Form.Control type="password-confirmation" placeholder="place here"/>
                                </Form.Group>
                                <div className="form-footer">
                                    <Button variant="primary" type="submit" className="btn btn-primary btn-block">
                                        Register
                                    </Button>
                                </div>
                            </Form>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }

}

export default Register;

