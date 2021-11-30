import React from 'react'
import { Tabs, Tab } from 'react-bootstrap'
import PageNavBar from '../components/PageNavBar'

const SystemMaintenance = () => {
    return (
        <div className='grid-container'>

            <sidebar className='page-sidebar'>
            <PageNavBar />
            </sidebar>

            <main className='page-main'>
            <h1 className='text-center'>System Maintenance</h1> 

            <Tabs>
            
            <Tab eventKey='pm' title='Property Manager' className='p-3'>Property Managers:</Tab>
            <Tab eventKey='owner' title='Owner' className='p-3'>Owners:</Tab>
            <Tab eventKey='user' title='User' className='p-3'>Users:</Tab>

            </Tabs>
            </main>        
        </div>
    )
}

export default SystemMaintenance