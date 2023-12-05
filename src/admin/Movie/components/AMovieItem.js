import React from 'react';
import { Card, ListGroup, Badge,Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import '../css/MovieAdmin.css'

function AMovieItem(props) { 

    const navigate = useNavigate();
    const {movieId,title,directorNm,actorNm,genre,runtime,repRlsDate,rating,posterUrl,plot,star,audiAcc,stillUrl,country,audioUrl} = props.item
    //MovieHome에서 상속 받음     
    return (    
      <>        
      <ListGroup as="ol"
      className='adminMovieList'>
      <ListGroup.Item                 
        className='adminMovieBox' id='adminBox'>
        <div className='adminMovieText'>
        <div className="fw-bold">
          <h4 onClick={()=> window.confirm('['+title +']'+ " 영화 수정하시겠습니까?") ? navigate("/admin/movie/update/" + movieId) : <></> }>
          🎥{title}</h4>
        </div>                
        <div>평점 {star} </div>                      
        <div>매출액 ?????</div>
        </div>    
        <div style={{display : 'inline-block'}}>
        <Button className='mr-2' varinat='primary' 
        onClick={()=> window.confirm('['+title +']'+ " 영화 수정하시겠습니까?") 
        ? 
        navigate("/admin/movie/update/" + movieId) 
        : 
        <></> }>수정</Button>
        <Button variant='danger' onClick={()=> {                  
                    if(window.confirm("정말 삭제하시겠습니까?")){
                    fetch('http://localhost:8080/movie/' + movieId,{
                        method : 'DELETE',
                    })
                    .then((res)=> res.text())
                    .then((res) =>{
                      window.location.replace('/admin/movie')  
                      alert('삭제되었습니다.')                        
                    }).catch((error) => {
                        alert('영화가 없음 삭제 실패' + error)
                    })
                  }                                   
        }}>삭제</Button>
        </div>
      </ListGroup.Item>
    </ListGroup>  
    </>
    )
}
export default AMovieItem