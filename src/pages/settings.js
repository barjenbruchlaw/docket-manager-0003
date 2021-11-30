import React from 'react'
import PageNavBar from '../components/PageNavBar'
import '../App.css'

const Settings = () => {
    return (
        <div className='grid-container'>
            
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
