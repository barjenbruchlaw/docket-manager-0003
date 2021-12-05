import React from 'react'
import PageNavBar from './components/PageNavBar.js'
import { Container, Row, Col } from 'react-bootstrap'
import './bootstrap.min.css'
import './App.css'

const App = () => {
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
      <h1 className='text-center'>Home</h1>

      </main>

    </div>
  )
}

export default App

