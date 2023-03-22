import { useEffect, useState } from "react";
import { Button, Modal, Form, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import './user.css';


const EditUser = ({ UserToEdit, showModel, onUpdate, onCancel }) => {
    console.log("Edit Management Re rendered.....")
    const [user, setUser] = useState(UserToEdit)

    useEffect(() => {
        console.log("Edit User User Effect Demo")
        return () => {
            console.log("Clean up function")
        }
    }, [])

    const handleInputChange = (e, field) => {
        setUser((prevState) => ({ ...prevState, [field]: e.target.value }))
    }

    const handleCheckBoxChange = (e) => {
        setUser((prevState) => ({ ...prevState, status: !prevState.status }))
    }
    return (


        <div className="text-end editComponent" style={{ marginBottom: "10px" }}>
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
                <Modal show={showModel} onHide={onCancel}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Edit User
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
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
                        <Button variant="default" onClick={onCancel} >Close</Button>
                        <Button variant="primary" type="submit" onClick={() => onUpdate(user)}>
                            Update
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    )
}

export default EditUser;