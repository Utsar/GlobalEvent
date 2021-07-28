import React from 'react';
import { Nav } from "react-bootstrap"
import "../NavBar/LandingNav.css"
import logoWhite from "../../Data/logoWhite.png"



export const LandingFooter = () => {
    return (
        <>
          <Nav className="justify-content-center fixed-bottom LPFooter"  >
    <Nav.Item>
      <Nav.Link href="/home">About</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link >&copy; GlobalEventAuction.com All rights reserved 2021</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/more" >More</Nav.Link> 
    </Nav.Item>
    
  </Nav>
            
        </>
    )
}
