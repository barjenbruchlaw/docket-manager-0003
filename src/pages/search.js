import React from 'react'
import PageNavBar from '../components/PageNavBar'
import { Tabs, Tab } from 'react-bootstrap'
import '../App.css'

const Search = () => {
    return (
        <div className='grid-container'>
            
            <sidebar className='page-sidebar'>
            <PageNavBar />
            </sidebar>

            <main className='page-main'>
            <h1 className='text-center'>Search</h1>

            <Tabs>
            
            <Tab eventKey='namesearch' title='Search by name' className='p-3'></Tab>
            <Tab eventKey='calendarsearch' title='Search by docket' className='p-3'></Tab>
            
            </Tabs>

            </main>

        </div>
    )
}

export default Search