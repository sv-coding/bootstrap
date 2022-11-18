import React from 'react';
import { useEffect, useState } from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import { UserService } from '../services/UserService';

let UserList = () => {

let [state , setState] = useState({
    users : []
});

useEffect(() => {
    UserService.getAllUsers().then((response) => {
        setState({
            ...state,
            users : response.data
        })
    }).catch((error) => {
        console.log(error);
    });

    }, [state])

    return (
        <>
            <Container className="mt-3">
                <Row>
                    <Col>
                    <h3 className="text-primary">User List</h3>
                    <p className='fst-italic'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Table striped bordered hover className='shadow-lg text-center'>
                       <thead>
                        <tr>
                       <th>Number</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Website</th>
                        <th>Company</th>
                        <th>Location</th>
                        </tr>
                       </thead>
                       <tbody>
                            {
                                state.users.length > 0 &&
                                state.users.map(user => {
                                    return (
                                        <tr key={user.id}>
                                            <td>{user.id}</td>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>{user.website}</td>
                                            <td>{user.company.name}</td>
                                            <td>{user.address.city}</td>
                                        </tr>
                                    )
                                })
                            }    
                       </tbody>
                    </Table>
                    </Col>
                </Row>
            </Container>
        </>
    )

};

export default UserList;