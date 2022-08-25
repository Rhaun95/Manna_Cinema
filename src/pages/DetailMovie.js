import { useEffect,useState } from "react";
import { Container,Card } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import {Button} from 'react-bootstrap'
import Header from "../Header/Header";
import '../projectcss/movie.css'



function DetailMovie(props) {
   
    let {id} = useParams()
    const navigate = useNavigate()

    const [item, setItem] = useState([]);
    const [still1,setStill1] = useState("");
    const [still2,setStill2] = useState("");
    const [still3,setStill3] = useState("");


    useEffect(()=> {
        fetch('http://localhost:8080/movie/' + id)
        .then((res) => res.json())
        .then((res) => setItem(res))
        
    },[])

    useEffect(()=> { 
        fetch('http://localhost:8080/movie/' + id +'/still1' )
        .then((res) => res.text())
        .then((res) => setStill1(res))
    },[])
    useEffect(()=> { 
        fetch('http://localhost:8080/movie/' + id +'/still2' )
        .then((res) => res.text())
        .then((res) => setStill2(res))
    },[])

    useEffect(()=> { 
        fetch('http://localhost:8080/movie/' + id +'/still3' )
        .then((res) => res.text())
        .then((res) => setStill3(res))
    },[])




    function deleteBook(){
        fetch('http://localhost:8080/movie/' + id,{
            method : 'DELETE',
        })
        .then((res)=> res.text())
        .then((res) =>{
            navigate('/')
        }).catch((error) => {
            alert('아이디가 없음 삭제 실패' + error)
        })
    }   
        function updateItem() {
            navigate('/update/' + id );
        }

        return (
                <Container className='temp'>
                <Header/>
                    <h1>부분페이지</h1>
                    <Button variant="danger" onClick={updateItem}>수정(관리자만보이게)</Button>
                    &nbsp;
                    <Button variant="danger"onClick={deleteBook}>삭제(관리자만보이게)</Button>
                    <hr/>
                    <img className='posterBox' src={item.posterUrl} align={'left'}/>
                    <h1>{item.title}</h1>
                    <h3>감독 : {item.directorNm} 장르 : {item.genre} / {item.runtime}분 등급 : {item.rating} 개봉일 : {item.repRlsDate}<br/>
                    출연진 : {item.actorNm}</h3>
                    <h5>줄거리 : {item.plot}</h5>
                    <div>
                    <p>스틸 이미지</p>
                    <img className='stillBox' src={still1} style={{display : 'inline-block'}}/>
                    <img className='stillBox' src={still2} style={{display : 'inline-block'}}/>
                    <img className='stillBox' src={still3} style={{display : 'inline-block'}}/>
                    <video src={item.audioUrl} controls/>
                    </div>    
                </Container>            
            
        )
    }

export default DetailMovie