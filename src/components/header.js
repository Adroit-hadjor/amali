import React, {useState} from "react";
import { Row, Col ,Container} from 'reactstrap';
import ProfilePicture from "./profilePicture";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";



const Header = ({
   active,
   ccolor,
   pcolor,
   hcolor,
       ...props
     }) => {
          
    return(
        <div>  
     
             <Row className="mynav">
          
        <Col xs="1" md="0" className="d-md-none" > <Link   className="myLink" to="/dev"><ProfilePicture /></Link> </Col>
        <Col xs="6" md="3" > <div className="d-none d-md-inline"><Link   className="myLink" to="/"><ProfilePicture /></Link></div> <Link style={{color:"white"}}   className="myLink" to="/">&nbsp;&nbsp; Ofoe Hadjor</Link></Col>
        <Col style={{textAlign:'right'}} className="d-none d-md-block" xs={{size:0,offset:0}} md={{size:1,offset:6}} >
           <Link style={{color:hcolor}}   className="myLink" to="/dev">Home</Link> 
        </Col>
        <Col style={{textAlign:'right'}} className="d-none d-md-block" xs={{size:0,offset:0}} md={{size:1}} >
           <Link style={{color:pcolor}}   className="myLink" to="/project">
           Projects
           </Link> 
        </Col>
        <Col style={{textAlign:'right'}} xs={{size:3,offset:1}} md={{size:1,offset:0}} >
            <Link style={{color:ccolor}}   className="myLink" to="/contact">
            Contact
            </Link>
        </Col>
        </Row>
      
        </div>
     
    )
}
export default Header