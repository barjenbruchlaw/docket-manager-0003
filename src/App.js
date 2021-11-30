import React from 'react'
import PageNavBar from './components/PageNavBar.js'
import './bootstrap.min.css'
import './App.css'

const App = () => {
  return (
    <div className='grid-container'>
      
      <header className='page-header'></header>

      <sidebar className='page-sidebar'>
      <PageNavBar />
      </sidebar>

      <main className='page-main'>
      <h1 className='text-center'>Home</h1>

      </main>

    </div>
  )
}

export default App

