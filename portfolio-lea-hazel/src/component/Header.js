import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

const Header = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div style={{ backgroundColor: "tan" }}>
      <Navbar {...args}>
        <NavbarBrand href="/">Lea Hazel</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>

            <NavItem>
              <NavLink className="nav-text" href="/About">About</NavLink>
            </NavItem>

            <NavItem>
              <NavLink className="nav-text" href="/Projects">Projects</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/pages/Contact">
                Contact
              </NavLink>
            </NavItem>

          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;