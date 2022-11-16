import React, {useState} from "react";
import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";



let Register = () => {

    let [state, setState] = useState({
        user: {
            username : '',
            email: '',
            password: ''

        }
    });

    let updateInput = (e) => {
        setState({
            ...state,
            user: {
                ...state.user,
            [e.target.name] : e.target.value

            }
        })
    };

    let register = (e) => {
        e.preventDefault();
        console.log(state.user);
    }


    return (
        <>
        <Container className="mt-3, mb-3">
            <Row>
                <Col xs={3}>
                    <Card className="shadow-lg">
                        <Card.Header className="p-3">
                            <h3>Register</h3>
                        </Card.Header>
                            <Card.Body>
                                <Form>
                                    <Form.Group className="mb-3">
                                        <Form.Control
                                        name="username"
                                        onChange={updateInput}
                                        type="text" placeholder="Username"/>
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Control
                                        name="email"
                                        onChange={updateInput}
                                         type="text" placeholder="Email"/>
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Control
                                        name="password"
                                        onChange={updateInput}
                                        type="text" placeholder="Password"/>
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Button onClick={register} variant="dark" type="submit">Register</Button>
                                    </Form.Group>
                                </Form>
                            </Card.Body>
                    </Card>
                </Col>
            </Row>
            </Container>
        </>
    )
};

export default Register;