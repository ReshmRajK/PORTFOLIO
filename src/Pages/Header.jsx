import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'


function Header() {
  return (
    <Navbar style={{ zIndex: '1' }} className='w-100 position-fixed top-0 header shadow card'>
      <Container>
        <Navbar.Brand className='logo' href="">Reshma.</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-3">
            <Nav.Link className='nav-menu home-active' href="/">Home</Nav.Link>
            <Nav.Link className='nav-menu' href="/about">About</Nav.Link>
            <Nav.Link className='nav-menu' href="/services">Services</Nav.Link>
            <Nav.Link className='nav-menu' href="/projects">Projects</Nav.Link>
            <Nav.Link className='nav-menu' href="/more">More</Nav.Link>
            <Nav.Link className='nav-menu' href="/contact">Contact</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
