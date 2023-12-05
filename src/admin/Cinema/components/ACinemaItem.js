import React, { useEffect, useState } from 'react';
import { Card, ListGroup, Badge,Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';



function ACinemaItem(props) { 
    let navigate = useNavigate();
    const {id,lng,lat,cinema_name,star,total_seat} = props.item
    //MovieHome에서 상속 받음
    const [selectItem, setSelectItem]= useState([])
      
    return (    
      <ListGroup as="ol"
      className='adminCinemaList'>
      <ListGroup.Item className='adminCinemaBox'>
        <div>
        <div onClick={()=> window.confirm('['+cinema_name +']'+ " 극장 수정하시겠습니까?") ? navigate("/admin/cinema/update/" + id) : <></> } 
        style={{display : 'inline-block' ,margin : '0.3em'}} className="fw-bold adminCinemaText"><h4>🎦{cinema_name}</h4></div>        
        <div style={{color : 'white'}}>평점 {star} </div>                      
        </div>
        <div style={{display : 'inline-block'}}>        
        <Button className='mr-2' 
        onClick={()=> window.confirm('['+cinema_name +']'+ " 극장 수정하시겠습니까?") 
        ? 
        navigate("/admin/cinema/update/" + id) 
        : <></> }>수정</Button>
        <Button variant='danger' type='button' onClick={()=> {                  
                    if(window.confirm("정말 삭제하시겠습니까?")){
                    fetch('http://localhost:8080/cinema/' + id,{
                        method : 'DELETE',
                    })
                    .then((res)=> res.text())
                    .then((res) =>{
                      window.location.replace('/admin/cinema')  
                      alert('삭제되었습니다.')                        
                    }).catch((error) => {
                        alert('영화가 없음 삭제 실패' + error)
                    })
                  }                                   
        }}>삭제</Button>    
        </div>                  
      </ListGroup.Item>      
    </ListGroup>    
    )
}
export default ACinemaItem