import { Navigate, useLocation, useNavigate } from "react-router";
import {useState,useEffect} from 'react';

import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';


function OrderInfo(props){
    
    const GoToMain=()=>{
        navigate("/");
    }

    const navigate = useNavigate();
    const {state} = useLocation();
    const tid = state;
    // const orderId = state.tid;

    // console.log(orderId);
    // const [tid, setTid] = useState([]);
    console.log("OrderInfo - tid    :    "+ tid);
    console.log(sessionStorage.getItem("id"));
    const [payInfo, setPayInfo] = useState({
        partner_order_id : '',
        partner_user_id : '',
        payment_method_type:'',
        item_name : '',
        total_amount: '',
        quantity :'',
        approved_at: ''
    });

    
    const [toggle, setToggle] = useState(true);



    useEffect(()=>{
        getOrderInfo();
    },[toggle]);
    
        const getOrderInfo = () =>{

        fetch('http://localhost:8080/payment/kakaoInfo?tid=' + tid, {
            method: 'GET'
          })
          .then(response => response.json())
          .then((response) => {
            // if (response !== undefined) {
                if(response !== undefined){
                setPayInfo(response);
            //   console.log("response:" + JSON.stringify(response));
              console.log('addCart : 성공!');
              if(toggle)
              setToggle(false);
            } else {
              alert('Orderinfo : 결제 목록 가져오기를 실패하였습니다');
          }});
        };



return(
    <Container style={{height:"70vh", marginTop :"100px"}}>
    <div>
        <h1> 결제 상세 정보 </h1>
        <Row>
 <Col></Col>
 <Col>
        <ListGroup style={{marginTop:"20px", width:"800px" }}>
           
           <ListGroup.Item>
           <Row style={{ marginTop:'30px'}}>
               <Col>주문번호</Col>
               <Col>{payInfo.partner_order_id}</Col></Row></ListGroup.Item>
           <ListGroup.Item><Row><Col>회원 아이디</Col><Col>{payInfo.partner_user_id}</Col></Row></ListGroup.Item>
           <ListGroup.Item><Row><Col>주문 상품 </Col><Col>{payInfo.item_name}</Col></Row></ListGroup.Item>
           <ListGroup.Item><Row><Col>가격</Col><Col>{payInfo.total_amount}</Col></Row></ListGroup.Item>
           <ListGroup.Item><Row><Col>수량</Col><Col>{payInfo.quantity}</Col></Row></ListGroup.Item>
           <ListGroup.Item><Row><Col>지불 방법</Col><Col>{payInfo.payment_method_type}</Col></Row></ListGroup.Item>
           <ListGroup.Item><Row style={{marginBottom: "30px"}}><Col>결제 시각</Col><Col>{payInfo.approved_at}</Col></Row></ListGroup.Item>


       <Button onClick = {GoToMain} variant="outline-secondary"> 메인화면으로 돌아가기</Button>{' '} 
       </ListGroup>
       </Col>
<Col></Col>
 </Row>
   </div>
</Container>
);
    }
export default OrderInfo
