import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import HomeNavData from './HomeNavData';
export const HomeNavbar = () => {
    return (
        <div >
            <Navbar
                expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            {HomeNavData.map((value) => {
                                
                                return (
                                    <Nav.Link href="#home" style={{ fontSize: '18px', marginRight: '100px' }}>
                                        <img src={value.imgsrc} width="61px" height="61px" alt={value.alt} />
                                        <br />
                                        <p style={{ marginLeft: '10px' }}>{value.name}</p></Nav.Link>
                                )
                            })}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
