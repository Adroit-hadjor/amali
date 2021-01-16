import React, {useState,useRef} from "react";
import { Row, Col ,Container,Button,Form} from 'reactstrap';
import {FaStar} from 'react-icons/fa';
import {MyInput} from '../components/input';
import MyButton from '../components/Button';
import {history} from 'react-router-dom';
import {MyCard,MySubCard} from "../components/Card";
import Header from '../components/header';
import Footer from "../components/footer";
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';




function Checkout(...props) {

  const[url,setUrl] = useState("https://www.vineyardvines.com/dw/image/v2/AAHW_PRD/on/demandware.static/-/Sites-vineyardvines-master/default/dw4f1834c6/images/2020/1E001068_447_LD_F.jpg?sw=1184&sh=1410&sm=cut")
  const[cvc,setCvc] = useState('')
  const[expiry,setExpiry] = useState()
  const[focus,setFocus] = useState('')
  const[number,setNumber] = useState('4901')
  const[name,setName] = useState('')
  var pr = window.localStorage.getItem("ss");
      
  try{pr = JSON.parse(pr)}
  catch{
    console.log("error")
  }

  var tp = window.localStorage.getItem("tp");
      
  try{tp = JSON.parse(tp)}
  catch{
    console.log("error")
  }
    const myRef = useRef(null)

   const executeScroll = () => myRef.current.scrollIntoView({ behavior: "smooth" })  
  return (

    <div style={{padding:"5vw",backgroundColor:"#002b5c"}}>
     <style>
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans');
</style>  
 

 <Row style={{margin:"10px 0px",backgroundColor:"white",borderRadius:"10px"}}>
    <Col md="6" xs="12"> 
    <Col style={{textAlign:"center",padding:"20px 0px 10px"}} xs="12">Personal Information</Col>
    <Col xs="12"><hr/></Col>
    <Form>
      <Row>
        <Col md="6" xs="12">
        <MyInput label="first name: *" placeholder="first name"/>
        </Col>
      
        <Col md="6" xs="12">
        <MyInput label="last name: *" placeholder="last name"/>
        </Col>
      </Row>
      <Row>
        <Col  xs="12">
        <MyInput label="email address: *" placeholder="email"/>
        </Col>
      
      
      </Row>
      <Row>
        <Col  xs="12">
        <MyInput label="address: *" placeholder="address"/>
        </Col>
      
      
      </Row>
      <Row>
        <Col md="6" xs="12">
        <MyInput label="city: *" placeholder="city"/>
        </Col>
      
        <Col md="6" xs="12">
        <MyInput label="zip: *" placeholder="zip"/>
        </Col>
      </Row>
      <Row>
        <Col  xs="12">
        <MyInput type="telephone" label="phone: *" placeholder="phone"/>
        </Col>
      
      
      </Row>
    {/*   <Row>
        <Col style={{padding:"10px 10px"}}  xs="12">
       <Button style={{width:"100%",backgroundColor:"#002b5c"}}>Done</Button>
        </Col>
      
      
      </Row> */}
    </Form>
    </Col>
    <Col style={{color:"grey",backgroundColor:"rgb(248, 247, 247)"}}  md="6" xs="12">
    <Col style={{textAlign:"center",padding:"20px 0px 10px"}} xs="12">Payment and Delivery</Col>
    <Row style={{paddingTop:"10px"}}>
        <Col md="6" xs="6">
       <text>Total price:</text>
        </Col>
      
        <Col md="6" xs="6">
       <text>Delivery time:</text>
        </Col>
      </Row>
      <Row >
        <Col style={{paddingLeft:"10px",paddingTop:"10px"}} md="6" xs="6">
       <Button className="bts" color={""} style={{color:"#002b5c",fontWeight:"bold",backgroundColor:"white",height:"150px",width:"150px"}}> <text style={{fontSize:"50px"}}>{tp}<sup > <text style={{fontSize:"20px"}}>$</text></sup></text>   <br/>  Total items:{pr.amount?pr.amount:1}</Button>
        </Col>
      
        <Col style={{paddingTop:"10px"}} md="6" xs="6">
       <Button className="bts" color={""} style={{fontWeight:"bold",backgroundColor:"#002b5c",color:"white",height:"150px",width:"150px"}}> <text style={{fontSize:"50px"}}>2<sup > <text style={{fontSize:"20px"}}>days</text></sup></text><br/> Fee: $10</Button>
        </Col>
      </Row>
      <Row style={{paddingTop:"10px"}}>
        <Col style={{paddingTop:"20px"}} xs="12" md="6">
        <Cards
        style={{width:"50%",backgroundColor:"red"}}
          cvc={cvc}
         
          expiry={expiry}
          focused={focus}
          name={name}
          number={number}
        />
        </Col>
        <Col style={{paddingTop :"20px"}} xs="12" md="6">
       
       <Row>
         <Col xs="12" >
         <MyInput onChange={(e)=> setNumber(e.target.value)}  placeholder="number"/>
         
         </Col>
       
       </Row>
       <Row>
         <Col xs="12" >
         <MyInput  onChange={(e)=> setName(e.target.value)}  placeholder=" name"/>
         </Col>
       
       </Row>
       <Row>
         <Col  xs="12" md="6" >
         <MyInput  onChange={(e)=> setExpiry(e.target.value)}  placeholder="valid thru"/>
         </Col>
         <Col xs="12" md="6" >
         <MyInput  onChange={(e)=> setCvc(e.target.value)}  placeholder="CVC"/>
         </Col>
       </Row>
       <Row>
         <Col xs="12" >
         <Button style={{width:"100%",backgroundColor:"#002b5c"}}>Checkout</Button>
         </Col>
       
       </Row>
        </Col>
      </Row>
    </Col>
 </Row>
 
 



 
    </div>
 
  );
}

export default Checkout;
