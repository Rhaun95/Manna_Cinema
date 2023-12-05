import { stringify } from 'query-string';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect,useState } from 'react';
import CancelPayment from './CancelPayment';

import Table from 'react-bootstrap/Table';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function DetailsPayment(){

    // {sessionStorage.getItem("id") == 'admin' ?}
const navigate = useNavigate();


const userId = sessionStorage.getItem("id");

// console.log("userId :    ", userId);
const [toggle,setToggle] = useState(true);
const payColumn =["주문 번호","상품명","수량","결제 금액","결제 수단","결제 승인 시각","결제 상태"];
const [detailsPaymentList,setDetailsPaymentList ] = useState([]);

function CancelConfirm(e){
    
    let tid = e.target.value;
    console.log("tid");
    console.log(tid);
    if(window.confirm("결제를 취소 하시겠습니까?")){
    fetch("http://localhost:8080/payment/cancelPayment?tid="+tid,{
        method : "POST",
    })
    .then((res)=>res.json())
    // .then((res)=>{        
    //     console.log("res 35")
    //     console.log(res);

    // })
    .then((res)=>{
        alert("결제 취소가 완료되었습니다.");
        console.log("cid 41");     
        navigate("/payment/paymentCancel",{ state : tid }); 
    });
}else{
    alert("취소되었습니다.")
}}


    useEffect(() => {
        fetch('http://localhost:8080/payment/detailsPayment?partner_user_id='+userId , {
            method: 'GET'
        })
        .then(response => response.json())
        .then((response) => {
            if (response !== null) {
                setDetailsPaymentList(response);
            if(toggle)
                setToggle(false)
               
            } else {
            alert('결제 내역을 가져올 수 없습니다.');
            nav();
            };
        })

    },[toggle])
 
const nav = () =>{navigate("/");}



    return(
        <Container style={{height:"70vh", marginTop :"100px"}}>
         {sessionStorage.getItem("id") !== null ? 
        <div>                  
          <h1 style={{marginTop:'100px'}}>         
            결제 내역 페이지  
          </h1>  
          <Row>
              <Col></Col>
            <Col>

          <Table hover variant="light" style={{marginTop:'30px', width:'800px'}}>
             <thead>
                <tr>
                    {payColumn.map((pay, index) => (
                        <th key={index}>{pay}</th>
                        ))}
                </tr>
            </thead> 
        
      <tbody>
        {detailsPaymentList.map((Item, index) => {
            return (
                <tr key={index}>
                    <td>{Item.partner_order_id}</td>
                    <td>{Item.item_name}</td>
                    <td>{Item.quantity}</td>
                    <td>{Item.total_amount}</td>
                    <td>{Item.payment_method_type}</td>
                    <td>{Item.approved_at}</td>
                    <td> 
                        {Item.status === "결제취소"  ?
                        <span> 취소완료 </span>
                        :

                        <Button value={Item.tid} onClick = {CancelConfirm} variant="outline-secondary">결제취소</Button>
                        // <button value={Item.tid}
                        // onClick={CancelConfirm}> 결제 취소 </button>
                    }                    
                    </td>                        
                </tr>
                )                
            })}
    

      </tbody>
    </Table>
    </Col>
    <Col></Col>
            </Row>

      <div>

      </div>
    
        </div> :           
          <div style={{height:'100vh'}}>
         
            <div style={{marginTop:'20vh'}}>
                결제 내역은 로그인 후 확인할 수 있습니다.<br/>
            </div>
            <div>
           <button onClick={()=>{ navigate("/") }}> 메인페이지 돌아가기 </button>
            </div>
        </div> 
        }
         </Container>
    )    
}


export default DetailsPayment