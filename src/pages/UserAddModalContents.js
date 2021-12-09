import React from 'react'
import { Modal, InputGroup, FormControl, Form } from 'react-bootstrap'


const UserAddModalContents = () => {

    return (
        <>
                    
                    <Modal.Body>

                    <InputGroup className="mb-3 py-1">
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
                    <InputGroup className="mb-3 py-1">
                        <FormControl
                        placeholder="Street Address"
                        aria-label="streetAddress"
                        aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                    <InputGroup className="mb-3 py-1">
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

                    <Form className='py-3'>
                    <Form.Check inline name='jobTitle' type='radio' id='isAttorney' label='Attorney' />
                    <Form.Check inline name='jobTitle' type='radio' id='isParalegal' label='Paralegal' />
                    <Form.Check inline name='jobTitle' type='radio' id='isPropertyManager' label='Property Manager' />
                    <Form.Check inline name='jobTitle' type='radio' id='isPMManager' label='Property Manager Supervisor' />
                    </Form>

                    <Form className='py-3'>
                        <Form.Check inline name='requestEviction' type='switch' id='canRequestEviction' label='Request eviction?' />
                        <Form.Check inline name='requestDismiss' type='switch' id='canRequestDismiss' label='Request dismissal?' />
                        <Form.Check inline name='requestWrit' type='switch' id='canRequestWrit' label='Request writ?' />
                        <Form.Check inline name='UpdateCase' type='switch' id='canUpdateCase' label='Update Case?' />
                    </Form>
                    <Form className='py-3'>
                        <Form.Check inline name='CreatePM' type='switch' id='canCreatePM' label='Create Property Manager?' />
                        <Form.Check inline name='CreateOwner' type='switch' id='canCreateOwner' label='Create Owner?' />
                        <Form.Check inline name='CreateUser' type='switch' id='canCreateUser' label='Create User?' />
                    </Form>

                    <Form.Select aria-label="select company">
                    <option>Company</option>
                    <option value="1">Bassin and Barjenbruch, LLC</option>
                    <option value="2">Prism Real Estate Services</option>
                    <option value="3">Conrex Property Management, LLC</option>
                    </Form.Select>

                    </Modal.Body>
            
        </>
    )
}

export default UserAddModalContents