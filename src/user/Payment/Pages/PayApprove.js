import React from 'react';
import { useEffect, useState } from 'react';
import { Link,Navigate,useLocation, useNavigate  } from 'react-router-dom';
import queryString from 'query-string';

import {Container} from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


function PayApprove(){

    //npm install --save query-string

    const resQuery = queryString.parse(window.location.search);
    console.log("쿼리스트링 파라미터: ",resQuery);
    
    const navigate = useNavigate();
    
    const [toggle,setToggle]=useState(true);

    let query = Object.keys(resQuery) 
	.map(k => encodeURIComponent(k) + '=' + encodeURIComponent(resQuery[k])) 
	.join('&');
 
    useEffect(()=>{
        approvepay();
    },[toggle])
    
    console.log(query)
    const [approve, setApprove] = useState("");
    
    // 수현이가 결제 여부사항 바꿀 곳
    // useEffect(() => {      
const approvepay = () =>{
    // setParams(JSON.stringify(resQuery));
        // const RequestApprove = ()=>{  
            fetch('http://localhost:8080/payment/kakaoPaySuccess?'+query,{
                method : 'GET'})            
                .then(response => response.text())            
                .then((response) =>{
                    if(response!==null){
                        setApprove(response);
                        console.log("payApprove : tid가죠옴!"+approve);
                        if(toggle){
                            setToggle(false)
                        }
                    }else{
                        alert('payApprove : 결제실패 : 장바구니로 되돌아갑니다.');
                        navigate("/basket");
                    }});   
                }

                const GoToOrderInfo =()=>{
                    
                    navigate("/payment/orderInfo", {state: approve})};
                
                
                
                
                
    return (     
          
        <Container style={{height:"70vh", marginTop :"100px"}}>
 
        <Row>
        <Col></Col>
        <Col>
          <Card style={{ width: '50rem'}}>
              <Card.Body >
                <Card.Title class="text-dark" style={{ fontSize:'55px'}}>결제완료!</Card.Title>
                <Card.Text class="text-dark" style={{marginTop:"30px"}}>
                  아래 버튼을 누르면 상세 페이지로 이동합니다.
                </Card.Text>
              </Card.Body>
    
        <Card.Body>
        <Button onClick = {GoToOrderInfo} variant="outline-secondary">결제 정보</Button>{' '}
        </Card.Body>
      </Card>
      </Col>
      <Col></Col>
        </Row>
      </Container>
    );
}

export default PayApprove