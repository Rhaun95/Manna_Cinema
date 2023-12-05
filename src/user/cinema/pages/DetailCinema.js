import { useEffect,useState } from "react";
import { Container,Card } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import {Button} from 'react-bootstrap'
import MapItem from "../components/MapItem";


function DetailCinema() {
    let {id} = useParams()
    const [item, setItem] = useState([]);

    useEffect(()=> {
        fetch('http://localhost:8080/cinema/' + id)
        .then((res) => res.json())
        .then((res) => setItem(res))
    },[])
    return (
    <Container className='noScrollPage'>                    
        <h2 className="mt-3"><h2 className="detailInfo">극장 : </h2>만나-극장 {item.cinema_name}점</h2>
        <h2><h2 className="detailInfo">총 좌석수 : </h2> {item.total_seat}</h2>
        <h2><h2 className="detailInfo">상세 평점 : </h2> {item.star}</h2><br/>                                               
        <Button className='ml-4' variant="danger">해당 상영관 영화 목록</Button>    
        <br/>
        <MapItem item={item} key={item.id}/>        
    </Container>                            
    )
}

export default DetailCinema