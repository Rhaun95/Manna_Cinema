import React from 'react';
import { useLocation, useNavigate } from 'react-router';
import { useState,useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';

function CancelPayment(){


const {state} = useLocation();
const [cancelInfo, setCancelInfo] = useState([]);
console.log("tid", state);
console.log("cancelInfo",cancelInfo);

const [toggle, setToggle] = useState(true);

useEffect(()=>{
    fetch('http://localhost:8080/payment/cancelPayment?tid=' + state, {
        method: 'GET'
    })
    .then(response => response.json())
    .then((response) => {
        if (response !== null) {
            setCancelInfo(response);
            //   console.log("response:" + JSON.stringify(payReady.partner_user_id));
            //   console.log('addCart : 성공!');
            if(toggle){
                setToggle(false)
            }
        } else {
            alert('addCart : 취소 정보 가져오기를 실패하였습니다');
        };
    });
},[toggle]);


return ( 
    <Container style={{height:"70vh", marginTop :"100px"}}>
    <div>
        <h1> 결제 취소 정보 </h1>
        <Row>
 <Col></Col>
 <Col>
        <ListGroup style={{marginTop:"20px", width:"800px" }}>
           
           <ListGroup.Item>
           <Row style={{ marginTop:'30px'}}>
               <Col>결제 번호</Col>
               <Col>{cancelInfo.partner_order_id}</Col></Row></ListGroup.Item>
           <ListGroup.Item><Row><Col>결제 아이디</Col><Col>{cancelInfo.partner_user_id}</Col></Row></ListGroup.Item>
           <ListGroup.Item><Row><Col>취소 상품 </Col><Col>{cancelInfo.item_name}</Col></Row></ListGroup.Item>
           <ListGroup.Item><Row><Col>취소 금액</Col><Col>{cancelInfo.total_amount}</Col></Row></ListGroup.Item>
           <ListGroup.Item><Row style={{marginBottom: "30px"}}><Col>취소시간 </Col><Col>{cancelInfo.canceled_at}</Col></Row></ListGroup.Item>
       </ListGroup>
       </Col>
<Col></Col>
 </Row>
   </div>
</Container>
)
    
}

export default CancelPayment