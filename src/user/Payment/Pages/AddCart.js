import React from 'react';
import {useLocation,useNavigate} from "react-router-dom";
import {useEffect,useState} from "react";
import kakaopay from '../icons/kakaopay.png'

import {Container} from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function AddCart(props) {
  const navigate = useNavigate();

  const {state} = useLocation();

  console.log("state : " + state.total_price);
  // Basket에서 받아온 props
  const [item, setItem]= useState({
    basket_id: state.id,
    partner_user_id: state.user_id,
    item_name : state.item_name + " 외 " + (state.total_amount - 1) + "건", 
    quantity: state.total_amount,
    total_amount: state.total_price,
  });

  console.log("아이템 콘솔:",item);
//   console.log(state);
  //props로 넘겨줄 값
  const [payReady, setPayReady] = useState({
    basket_id: '',
    partner_order_id: '',
    partner_user_id: '',
    item_name: '',
    quantity: '',
    amount: '',
  });
  const [toggle, setToggle] = useState(true);

//   console.log("addCart : basketId:       " + item.basket_id);
//   console.log("addCart : partner_order_id :     " + payReady.partner_order_id);
//   console.log("addCart : DB에서 가져온 값 :        " + JSON.stringify(payReady));


  //쿼리 스트링 전달
  let params = {
    "basket_id": item.basket_id
    };

  let query = Object.keys(params)
    .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
    .join('&');
//   console.log(query);

  //
  const GoToPayReady=()=> {
    navigate('/payment/payReady', {state: payReady})};

  useEffect(() => {
    fetch('http://localhost:8080/payment/addCart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify(item), //JS Object를 JSON으로 변경해서 던진다
      })
      .then((res) => res.json())
      .then((res) => {
        if (res !== null) {
          setItem(item);
          setToggle(false);
          getCart();
        } else {
          alert('addCart : 주문 등록에 실패하였습니다');
        }
      });
      
    
  }, []);

  // useEffect(() => {
const getCart = () =>{
    fetch('http://localhost:8080/payment/getCart?' + query, {
        method: 'GET'
      })
      .then(response => response.json())
      .then((response) => {
        if (response !== null) {
            setPayReady(response);
        //   console.log("response:" + JSON.stringify(payReady.partner_user_id));
        //   console.log('addCart : 성공!');
          // if(toggle){
          //   setToggle(false)
          //         }
        } else {
          alert('addCart : 주문 목록 가져오기를 실패하였습니다');
        };
      });
     
    // console.log("addCart : DB에서 가져온값 : " + payReady);
    // console.log("addCart : DB에서 가져온값 : " + payReady.partner_order_id);
  // }, [item]);
    }
  
  return (


    <Container style={{height:"70vh", marginTop :"100px"}}>
 
      <Row>
      <Col></Col>
      <Col>
        <Card style={{ width: '50rem'}}>
            <Card.Body >
              <Card.Title class="text-dark" style={{ fontSize:'55px'}}>ORDER</Card.Title>
              <Card.Text class="text-dark">
                주문한 상품이 맞는지 확인 후 결제하기 버튼을 눌러주세요!
              </Card.Text>
            </Card.Body>
        <ListGroup className="list-group-flush">
        <ListGroup.Item>
          <Row>
            <Col> 주문 상품 </Col>
            <Col xs={5}>{item.item_name}</Col>
          </Row>
        </ListGroup.Item>
        <ListGroup.Item></ListGroup.Item>
        <ListGroup.Item>
        <Row>
            <Col> 주문 수량  </Col>
            <Col xs={5}>{item.quantity}</Col>
          </Row>
        </ListGroup.Item>
        <ListGroup.Item></ListGroup.Item>
        <ListGroup.Item>
          <Row>
            <Col> 결제 금액 </Col>
            <Col xs={5}>{item.total_amount}</Col>
          </Row>
        </ListGroup.Item>
        <ListGroup.Item></ListGroup.Item>
      </ListGroup>
      <Card.Body>
      <Button onClick = {GoToPayReady} variant="outline-secondary">결제하기</Button>{' '}
      </Card.Body>
    </Card>
    </Col>
    <Col></Col>
      </Row>
    </Container>


  );

};

export default AddCart;