import React from "react";
import { Row, Col } from 'reactstrap';
import {FaInstagram,FaTwitter,FaGithub,FaLinkedinIn,FaDev} from 'react-icons/fa';
import {Link} from "react-router-dom";


const Footer = ({
   active,
       ...props
     }) => {
        
    return(
        <div>  
                <Row>
            <Col xs="12"md={{size:6,offset:2}} xl={{size:5,offset:2}} style={{textAlign:"justify"}}>
            <div style={{fontSize:"30px",fontWeight:"bold",paddingBottom:"15px"}}>Ofoe Hadjor</div>
            <div style={{paddingBottom:"40px"}}><p>UX Consultant  &amp; Website Specialist. I will help you create a website which works.
                User Experience. Design. Development. Results.</p></div>
            <div style={{display:"flex",flexDirection:"row",alignItems:"flex-start",paddingBottom:"50px"}}>
            <div style={{width:"200px",display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
            <a className="myLink_icons" href="https://twitter.com/__hadzor"><FaTwitter size={25} /></a> 
            <a className="myLink_icons" href="https://github.com/Adroit-hadjor"> <FaGithub size={25} /> </a>
            <a className="myLink_icons" href="https://www.instagram.com/ofoe.i/"> <FaInstagram size={25} /> </a>
            <a className="myLink_icons" href="https://www.linkedin.com/in/ofoe-hadjor-b2872a1a0"> <FaLinkedinIn size={25} /> </a>
            <a className="myLink_icons" href="https://dev.to/__hadzor"> <FaDev size={25} /> </a>
            </div>   
            </div>
            </Col>
            <Col xs="12" md={{size:4}} xl={{size:3,offset:2}} >
            <div><h3>Quick Links</h3></div>
            <div><Link style={{color:"white"}}   className="myLink" to="/">Home</Link> </div>
            <div><Link style={{color:"white"}}   className="myLink" to="/project/#con">
           Projects
           </Link> </div>
           <div><Link style={{color:"white"}}    className="myLink" to="/contact/#con">
            Contact
            </Link></div>
            
            </Col>
            <Col xs="12">
            <div></div>
            <div></div>
            </Col>
        </Row>
        <Row style={{paddingTop:"40px",paddingBottom:"-50px"}}>
            @ Ofoe Hadjor 2020
        </Row>
       
        </div>
    )
}
export default Footer