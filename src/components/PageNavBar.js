import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { Link } from "react-router-dom"
import { Search } from 'react-bootstrap-icons';
import { HouseDoorFill } from 'react-bootstrap-icons';
import { BookmarkCheck } from 'react-bootstrap-icons';
import { FolderFill } from 'react-bootstrap-icons';
import { ListCheck } from 'react-bootstrap-icons';
import { CurrencyDollar } from 'react-bootstrap-icons';
import { Gear } from 'react-bootstrap-icons';
import { GearFill } from 'react-bootstrap-icons';
import '../bootstrap.min.css'
import './PageNavBar.css'

const PageNavBar = () => {
    return (
        <div className='SidebarFormat'>
            
<Navbar className='Sidebar' variant='dark' collapseOnSelect expand="lg">
  <Container>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className='flex-column mt-5'>
      <Nav.Link className='SidebarItem mt-5' as={Link} to="/"><HouseDoorFill /> Dashboard</Nav.Link>
      <Nav.Link className='SidebarItem' as={Link} to="/search"><Search /> Search for a case</Nav.Link>
      <Nav.Link className='SidebarItem' as={Link} to="/addcase"><BookmarkCheck /> Add and accept new cases</Nav.Link>
      <Nav.Link className='SidebarItem' href="#" disabled><FolderFill /> File case with court</Nav.Link>
      <Nav.Link className='SidebarItem' href="#" disabled><ListCheck /> Prepare docket for court</Nav.Link>
      <Nav.Link className='SidebarItem' href="#" disabled><CurrencyDollar /> Prepare invoices</Nav.Link>
      <Nav.Link className='SidebarItem' as={Link} to="/systemMaintenance"><Gear /> System Maintenance</Nav.Link>
      <Nav.Link className='SidebarItem' as={Link} to="/settings"><GearFill /> Settings</Nav.Link>
 
    </Nav>

  </Navbar.Collapse>
  </Container>
</Navbar>

        </div>
    )
}

export default PageNavBar
