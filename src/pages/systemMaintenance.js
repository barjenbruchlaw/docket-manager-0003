import React from 'react'
import { useState } from 'react'
import { Container, Row, Col, Tabs, Tab, Button, Modal } from 'react-bootstrap'
import PageNavBar from '../components/PageNavBar'
import UserTable from './userTable'
import UserAddModalContents from './UserAddModalContents'
import './pages.css'

const SystemMaintenance = () => {

    const [showAddUser, setShowAddUser] = useState(false);
    const handleAddUserClose = () => setShowAddUser(false);
    const handleAddUserShow = () => setShowAddUser(true);

    return (
        <div className='grid-container'>

            <header className='page-header'><Container><Row>
            <Col><h1>Docket Manager v. 0.3</h1></Col>
            <Col className='text-end mt-auto'>Signed in as <a href='/' style={{ color: 'white' }}>Brian Barjenbruch</a></Col>
            </Row></Container></header>

            <div className='page-sidebar'>
            <PageNavBar />
            </div>

            <main className='page-main'>
            
            <Tabs className='TabBar nav-justified'>
            
            <Tab eventKey='pm' title='Property Managers' className='p-3'>Property Managers:</Tab>
            <Tab eventKey='owner' title='Property Owners' className='p-3'>Owners:</Tab>
            <Tab eventKey='user' title='Users' className='p-3'>

                <Button variant='dark' onClick={handleAddUserShow}>Add new user</Button>


                <Modal show={showAddUser} onHide={handleAddUserClose} size='lg'>

                    <Modal.Header closeButton>
                    <Modal.Title>Add new user</Modal.Title>
                    </Modal.Header>
                    <UserAddModalContents />
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleAddUserClose}>Close</Button>
                    <Button variant="dark" onClick={handleAddUserClose}>Save Changes</Button>
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