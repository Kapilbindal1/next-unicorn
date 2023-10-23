import React, { useState } from 'react';
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import logo from "../assets/images/common/logo.png";
import { NAV_BAR } from './data';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <header className='header'>
      <Container>
      <Navbar expand="md">
        <NavbarBrand href="/"><img src={logo} className='logo' alt="logo" /></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar id='navbarMobile'>
          <Nav className="me-auto" navbar>
            {NAV_BAR.map((item) => {
              return (
                <NavItem>
                  <NavLink href={item.url}>{item.label}</NavLink>
                </NavItem>
              )
            })}
          </Nav>
          <a href='#contact' className='primary-btn'>Contact Us</a>
        </Collapse>
      </Navbar>
      </Container>
    </header>
  )
}

export default Header

