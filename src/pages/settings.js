import React from 'react'
import PageNavBar from '../components/PageNavBar'
import { Container, Row, Col } from 'react-bootstrap'
import '../App.css'

const Settings = () => {
    return (
        <div className='grid-container'>

            <header className='page-header'><Container><Row>
            <Col className=''><h1>Docket Manager v. 0.3</h1></Col>
            <Col className='text-end mt-auto'>Signed in as <a href='/' style={{ color: 'white' }}>Brian Barjenbruch</a></Col>
            </Row></Container></header>

            <sidebar className='page-sidebar'>
            <PageNavBar />
            </sidebar>

            <main className='page-main'>
            <h1 className='text-center'>Settings</h1>
            </main>

        </div>
    )
}

export default Settings
