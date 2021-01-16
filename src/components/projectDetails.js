import React, {useState,useEffect,useRef} from "react";
import Footer from "../components/footer";
import Header from '../components/header';
import { Row, Col ,Container, Card,Form,Button} from 'reactstrap';
import {MyCard} from "../components/Card";
import {FaArrowRight,FaRegBuilding,FaIndustry} from 'react-icons/fa';
import {ImLocation} from 'react-icons/im';
import {HiLink} from 'react-icons/hi';
import {RiBarChartBoxLine} from 'react-icons/ri';
import ngchi from "../images/doc.jpg";
import ecomm from "../images/shop.jpg";
import nog from "../images/noguchi-svg.png";
import sika from "../images/sika-svg.png";
import japan from "../images/japan-svg.png";
import Fade from "react-reveal";
import ScrollAnimation from 'react-animate-on-scroll';
import ReadyTo from "./readyTo";


const ProjectDetails = ({
    company,
    industry,
    location,
    website,
    results,
    whatIs,
    theProblem,
    standOut,
    theRest,
    theImage,
    icon,
    title,
    intro,
    titleOfRest,
    theLast,
    titleOfLast,
    noLongerWorking,


    ...props

}) =>{
  
    return(
        <React.Fragment>
       <Row style={{padding:"80px 30px"}}>
           <Col xs="12" lg="4">
               <ScrollAnimation animateIn="fadeInLeft">
               <div style={{color:"#76f842",fontSize:"1.5rem"}}>{company}</div>
               <div><h6 style={{fontSize:"4rem",letterSpacing:"0.00005rem"}}>{title}</h6></div>
          </ScrollAnimation>
           </Col>
           <Col xs="12" lg="8">
               <ScrollAnimation animateIn="fadeInRight">

               {theImage}
          </ScrollAnimation>
           </Col>
       </Row>
       <ScrollAnimation duration={2}  animateIn="fadeInUp">
       <Row style={{padding:"80px 30px"}}>
            <Col  xs="12" md={{size:3}} >
               <div style={{fontSize:"12px",backgroundColor:"#1a202c",height:"480px",padding:"5px 10px"}}>
                <div style={{paddingTop:"30px"}}>
                    <div style={{}}><h6><FaRegBuilding style={{paddingRight:"10px"}} size={22} /> Company  </h6></div>
                    <div style={{paddingLeft:"30px",color:"gainsboro"}}>{company} </div>
                </div>
                <div style={{paddingTop:"30px"}}>
                   <div style={{}}><h6><FaIndustry style={{paddingRight:"10px"}} size={22} /> Industry </h6> </div>
                   <div style={{paddingLeft:"30px",color:"gainsboro"}}>{industry} </div>
                </div>
                <div style={{paddingTop:"30px"}}>
                   <div style={{}}><h6> <ImLocation style={{paddingRight:"10px"}} size={25} /> Location </h6> </div>
                   <div style={{paddingLeft:"30px",color:"gainsboro"}}>{location} </div>
                </div>
                <div style={{paddingTop:"30px"}}>
                    <div style={{}}><h6><HiLink style={{paddingRight:"10px"}} size={25} /> Website  </h6></div>
                    <div style={{paddingLeft:"30px",color:"gainsboro"}}>{website} </div>
                </div>
                <div style={{paddingTop:"30px"}}>
                    <div style={{}}><h6><RiBarChartBoxLine style={{paddingRight:"10px"}} size={25} /> Results  </h6></div>
                    <div style={{paddingLeft:"30px",color:"gainsboro"}}>{results} </div>
                </div>
              
                </div>
            </Col>
            <Col xs="12" md={{size:8,offset:1}}>
              
                <div style={{paddingTop:"30px"}}>
                  <h5> What is {company}</h5> 
                     <p>{whatIs}</p>
                </div>
                <div style={{paddingTop:"30px"}}>
                  <h5> The problem</h5>
                     <p>{theProblem}</p>
                </div>
                <div style={{paddingTop:"30px"}}>
                    <h5>{titleOfRest}</h5>
                   <p> {theRest} </p>
                </div>
                <div style={{paddingTop:"30px"}}>
                    <h5>{titleOfLast}</h5>
                   <p> {theLast} </p>
                </div>
                <div style={{paddingTop:"30px"}}>
                   
                   <p> {noLongerWorking} </p>
                </div>

            </Col>
       </Row>
       </ScrollAnimation>
       <ReadyTo />
       </React.Fragment>
    )
}
export default ProjectDetails;