import React from 'react'
import PageNavBar from '../components/PageNavBar'
import { Container, Row, Col, Tabs, Tab } from 'react-bootstrap'
import '../App.css'

const Search = () => {
    return (
        <div className='grid-container'>
            
            <header className='page-header'><Container><Row>
            <Col><h1>Docket Manager v. 0.3</h1></Col>
            <Col className='text-end mt-auto'>Signed in as <a href='/' style={{ color: 'white' }}>Brian Barjenbruch</a></Col>
            </Row></Container></header> 


            <sidebar className='page-sidebar'>
            <PageNavBar />
            </sidebar>

            <main className='page-main'>

            <Tabs className='TabBar nav-justified'>
            
            <Tab eventKey='namesearch' title='Search by name' className='p-3'></Tab>
            <Tab eventKey='calendarsearch' title='Search by docket' className='p-3'></Tab>
            
            </Tabs>

            </main>

        </div>
    )
}

export default Search