import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import MovieItem from '../components/MovieItem';

function MovieHome() {       
    const [items, setItems] = useState([])    
     useEffect(() => {
        fetch('http://localhost:8080/movie', {
          method: 'GET',
        })
          .then((res) => res.json())
          .then((res) => {
            setItems(res);
          });           
      }, []);
      
      return (
        <div>
            <Container className='temp' >            
            {items.map((item) => (
                <MovieItem item={item} key={item.movieId}/>                
            ))}
            <hr/>                                     
            </Container>
        </div>)}
export default MovieHome;
