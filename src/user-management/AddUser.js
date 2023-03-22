import { useEffect, useState } from "react";
import { Button, Modal, Form, Alert,Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import './user.css';

const Adduser = ({ onSave }) => {
    console.log("Add User Re rendered.....")

    const initialState = {
        fname: "",
        lname: "",
        email: "",
        phone: "",
        status: false
    }

    const [show, setShow] = useState(false)
    const [user, setUser] = useState(initialState)

    const [error, setError] = useState(false)

    // Handle Input Changes
    const handleInputChange = (e, field) => {
        setUser((prevState) => ({ ...prevState, [field]: e.target.value }))
    }

    // Handle Checkbox CHanges
    const handleCheckBoxChange = (e) => {
        setUser((prevState) => ({ ...prevState, status: !prevState.status }))
    }


    // Handle OnSubmit button 
    const handleOnSubmit = () => {
        onSave(user); //Send Data to parent component
        setShow(false) //Hide Model Popup
        setUser(initialState) //Reset state value to clear form
    }

    return (
        <div className="text-end addComponent" style={{ marginBottom: "10px" }}>
            <Navbar bg="dark" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#" className='text-light fw-bold fs-4'>Navbar scroll</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1" className='text-light fs-4'>Home</Nav.Link>
                            <Nav.Link href="#action2" className='text-light fs-4'>Link</Nav.Link>
                            <NavDropdown title="Link" id="navbarScrollingDropdown" className='text-light fs-4'>
                                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#" disabled className='text-light fs-4'>
                                Link
                            </Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-light bg-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div>
                <h1 className='my-3 text-center'>User Management</h1>
            </div>
            <div className="mx-5">
                <Button onClick={() => setShow(true)}>Add User</Button>
                <Modal show={show} onHide={() => setShow(false)}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Create New User
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {error && <Alert variant='danger'>
                            Some of the inputs are not valid
                        </Alert>}

                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" value={user.fname} placeholder="Enter First Name" onChange={(e) => handleInputChange(e, 'fname')} autoFocus />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" value={user.lname} placeholder="Enter Last Name" onChange={(e) => handleInputChange(e, 'lname')} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" value={user.email} placeholder="Enter Email" onChange={(e) => handleInputChange(e, 'email')} />
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Form.Label>Phone</Form.Label>
                                <Form.Control type="number" value={user.phone} placeholder="Enter Phone Number" onChange={(e) => handleInputChange(e, 'phone')} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Check type="checkbox" checked={user.status} label="IsActive" onChange={handleCheckBoxChange} />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="default" onClick={() => setShow(false)} >Close</Button>
                        <Button variant="primary" type="submit" onClick={handleOnSubmit}>
                            Create
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    )

}

export default Adduser;