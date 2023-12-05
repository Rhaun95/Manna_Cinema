import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect,useState } from 'react';


function MovieItem(props) {     
    const {movieId,title,directorNm,actorNm,genre,runtime,repRlsDate,rating,posterUrl,plot,star,audiAcc,stillUrl,country,audioUrl} = props.item
    const [items, setItems] = useState([])
    const navigate = useNavigate();
    
    const date = new Date();        
    let month = date.getMonth()+1
    let day = 0;
    if(date.getDate() == 1 ){
      day = 30
      month = date.getMonth()
      if(month < 10){
          month = '0'.concat(month)
      }
    }
    else{
        day = date.getDate()-1
        if(day < 10){
            day = '0'.concat(day)
        }
        if(month < 10){
            month = '0'.concat(month)
        }
    }
    const yesterday = date.getFullYear()+""+month+""+day+""

    useEffect(() => {
        fetch('https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=' + yesterday, {
          method: 'GET',
        })
          .then((res) => res.json())
          .then((res) => {
            setItems(res.boxOfficeResult.dailyBoxOfficeList); 
          });           
       }, []);
       
//실시간 API 정보와 DB 테이블의 이름 일치하면 [순위]출력       
    function Rank(){
      for(let i=0; i<items.length; i++){          
        if(items[i].movieNm == title){
            return '실시간 :' + items[i].rank + '위'
          }}
      for(let i=0; i<items.length; i++){
            return ''          
      }}
//실시간 API 정보와 DB 테이블의 이름 일치하면 [관람객]출력       
    function AudiAcc(){
      for(let i=0; i<items.length; i++){          
        if(items[i].movieNm == title){
            return '관람객 : ' + items[i].audiAcc
          }}
      for(let i=0; i<items.length; i++){
            return ''
      }}
//실시간 API 정보와 DB 테이블의 이름 일치하면 [랭킹 진입 신규 여부] 출력      
    function WhenRank(){
      for(let i=0; i<items.length; i++){          
        if(items[i].movieNm == title && items[i].rankOldAndNew == "NEW"){
          return "New"
          }
        else return ""}
      for(let i=0; i<items.length; i++){
            return ''
      }}
//실시간 API 정보와 DB 테이블의 이름 일치하면 [개봉일 출력]            
    function OpenDt(){       
      for(let i=0; i<items.length; i++){          
        if(items[i].movieNm == title){
          return '개봉일 : '+items[i].openDt
        }
      }    
      for(let i=0; i<items.length; i++){
            return '개봉일 : '+ repRlsDate;
      }
    }        

    function moveDetail(){
      navigate('/movie/' + movieId)
    }
    
    return (            
    <div type='button' className='movieList' onClick={moveDetail}>
      <h1>
          <h4>{WhenRank()}</h4>   
          {Rank()}<br/>{title}
          <h4>{OpenDt()}</h4>          
          <h4>{AudiAcc()}</h4>           
      </h1>
     
      <Card bg="dark" id='card'>      
        <Card.Img variant="top" src={ posterUrl }/>
        <Card.Body >
          <Card.Title className='movieTitle'>{title}</Card.Title >
          <Card.Text className='sht'>
            {plot}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush" style={{borderRadius : '30px'}} >
          <ListGroup.Item className='cardText'>평점 : {star}</ListGroup.Item>
          <ListGroup.Item className='cardText'>장르 : {genre}</ListGroup.Item>
          <ListGroup.Item className='cardText'>상영시간 : {runtime}분</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Link className='btn btn-secondary' to={"/movie/" + movieId}>상세보기</Link>               
        </Card.Body>               
      </Card>                
    </div>          
    )
}
export default MovieItem