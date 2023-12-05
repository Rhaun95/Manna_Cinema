import { Card,Button,ListGroup } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


function MovieApiItem(props){ 
    let navigate = useNavigate();
    const {rank, movieNm, openDt, audiAcc} = props.mItem            
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('http://localhost:8080/movie', {
          method: 'GET',
        })
          .then((res) => res.json())
          .then((res) => {
            setItems(res);            
            // console.log(items);
          }); //비동기 함수
       
       }, []);

      function Poster(){ 
        for(let i=0; i<items.length; i++){
            if(items[i].title == movieNm){
                return items[i].posterUrl
            }
            if(i== items.length-1){
              return 'https://i.esdrop.com/d/f/8AgqMbQApP/0WLhcJhJ86.png'
            }                    
        }
      }

      function Moving(){ 
        for(let i=0; i<items.length; i++){
            if(items[i].title == movieNm){
              navigate('../movie/'+ items[i].movieId)
              break;                                                                              
            }
            if(i== items.length-1){
              alert("만나박스 미상영 영화입니다.")
            }                    
        }                
      }
      
      function RankPosterBg() {
        for(let i=1; i<=rank.length; i++) {
            if(rank >= 4 )
                return 'dark'            
            
            else if(rank ==3)
              return 'info'
            
            else if(rank ==2)
              return 'secondary'
            
            else if(rank ==1)
              return 'warning'
        }
      }


    return (
      <div className='movieList' onClick={Moving} type='button'>    
        <Card bg={RankPosterBg()} id='card'>
            <Card.Img variant="top" src={Poster()}></Card.Img>
            <Card.Body>                         
            <h4 className='movieTitle'> {rank} 위</h4>
            </Card.Body>
            <Card.Title className='movieTitle'>{movieNm}</Card.Title>
            <ListGroup className="list-group-flush" style={{borderRadius : '15px'}} >
              <ListGroup.Item className='cardText' variant='dark'>개봉일자 : {openDt}</ListGroup.Item>  
              <ListGroup.Item className='cardText' variant='dark'>누적 관객 수  : {audiAcc}</ListGroup.Item>
            </ListGroup>                                          
        <Card.Body>
      <Button variant='primary' onClick={Moving} style={{margin : '1em'}}>상세보기</Button>
      </Card.Body>
      </Card>
      </div>
    )
}

export default MovieApiItem