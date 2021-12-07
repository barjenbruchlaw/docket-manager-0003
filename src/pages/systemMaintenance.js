import React from 'react'
import { useState } from 'react'
import { Container, Row, Col, Tabs, Tab, Button, Modal, InputGroup, FormControl, Form } from 'react-bootstrap'
import PageNavBar from '../components/PageNavBar'
import UserTable from './userTable'
import './pages.css'

const SystemMaintenance = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className='grid-container'>

            <header className='page-header'><Container><Row>
            <Col><h1>Docket Manager v. 0.3</h1></Col>
            <Col Col className='text-end mt-auto'>Signed in as <a href='/' style={{ color: 'white' }}>Brian Barjenbruch</a></Col>
            </Row></Container></header>

            <sidebar className='page-sidebar'>
            <PageNavBar />
            </sidebar>

            <main className='page-main'>
            
            <Tabs className='TabBar nav-justified'>
            
            <Tab eventKey='pm' title='Property Managers' className='p-3'>Property Managers:</Tab>
            <Tab eventKey='owner' title='Property Owners' className='p-3'>Owners:</Tab>
            <Tab eventKey='user' title='Users' className='p-3'>

                <Button variant='dark' onClick={handleShow}>Add new user</Button>


                <Modal show={show} onHide={handleClose} size='lg'>
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

                    <Form.Select aria-label="selectCompany">
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
                </Modal>


                <UserTable />

            </Tab>
            <Tab eventKey='jurisdiction' title='Jurisdictions' className='p-3'>Jurisdictions:</Tab>
            <Tab eventKey='judge' title='Judges' className='p-3'>Judges:</Tab>

            </Tabs>
            </main>        
        </div>
    )
}

export default SystemMaintenance