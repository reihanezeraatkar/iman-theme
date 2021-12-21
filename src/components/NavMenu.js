import React from 'react';
import { FooterItems } from "./FooterItems";
import "../styles/Styles.css";
import { Container, Navbar, Nav } from 'react-bootstrap';

export default function NavMenu() {
  return (
    <Navbar bg="light" expand="lg" style={{ backGroundColor: " #f45162" }}>
      <Container className="navbar-items">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <ul className="nav-menu">
              {FooterItems.map((item, index) => {
                return (
                  <li key={index}>
                    <a className={item.cName} href={item.url}>
                      {item.title}
                    </a>
                  </li>
                )
              })}
            </ul>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}




