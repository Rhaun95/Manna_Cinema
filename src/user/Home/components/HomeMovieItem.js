import React,{useState} from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';


function HomeMovieItem(props) { 
    const navigate = useNavigate();

    let value = props.value;
    console.log(value)



    const {movieId,title,directorNm,actorNm,genre,runtime,repRlsDate,rating,posterUrl,plot,star,audiAcc,stillUrl,country,audioUrl} = props.item
    
    return (
      <div className='movie_in_container' style={{transform:`translateX(${value}%)`}} onClick={()=>navigate('/movie/' + movieId)}>
         <ListGroup.Item className='cardText'  style={{marginBottom:"20px",width:"360px", fontSize:"20px", padding:"5px"}} >평점 : {star}</ListGroup.Item>
          <Card className='movie_in_container_forback' bg="dark" >
            <div className="home_movie-top-flush">
              <Card.Img  variant="top" src={ posterUrl } className="home_movie_img" />
              <Card.Body>
                <Card.Title style={{borderRadius : '15px', border : 'solid 0.1em white', height : '2em'}}>{title}</Card.Title>
              </Card.Body>
          </div>
          <div className="home_movie-group-flush">
                <Card.Text className='sht' >
                  <div>{plot}</div>
                </Card.Text>
                <br/>
                <ListGroup  style={{borderRadius : '30px', width:"280px"}} >
                  <ListGroup.Item className='cardText'>장르 : {genre}</ListGroup.Item>
                  <ListGroup.Item className='cardText'>상영시간 : {runtime}분</ListGroup.Item>
                </ListGroup>
          </div>
          <Card.Body>
           
          </Card.Body>
          
        </Card>
        <div style={{paddingBottom:"15px"}}>
          <button className='btn btn-success' style={{paddingBottom:"45px",fontSize:"24px", width:"200px", height:"3px"}} onClick={()=>navigate("/booking")}>예매하기</button>
        </div>
      </div>
   
    )
}
export default HomeMovieItem