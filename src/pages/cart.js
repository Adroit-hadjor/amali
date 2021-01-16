import React, {useState,useRef,useEffect} from "react";
import { Row, Col ,Container,Button} from 'reactstrap';
import {FaStar,FaHeart,FaTrash} from 'react-icons/fa';
import MyButton from '../components/Button';
import {useHistory} from 'react-router-dom';
import {MyCard,MySubCard} from "../components/Card";
import Header from '../components/header';
import Footer from "../components/footer";
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';
import {useSelector} from 'react-redux'





function Cart(...props) {


  const history = useHistory();
  
const [coupon,setCoupon] = useState("");
const [dis,setDis] = useState(false);

  const[url,setUrl] = useState("https://www.vineyardvines.com/dw/image/v2/AAHW_PRD/on/demandware.static/-/Sites-vineyardvines-master/default/dw4f1834c6/images/2020/1E001068_447_LD_F.jpg?sw=1184&sh=1410&sm=cut")
    var pr = window.localStorage.getItem("ss");
      
    try{pr = JSON.parse(pr)}
    catch{
      console.log("error")
    }
   
    const[amount,setAmount] = useState(pr.amount?pr.amount:0)
    const[price,setPrice] = useState(pr.price?pr.price:0);

    const change = () =>{
      let p = pr;
      p.amount = amount
      try{ localStorage.setItem('ss',p); history.push("/cart")}
     
      catch{
console.log("error")
      }
  
    }

    const remove = () =>{
      try{ localStorage.setItem('ss',''); history.go(0)}
     
      catch{
console.log("error")
      }
  
    }
    const myRef = useRef(null)
   

   const executeScroll = () => myRef.current.scrollIntoView({ behavior: "smooth" })  
   
useEffect(() => {
    
   if(coupon.length == 5){
     alert("You have gained a 50% discount on all your orders");
     setDis(true)
     setPrice(price/2)
     setCoupon(0)
   }

 },[coupon]);

 useEffect(() => {
    
  localStorage.setItem('tp',price*amount);

},[amount]);
 


  return (

    <div  className="App cart">
     <style>
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans');
</style>  
 
 <Row style={{color:"grey"}}>
     <Col xs="6">Item</Col>
     <Col xs="3">Quantity</Col>
     <Col xs="3">Price</Col>
 </Row>{
   pr!==''||undefined ?
   <React.Fragment>
   <Row style={{margin:"10px 0px",backgroundColor:"white",paddingBottom:"20px"}}>
   <Col style={{paddingTop:"10px"}} md="1">Item
       <br/>
       
       </Col>
       <Col style={{paddingTop:"10px"}} md="5"> <text style={{cursor:"pointer"}} className="nami"> {pr.name}</text>
       <br/>
       <div style={{paddingTop:"10px",width:"40%",display:"flex",justifyContent:"space-between"}}>  <text className="save"><FaHeart/> save</text><text onClick={()=>{remove();}} className="trash"><FaTrash/> remove</text></div>
  
       </Col>
       <Col style={{paddingTop:"10px"}} md="3"><input style={{width:"40px",textAlign:"center"}} onChange={(e)=>{setAmount(e.target.value)}} value={amount} type="number"/></Col>
    <Col style={{paddingTop:"10px"}}  md="3">Ghc {price}</Col>
   </Row>
   <hr/>
   <Row>
    <Col xs="12" style={{display:"flex",justifyContent:"flex-end",paddingTop:"20px",paddingRight:"210px"}}>Total : {price * amount}</Col>
   </Row>
  
   <Row style={{margin:"10px 0px",backgroundColor:"white",paddingBottom:"20px"}}>
   <Col style={{paddingTop:"10px",display:"flex",justifyContent:"flex-start"}} xs="12"><input disabled={dis} placeholder="enter coupon" value={coupon} onChange={(e) =>{setCoupon(e.target.value)}} type="text"/></Col>
       <Col style={{paddingTop:"10px",display:"flex",justifyContent:"flex-end"}} xs="12"><Button onClick={() =>{change();}} style={{marginLeft:"10px"}}>Update</Button><Button onClick={() =>{history.push('/checkout')}} style={{marginLeft:"10px"}}>proceed to checkout</Button></Col>
  
   </Row>
   </React.Fragment>
   :
   <React.Fragment>
      <Row style={{margin:"10px 0px",backgroundColor:"white",paddingBottom:"20px"}}>
   <Col style={{paddingTop:"10px"}} xs="12"> Your cart is empty
  </Col>
   </Row>
   </React.Fragment>

 }

 
    </div>
 
  );
}

export default Cart;
