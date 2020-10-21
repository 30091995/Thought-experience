import React, { useState } from 'react'
import './NavBar.css'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';


function NavBar() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);


  return (
    <div className="border-bottom" >
      {/*}
      <div>
        <span className="span-style" style={{paddingRight: "10px"}}>THE BOOK</span>
        <span className="span-style" style={{paddingLeft:"10px"}}>EVENTS</span>
      </div>
      <div className="unlock-content">
      <span>UNLOCK CONTENT</span>
      </div>
  */}
        <Navbar color="light" light expand="md">
        <NavbarBrand href="http://thoughtexperiences.com/"><img className="logo-img" src="Logo_no_background.svg" alt="TE logo" /></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto shifted" navbar>
            <NavItem>
              <NavLink className="font-style"href="/components/">THE BOOK</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="font-style" href="https://github.com/reactstrap/reactstrap">EVENTS</NavLink>
            </NavItem>
          </Nav>
          <NavbarText className="shifted font-style"><a classname="no-decoration" style={{color: "violet", textDecoration: "none"}}href ={""}>UNLOCK CONTENT</a></NavbarText>
        </Collapse>
      </Navbar>

              </div>

  )
}

export default NavBar