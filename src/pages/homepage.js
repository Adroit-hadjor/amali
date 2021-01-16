import React, {useState,useRef} from "react";
import { Row, Col ,Container,Button} from 'reactstrap';
import {FaStar} from 'react-icons/fa';
import MyButton from '../components/Button';
import {useHistory} from 'react-router-dom';
import {MyCard,MySubCard} from "../components/Card";
import Header from '../components/header';
import Footer from "../components/footer";
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';
import {useSelector} from 'react-redux'
import store from './redux/store'
import {addProduct,deleteProduct} from './redux/action'


//



function Homepage(...props) {
 const history = useHistory();

  const productss = useSelector(state=>state.product)

  console.log("res is "+ JSON.stringify(productss))
  const[url,setUrl] = useState("https://www.vineyardvines.com/dw/image/v2/AAHW_PRD/on/demandware.static/-/Sites-vineyardvines-master/default/dw4f1834c6/images/2020/1E001068_447_LD_F.jpg?sw=1184&sh=1410&sm=cut")
  const[color,setColor] = useState("dark side blue");
  const[amount,setAmount] = useState(1);
  const[size,setSize] = useState("XS");
  
  const clothes = [
    "https://www.vineyardvines.com/dw/image/v2/AAHW_PRD/on/demandware.static/-/Sites-vineyardvines-master/default/dw4f1834c6/images/2020/1E001068_447_LD_F.jpg?sw=1184&sh=1410&sm=cut",
    "https://www.vineyardvines.com/dw/image/v2/AAHW_PRD/on/demandware.static/-/Sites-vineyardvines-master/default/dw96d044b5/images/2020/1E001068_447_LS_D.jpg?sw=1680&sh=2000&sm=cut",
    "https://www.vineyardvines.com/dw/image/v2/AAHW_PRD/on/demandware.static/-/Sites-vineyardvines-master/default/dwa9516e0c/images/2020/1E001068_447_LS_D2.jpg?sw=1680&sh=2000&sm=cut",
    "https://www.vineyardvines.com/dw/image/v2/AAHW_PRD/on/demandware.static/-/Sites-vineyardvines-master/default/dw3c24eaaf/images/2020/1E001068_447_LS_D3.jpg?sw=1184&sh=1410&sm=cut",
    "https://www.vineyardvines.com/dw/image/v2/AAHW_PRD/on/demandware.static/-/Sites-vineyardvines-master/default/dw6f7697f0/images/2020/1E001068_447_LS_D4.jpg?sw=1184&sh=1410&sm=cut",
    "https://www.vineyardvines.com/dw/image/v2/AAHW_PRD/on/demandware.static/-/Sites-vineyardvines-master/default/dwc11ca985/images/2020/1E001068_447_LS_D5.jpg?sw=1184&sh=1410&sm=cut",
    "https://www.vineyardvines.com/dw/image/v2/AAHW_PRD/on/demandware.static/-/Sites-vineyardvines-master/default/dwe3575cfb/images/2020/1E001068_447_LS_D6.jpg?sw=1184&sh=1410&sm=cut",
    "https://www.vineyardvines.com/dw/image/v2/AAHW_PRD/on/demandware.static/-/Sites-vineyardvines-master/default/dw646addc8/images/2020/1E001068_447_LS_D7.jpg?sw=1184&sh=1410&sm=cut"
  ]
  if(amount <= 0){
    setAmount(1)
  }
    const product = {
      id:1,
      name:"Offshore On-The-Go Crewneck",
      rating:4,
      shippingDetails:"FREE GROUND SHIPPING ",
      shippingSubDetails:"ON ALL ORDERS OVER $125 ",
      price:168,
      amount,
      size,
      color

    }
  
    const add_d =()=>{ 
       localStorage.setItem("ss",JSON.stringify(product));
    // store.dispatch(addProduct(product))
  };
    const myRef = useRef(null)

   const executeScroll = () => myRef.current.scrollIntoView({ behavior: "smooth" })  
  return (
  
    <div  className="App">
     <style>
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans');
</style>  
  <Row>
  <Col className="d-none d-md-flex"  md="2" style={{flexDirection:"column",justifyContent:"space-between",alignItems:"center",height:"auto"}} >
    <img onClick={()=>setUrl(clothes[0])} className="im" style={{margin:"20px 0px 5px"}} src="https://www.vineyardvines.com/dw/image/v2/AAHW_PRD/on/demandware.static/-/Sites-vineyardvines-master/default/dw4f1834c6/images/2020/1E001068_447_LD_F.jpg?sw=77&sh=90&sm=cut" alt=""/>
    <img onClick={()=>setUrl(clothes[1])} className="im" style={{marginBottom:"5px"}} src="https://www.vineyardvines.com/dw/image/v2/AAHW_PRD/on/demandware.static/-/Sites-vineyardvines-master/default/dw96d044b5/images/2020/1E001068_447_LS_D.jpg?sw=77&sh=90&sm=cut" alt=""/>
    <img onClick={()=>setUrl(clothes[2])} className="im" style={{marginBottom:"5px"}} src="https://www.vineyardvines.com/dw/image/v2/AAHW_PRD/on/demandware.static/-/Sites-vineyardvines-master/default/dwa9516e0c/images/2020/1E001068_447_LS_D2.jpg?sw=77&sh=90&sm=cut" alt=""/>
    <img onClick={()=>setUrl(clothes[3])} className="im" style={{marginBottom:"5px"}} src="https://www.vineyardvines.com/dw/image/v2/AAHW_PRD/on/demandware.static/-/Sites-vineyardvines-master/default/dw3c24eaaf/images/2020/1E001068_447_LS_D3.jpg?sw=77&sh=90&sm=cut" alt=""/>
    <img onClick={()=>setUrl(clothes[4])} className="im" style={{marginBottom:"5px"}} src="https://www.vineyardvines.com/dw/image/v2/AAHW_PRD/on/demandware.static/-/Sites-vineyardvines-master/default/dw6f7697f0/images/2020/1E001068_447_LS_D4.jpg?sw=77&sh=90&sm=cut" alt=""/>
    <img onClick={()=>setUrl(clothes[5])} className="im" style={{marginBottom:"5px"}} src="https://www.vineyardvines.com/dw/image/v2/AAHW_PRD/on/demandware.static/-/Sites-vineyardvines-master/default/dwc11ca985/images/2020/1E001068_447_LS_D5.jpg?sw=77&sh=90&sm=cut" alt=""/>
    <img onClick={()=>setUrl(clothes[6])} className="im" style={{marginBottom:"5px"}} src="https://www.vineyardvines.com/dw/image/v2/AAHW_PRD/on/demandware.static/-/Sites-vineyardvines-master/default/dwe3575cfb/images/2020/1E001068_447_LS_D6.jpg?sw=77&sh=90&sm=cut" alt=""/>
    <img onClick={()=>setUrl(clothes[7])} className="im" style={{marginBottom:"5px"}} src="https://www.vineyardvines.com/dw/image/v2/AAHW_PRD/on/demandware.static/-/Sites-vineyardvines-master/default/dw646addc8/images/2020/1E001068_447_LS_D7.jpg?sw=77&sh=90&sm=cut" alt=""/>
    <img onClick={()=>setUrl(clothes[0])} className="im" style={{marginBottom:"5px"}} src="https://www.vineyardvines.com/dw/image/v2/AAHW_PRD/on/demandware.static/-/Sites-vineyardvines-master/default/dw4f1834c6/images/2020/1E001068_447_LD_F.jpg?sw=77&sh=90&sm=cut" alt=""/>
    </Col> 
  <Col style={{display:"flex",justifyContent:"stretch",alignItems:"flex-start",paddingTop:"15px"}} xs="12" md="6">
    <div className="big" style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundImage:`url(${url})`,width:"100%",height:"80%"}} ><text style={{cursor:"pointer",fontWeight:"bold",fontSize:"50px",color:"white",lineHeight:"30px"}}>&lt;</text><text style={{cursor:"pointer",fontWeight:"bold",fontSize:"50px",color:"white",lineHeight:"30px"}}>&gt;</text></div>
    </Col> 
   <Col style={{display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"flex-start"}} xs="12" md="4">
  <text className={"tit"} style={{paddingBottom:"20px",paddingTop:"20px",color:"#002b5c",fontWeight:"bold",fontSize:"20px"}}>{product.name}</text>
    
      
      {
       (product.rating>0) ? 
       <div style={{paddingBottom:"20px",display:"flex",justifyContent:"center"}}> {Array.from(Array(product.rating), (e, i) => {
        return <FaStar color={"#1176bb"} size={20} />
      })}
      
      {Array.from(Array(5-product.rating), (e, i) => {
        return <FaStar color={"gainsboro"} size={20} />
      })}

       <text style={{paddingLeft:"8px",fontSize:"12px"}}> 2 reviews</text> 
     
      </div>
       
       :
       <div style={{paddingBottom:"20px",display:"flex",justifyContent:"center"}}> {Array.from(Array(0), (e, i) => {
        return <FaStar color={"#1176bb"} size={20} />
      })} <text style={{paddingLeft:"8px",fontSize:"12px"}}> 2 reviews</text> 
     
      </div>
      }
     
    
     <text style={{paddingBottom:"20px",fontSize:"13px",color:"grey"}} ><text style={{fontWeight:"bold",color:"red"}}>{product.shippingDetails}</text>{product.shippingSubDetails}</text>
     <text style={{paddingBottom:"20px",color:"#002b5c",fontWeight:"bold",fontSize:"20px"}}  >${product.price}</text>
    <div style={{paddingBottom:"5px"}}> <Button onClick={()=>{setColor("dark side blue");setUrl("https://www.vineyardvines.com/dw/image/v2/AAHW_PRD/on/demandware.static/-/Sites-vineyardvines-master/default/dw4f1834c6/images/2020/1E001068_447_LD_F.jpg?sw=1184&sh=1410&sm=cut");}} className="round-btn" style={{backgroundColor:"#002b5c",height:"30px",width:"30px",borderRadius:"200px",position:"relative"}} >&nbsp; <div className="xtra-round"></div></Button><Button onClick={()=>{setColor("black");setUrl("https://www.vineyardvines.com/dw/image/v2/AAHW_PRD/on/demandware.static/-/Sites-vineyardvines-master/default/dw4a1c4072/images/2020/1E001068_410_LD_F.jpg?sw=657&sh=782&sm=cut");}} className="round-btn" style={{marginLeft:"5px",backgroundColor:"black",height:"30px",width:"30px",borderRadius:"200px",position:"relative"}} >&nbsp; <div className="xtra-round"></div></Button></div> 
     <text style={{paddingBottom:"20px",fontSize:"12px"}} >{product.color}</text>
 
 
     <div style={{width:"50%",paddingBottom:"20px",display:"flex",justifyContent:"space-between",alignItems:"center"}} >
       <Button className="btn-size" color={'df'} style={{width:"30px",height:"30px",fontSize:"13px",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"0px",backgroundColor:"gainsboro"}}>XS</Button>
       <Button className="btn-size" color={'df'} style={{width:"30px",height:"30px",fontSize:"13px",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"0px",backgroundColor:"gainsboro"}}>S</Button>
     <Button className="btn-size" color={'df'} style={{width:"30px",height:"30px",fontSize:"13px",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"0px",backgroundColor:"gainsboro"}}>M</Button>
     <Button className="btn-size" color={'df'} style={{width:"30px",height:"30px",fontSize:"13px",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"0px",backgroundColor:"gainsboro"}}>L</Button>
     <Button className="btn-size" color={'df'} style={{width:"30px",height:"30px",fontSize:"13px",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"0px",backgroundColor:"gainsboro"}}>XL</Button>
     <Button className="btn-size" color={'df'} style={{width:"30px",height:"30px",fontSize:"13px",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"0px",backgroundColor:"gainsboro"}}>XXL</Button></div>
     <text style={{paddingBottom:"20px"}} >2 reviews</text>
     <text style={{paddingBottom:"20px"}} >Color:dark side blue</text>
     <text style={{width:"30%",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",paddingBottom:"20px"}} ><Button style={{display:"flex",color:"#1176bb",fontSize:"20px",fontWeight:"bold",backgroundColor:"white",justifyContent:"center",alignItems:"center",height:"30px",width:"30px",borderRadius:"200px"}} onClick={()=>{setAmount(amount-1)}}>-</Button> <input style={{width:"40px",textAlign:"center"}} value={amount} type="text"/> <Button style={{display:"flex",color:"#1176bb",fontSize:"20px",fontWeight:"bold",backgroundColor:"white",justifyContent:"center",alignItems:"center",height:"30px",width:"30px",borderRadius:"200px"}} onClick={()=>{setAmount(amount+1)}}>+</Button></text>
    <Button  color={'dd'} style={{height:"50px",border:"1px solid #002b5c",backgroundColor:"#002b5c",color:"white",borderRadius:"0px",marginBottom:"10px"}} onClick={() =>{add_d();history.push("/cart")}} className="but">ADD TO BAG</Button>
    <Button color={'dd'} style={{height:"60px",borderRadius:"0px",border:"1px solid #002b5c"}} className="but">Buy online,free in-store pickup <br/> Get it today at a store near you</Button>

     </Col>
  </Row>
 
    </div>
 
  );
}

export default Homepage;
