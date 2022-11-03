import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import HomeNavData from './HomeNavData';
export const HomeNavbar = ({name,setName,cartValue,setCartValue}) => {
    const navClick = (event) =>{
        setName(event.target.name)
      
    }
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
                                    <Nav.Link   style={{ fontSize: '18px', marginRight: '100px' }}>
                                      <Link onClick={navClick} to="/categoires">  
                                      <img name={value.name}  src={value.imgsrc} width="61px" height="61px" alt={value.alt} />
                                        <br />
                                        <p style={{ marginLeft: '10px' }}>{value.name} </p>
                                        </Link>
                                       </Nav.Link>
                                )
                            })}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
