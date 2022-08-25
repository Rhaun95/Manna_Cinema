import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import MovieApiItem from '../components/MovieApiItem';
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import Button from 'react-bootstrap/Button';


function MovieApi() {
  
    const navigate = useNavigate();    
    // const KEY = "f5eef3421c602c6cb7ea224104795888"
    // const DATE = "20220823"
    
    const [movieItems,setMovieItem] = useState([]);
    

       useEffect(() => {
        fetch('http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20220821', {
          method: 'GET',
        })
          .then((res) => res.json())
          .then((res) => { 
            setMovieItem(res.boxOfficeResult.dailyBoxOfficeList);
          
            console.log(movieItems)
          }); //비동기 함수
       }, []);


    return (
        <div>
            <Container>
            <Header/>
            <h1>Movie</h1>
            {movieItems.map((mItem) => (
                <MovieApiItem mItem={mItem} key={mItem.movieCd}/>                
            ))}
            <Button variant='primary' onClick={()=> navigate('/')}>메인으로 이동</Button>
            </Container>
        </div>
    )
}

export default MovieApi;