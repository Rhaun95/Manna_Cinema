import React, { useState,useEffect } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import kakaopay from '../icons/kakaopay.png'
import {Container} from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function PayReady(props) {
    const navigate = useNavigate();
    const [redirect, setRedirect] = useState("");
    
    const {state} = useLocation();
    console.log("payReady : state", state);

    let params = {"partner_order_id" : state.partner_order_id }; 
    let orderId = Object.keys(params) 
      .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k])) 
      .join('&');
    console.log("payReady : orderID"+orderId);

useEffect(() => {      
//  const payReady = ()=>{
// function getNextRedirect(){
    
    fetch('http://localhost:8080/payment/kakaoPay?partner_order_id='+state.partner_order_id,{
        method : 'POST'})            
        .then(response => response.text())
        .then((response)=>{
            if(response !== null){
                setRedirect(response);            
                console.log("payReady : "+redirect);
                
            }else{
                console.log("payReady : 어림도없지");
                alert("redirect url 가져올 수 없음.");
            }
        })
    // }
        // navigate(redirect);    
    },[]);
  
    return (    
        <>    
   
   <Container style={{height:"70vh", marginTop :"100px"}}>
 
 <Row>
 <Col></Col>
 <Col>
   <Card style={{ width: '50rem'}}>
       <Card.Body >
         <Card.Title class="text-dark" style={{ fontSize:'55px'}}>ORDER</Card.Title>
         <Card.Text class="text-dark">
           카카오페이로 결제를 진행합니다!
         </Card.Text>
       </Card.Body>
   <ListGroup className="list-group-flush">
   <ListGroup.Item>
     <Row>
       <Col> 주문 상품 </Col>
       <Col xs={5}>{state.item_name}</Col>
     </Row>
   </ListGroup.Item>
   <ListGroup.Item></ListGroup.Item>
   <ListGroup.Item>
   <Row>
       <Col> 주문 수량  </Col>
       <Col xs={5}>{state.quantity}</Col>
     </Row>
   </ListGroup.Item>
   <ListGroup.Item></ListGroup.Item>
   <ListGroup.Item>
     <Row>
       <Col> 결제 금액 </Col>
       <Col xs={5}>{state.total_amount}</Col>
     </Row>
   </ListGroup.Item>
   <ListGroup.Item></ListGroup.Item>
 </ListGroup>
 <Card.Body>
 <button style={{ borderColor:'transparent',backgroundColor :'transparent'}}><a href={redirect}><img src={kakaopay} width="100px" /></a></button>
 </Card.Body>
</Card>
</Col>
<Col></Col>
 </Row>
</Container>
</>

    );
        }
    
    
export default PayReady;
