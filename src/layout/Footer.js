import React from 'react';
import { Container } from "reactstrap";


const Footer = () => {
    return (  
       <Container 
       fluid
       tag="footer"
       className="text-center bg-info text-white  fixed-bottom p-3"
       >Explore Github Info<br/>code by <span>❤️</span>Somnath</Container> 
    );
}
 
export default Footer;