import React from 'react'
import { useState } from 'react'
import { Button, Modal, InputGroup, FormControl, Form } from 'react-bootstrap'


const UserAddModal = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>

                    <Modal.Header closeButton>
                    <Modal.Title>Add new user</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                    <InputGroup className="mb-3">
                        <FormControl
                        placeholder="First Name"
                        aria-label="firstName"
                        aria-describedby="basic-addon1"
                        />
                        <FormControl
                        placeholder="Last Name"
                        aria-label="lastName"
                        aria-describedby="basic-addon1"
                        style={{ width:'300px' }}
                        className='ml-3'
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <FormControl
                        placeholder="Street Address"
                        aria-label="streetAddress"
                        aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <FormControl
                        placeholder="City"
                        aria-label="city"
                        aria-describedby="basic-addon1"
                        style={{ width:'300px' }}
                        />
                        <FormControl
                        placeholder="State"
                        aria-label="state"
                        aria-describedby="basic-addon1"
                        />
                        <FormControl
                        placeholder="ZIP"
                        aria-label="zip"
                        aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <FormControl
                        placeholder="Email Address"
                        type='email'
                        aria-label="email"
                        aria-describedby="basic-addon1"
                        />
                        <FormControl
                        placeholder="Phone number"
                        type='phone'
                        aria-label="phone"
                        aria-describedby="basic-addon1"
                        />
                    </InputGroup>

                    <Form>
                    <Form.Check inline name='jobTitle' type='radio' id='isAttorney' label='Attorney' />
                    <Form.Check inline name='jobTitle' type='radio' id='isParalegal' label='Paralegal' />
                    <Form.Check inline name='jobTitle' type='radio' id='isPropertyManager' label='Property Manager' />
                    <Form.Check inline name='jobTitle' type='radio' id='isPMManager' label='Supervisor' />
                    </Form>

                    <Form.Select aria-label="Default select example">
                    <option>Company</option>
                    <option value="1">Bassin and Barjenbruch, LLC</option>
                    <option value="2">Prism Real Estate Services</option>
                    <option value="3">Conrex Property Management, LLC</option>
                    </Form.Select>

                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="dark" onClick={handleClose}>
                        Save Changes
                    </Button>
                    </Modal.Footer>
            
        </>
    )
}

export default UserAddModal