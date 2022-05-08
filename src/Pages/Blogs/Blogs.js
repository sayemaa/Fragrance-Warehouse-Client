import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div className='container my-5'>
            <h2 className='text-center mb-4'>Frequently Asked Questions</h2>
            <Accordion className='mb-5' defaultActiveKey={['0']} alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Header><h6>Differences between JavaScript and NodeJS.</h6></Accordion.Header>
                    <Accordion.Body>
                        JavaScript is a client-side programming language that can only be executed in web browsers. NodeJS, on the other hand, is a JavaScript runtime environment that is usually utilized on the server side. NodeJS is used to run JavaScript outside of the browser. In frontend development, JavaScript is used. However, NodeJS is utilized in server-side development.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header><h6>Differences between SQL and NoSQL databases.</h6></Accordion.Header>
                    <Accordion.Body>
                        SQL is a relational database management system. These databases have fixed schema and suitable for complex queries, but not for hierarchical data storage. NoSQL, on the other hand, is a non-relational database system with a dynamic schema, best suited for hierarchical data storage, but not for complex queries. NoSQL can scale horizontally, whereas SQL can be scaled vertically.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header><h6>What is the purpose of JWT and how does it work?</h6></Accordion.Header>
                    <Accordion.Body>
                        To keep unauthorized users from accessing a protected resource, JWT, or JSON Web Token is used. JWT is a way for determining who owns JSON data.
                        <br />
                        When a client uses their username and password to log in, the server issues a token for that client. The token is saved by the client in either local storage or a browser cookie. When the client makes a request to the backend, a copy of the token is sent to the server for bearer authentication. Before granting authorization, the server verifies the token. The server answers to the client's request if the token is confirmed.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blogs;