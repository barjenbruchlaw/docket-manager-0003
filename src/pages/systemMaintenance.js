import React from 'react'
import { Container, Row, Col, Tabs, Tab, Button } from 'react-bootstrap'
import PageNavBar from '../components/PageNavBar'
import './pages.css'

const SystemMaintenance = () => {
    return (
        <div className='grid-container'>

            <header className='page-header'><Container><Row>
            <Col><h1>Docket Manager v. 0.3</h1></Col>
            <Col Col className='text-end mt-auto'>Signed in as <a href='#' style={{ color: 'white' }}>Brian Barjenbruch</a></Col>
            </Row></Container></header>

            <sidebar className='page-sidebar'>
            <PageNavBar />
            </sidebar>

            <main className='page-main'>
            
            <Tabs className='TabBar nav-justified'>
            
            <Tab eventKey='pm' title='Property Managers' className='p-3'>Property Managers:</Tab>
            <Tab eventKey='owner' title='Property Owners' className='p-3'>Owners:</Tab>
            <Tab eventKey='user' title='Users' className='p-3'>

                <Button variant='dark'>Add new user</Button>

            </Tab>
            <Tab eventKey='jurisdiction' title='Jurisdictions' className='p-3'>Jurisdictions:</Tab>
            <Tab eventKey='judge' title='Judges' className='p-3'>Judges:</Tab>

            </Tabs>
            </main>        
        </div>
    )
}

export default SystemMaintenance