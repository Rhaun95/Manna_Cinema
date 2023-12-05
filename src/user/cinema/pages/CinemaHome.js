import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CinemaItem from "../components/CinemaItem";
import { Button, Container } from "react-bootstrap";


function CinemaHome(){  
  let [cinema,setCinema] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8080/cinema', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => {
        setCinema(res);
      }); 
    }, []);         

  return (
    <Container className="temp">
    <h1>상영관</h1>
    {cinema.map((item) => (
        <CinemaItem item={item} key={item.id}/>                
    ))}
    <br/>
    </Container>
  )
}

export default CinemaHome;