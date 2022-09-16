import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const HomeNavbar = () => {
  return (
    <div >
    <Navbar 
     expand="lg">
    <Container>
    
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home" style={{fontSize:'18px',marginRight :'100px'}}>
          <img src="https://d2g9wbak88g7ch.cloudfront.net/staticimages/icon1.png" width="61px" height="61px" alt="Best seller"/>
          <br/>
          <p style={{marginLeft:'10px'}}>Best Seller</p></Nav.Link>
          <Nav.Link href="#home" style={{fontSize:'18px', marginRight :'100px'}}>
          <img src="https://d2g9wbak88g7ch.cloudfront.net/staticimages/icon8.png" width="61px" height="61px" alt="Award Winners"/>
          <br/>
          <p style={{marginLeft:'2px'}}> Award Winners</p></Nav.Link>
          <Nav.Link href="#home" style={{fontSize:'18px',marginRight :'100px'}}>
          <img src="https://d2g9wbak88g7ch.cloudfront.net/staticimages/icon4.png" width="61px" height="61px" alt="Box Sets"/>
          <br/>
          <p style={{marginLeft:'10px'}}>Box Sets</p></Nav.Link>
          <Nav.Link href="#home" style={{fontSize:'18px',marginRight :'100px'}}>
          <img src="https://d2g9wbak88g7ch.cloudfront.net/staticimages/icon2.png" width="61px" height="61px" alt="New Arrivals"/>
          <br/>
          <p style={{marginLeft:'7px'}}> New Arrivals</p></Nav.Link>
          <Nav.Link href="#home" style={{fontSize:'18px',marginRight :'100px'}}>
          <img src="https://d2g9wbak88g7ch.cloudfront.net/staticimages/icon5.png" width="61px" height="61px" alt="Fictions Books"/>
            <br/>
            <p style={{marginLeft:'7px'}}> Fictions Books</p></Nav.Link>
          <Nav.Link href="#home" style={{fontSize:'18px',marginRight :'100px'}}>
          <img src="https://d2g9wbak88g7ch.cloudfront.net/staticimages/tarot.png" width="61px" height="61px" alt="Tarot Cards"/>
          <br/>
          <p style={{marginLeft:'7px'}}>Tarrot Cards</p></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    </div>
  )
}
