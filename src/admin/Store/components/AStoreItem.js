import React from 'react';
import { Card, ListGroup, Badge,Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import '../css/StoreAdmin.css'

function AStoreItem(props) { 

    const navigate = useNavigate();
    const {id,price,amount,name,type,image} = props.item
    //MovieHome에서 상속 받음
    
  
    return(
      <ListGroup as="ol" className='adminStoreList'>
      <ListGroup.Item
        className='adminStoreBox' id='adminBox'>                          
        <div className='adminStoreText'>
        <div className="fw-bold ">
        <h4 onClick={()=> window.confirm('['+name +']'+ " 상품 수정하시겠습니까?") ? navigate("/admin/store/update/" + id) : <></> }>🍿{name}</h4></div>
        <div>가격 {price} </div>
        <div>매출액 ?????</div>
        </div>
        <div style={{display : 'inline-block'}}>
        <Button className='mr-2' 
        onClick={()=> window.confirm('['+name +']'+ " 상품 수정하시겠습니까?") 
        ? 
        navigate("/admin/store/update/" + id) 
        : 
        <></> }>수정
        </Button>  
        <Button variant='danger' type='button' onClick={()=> {                  
                    if(window.confirm("정말 삭제하시겠습니까?")){
                    fetch('http://localhost:8080/store/' + id,{
                        method : 'DELETE',
                    })
                    .then((res)=> res.text())
                    .then((res) =>{
                      window.location.replace('/admin/store')
                      alert('삭제되었습니다.')                        
                    }).catch((error) => {
                        alert('매점 목록 없음 삭제 실패' + error)
                    })
                  }                                   
        }}>삭제하기</Button>    
        </div>
      </ListGroup.Item>
    </ListGroup>
    )
}
export default AStoreItem