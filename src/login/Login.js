import React from "react";
import "./Login.css";
import logo from "./assets/blank.png";
import { Card, Form, Button } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";

function Login() {
    return (
        <form className="logincontainer">
            <div className="imgcontainer">
                <img src={logo} alt="logo" className="logo"/>
            </div>

            <div className="container">
                <Card>
                    <Card.Body>
                        <Card.Text>
                            <label>
                                <b>Username</b>
                                <input type="text" placeholder="place here" required/>
                            </label>

                            <label>
                                <b>Password</b>
                                <input type="password" placeholder="place here" required/>
                            </label>
                            <LinkContainer to="/home">
                                <button type="submit">Login</button>
                            </LinkContainer>
                            <label>
                                Remember me <b> </b>
                                <input type="checkbox" checked="checked" name="remember"/>
                            </label>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>

            <div className="add-on">
                <span className="psw">Forgot <a href="#">password?</a></span>
                <b> | </b>
                <LinkContainer to="/register">
                    <a>Register</a>
                </LinkContainer>
            </div>
        </form>
    )
}

export default Login;
