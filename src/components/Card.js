import React, {useState} from "react";
import {Button,Row,Col} from 'reactstrap';
import PropTypes from 'prop-types';


const MyCard = ({
 text,
 onClick,
 style,
 icon,
 subtext,
 bgImg,
    ...props
  }) => {
      const styles = {
        backgroundColor:'transparent',fontSize:"22px",border:"0px", padding:"5px",textAlign:'left',maxWidth:"90px",
      }
    
    return (
      <React.Fragment>
        <div className="theCard" style={{/* backgroundImage:`
            url(${bgImg})` */backgroundColor:'#1a202c',backgroundSize:'Cover'}}>
              <Row>
    <Col xs="3" md={{size:3}} >
      <div className="title">{text}</div>
      <div style={{fontSize:'15px'}}>{subtext}</div>
      </Col>
      <Col xs={{size:3,offset:6}}>
          <Button style={styles} onClick={onClick}>
              {icon}
          </Button>
          </Col>
          </Row>
          <Row>
           
            <img className="cImage" src={bgImg} alt="Logo" />
         
             
          </Row>
          </div>
        
          
      </React.Fragment>
    )
  }
  
  MyCard.defaultProps = {
    text: "text",
    subtext:'sub',
  }
  
  MyCard.propTypes = {
    text: PropTypes.string.isRequired,
   // type: PropTypes.oneOf(['text', 'number', 'password']),
    style: PropTypes.any,
    onClick: PropTypes.func.isRequired
  }

  const MySubCard = ({
    text,
    onClick,
    style,
    icon,
    subtext,
    bgImg,
       ...props
     }) => {
         const styles = {
           backgroundColor:'transparent',fontSize:"22px",border:"0px", padding:"10px 40px",width:'10px'
         }
       
       return (
         <React.Fragment>
             <div className="mySubCard" >
             <div style={{padding:'2rem',display:'flex',flexDirection:'column',justifyContent:'space-between',alignItems:'flex-start',height:'170px'}}>
                  <div >{icon}</div>
                 <div className="title" >{text}</div>
                 <div style={{fontSize:'15px',color:"gainsboro"}}>{subtext}</div>
                 </div>
             </div>
             
         </React.Fragment>
       )
     }
     
     MySubCard.defaultProps = {
       text: "text",
       subtext:'sub',
     }
     
     MySubCard.propTypes = {
       text: PropTypes.string.isRequired,
      // type: PropTypes.oneOf(['text', 'number', 'password']),
       style: PropTypes.any,
       onClick: PropTypes.func.isRequired
     }

export {MyCard,MySubCard};
//export {MySubCard}