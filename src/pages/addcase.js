import React from 'react'
import PageNavBar from '../components/PageNavBar'
import '../App.css'

const Addcase = () => {
    return (
        <div className='grid-container'>
            
        <sidebar className='page-sidebar'>
        <PageNavBar />
        </sidebar>

        <main className='page-main'>
        <h1 className='text-center'>Add Case</h1>
        </main>

    </div>
    )
}

export default Addcase
