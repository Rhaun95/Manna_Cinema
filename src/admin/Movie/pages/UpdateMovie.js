import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import '../css/MovieAdmin.css'

function UpdateMovie(props) {
    const navigate = useNavigate();
    let { id } = useParams();

    const [item,setItem] = useState([]);
    

    useEffect(() => {
        fetch('http://localhost:8080/movie/' + id)
          .then((res) => res.json())
          .then((res) => setItem(res));
      }, []);

//input value 변할때마다 반응
    function ChangeValue(e){
        setItem({
            ...item,
            [e.target.name] : e.target.value,
        })
      
    }
    
    function submitItem(e) {
        e.preventDefault();

        fetch('http://localhost:8080/movie/' + id, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json; charset=utf-8',
            },
            body: JSON.stringify(item), //JS Object를 JSON으로 변경해서 던진다
          })
            .then((res) => {
              if (res.status === 200) {
                res.json();
                alert("수정되었습니다!")
              } else {
                window.location.replace('/admin/movie/update/' + id)
                alert('업데이트 실패! 수정 내용을 확인해주세요');
                
              }
            })
            .then((res) => {
              if (res !== null) {
                setItem(item);        
                navigate('/admin/movie');
              } else {
                alert('업데이트 실패!');
              }
            });
        };

        function deleteMovie(e){
          if(window.confirm("정말 삭제하시겠습니까?")){
          fetch('http://localhost:8080/movie/' + id,{
              method : 'DELETE',
          })
          .then((res)=> res.text())
          .then((res) =>{
              navigate('/admin/movie')
          }).catch((error) => {
              alert('아이디가 없음 삭제 실패' + error)
          })
        }
       
      }   
        
        return (
          <>
          {sessionStorage.getItem("id") == 'admin' ? 
            <div>             
              <Container className='admin'>
              <div style={{textAlign : 'center'}}>                        
              </div>
              <h1 style={{textAlign : 'center'}}><strong>🎥영화 수정 페이지🎥</strong></h1>              
                <Form onSubmit={submitItem}>
                <div style={{display : 'flex', margin : '3.5em'}}>
                <Form.Group className="mb-3" controlId="form" style={{width : '30vh', margin : '0.5em'}}>
                <Form.Label>영화 이름</Form.Label>
                <Form.Control
                  type="text"
                  value={item.title}
                  onChange={ChangeValue}
                  name="title"
                />
              </Form.Group>
    
               <Form.Group className="mb-3" controlId="form" style={{width : '30vh', margin : '0.5em'}}>
                <Form.Label>감독명</Form.Label>
                <Form.Control
                  type="text"
                  value={item.directorNm}
                  onChange={ChangeValue}
                  name="directorNm"
                />
              </Form.Group> 

              <Form.Group className="mb-3 " controlId="form" style={{width : '30vh', margin : '0.5em'}}>
                <Form.Label>장르</Form.Label>
                <Form.Control
                  type="text"
                  value={item.genre}
                  onChange={ChangeValue}
                  name="genre"
                />
              </Form.Group> 
              <Form.Group className="mb-3" controlId="form" style={{width : '30vh', margin : '0.5em'}}>
                <Form.Label>상영 시간</Form.Label>
                <Form.Control
                  type="text"
                  value={item.runtime}
                  onChange={ChangeValue}
                  name="runtime"
                />
              </Form.Group> 
              <Form.Group className="mb-3" controlId="form" style={{width : '30vh', margin : '0.5em'}}>
                <Form.Label>개봉일</Form.Label>
                <Form.Control
                  type="text"
                  value={item.repRlsDate}
                  onChange={ChangeValue}
                  name="repRlsDate"
                />
              </Form.Group> 
              <Form.Group className="mb-3" controlId="form" style={{width : '30vh', margin : '0.5em'}}>
                <Form.Label>심의등급</Form.Label>
                <Form.Control
                  type="text"
                  value={item.rating}
                  onChange={ChangeValue}
                  name="rating"
                />
              </Form.Group> 

              <Form.Group className="mb-3" controlId="form" style={{width : '30vh', margin : '0.5em'}}>
                <Form.Label>평점</Form.Label>
                <Form.Control
                  type="text"
                  value={item.star}
                  onChange={ChangeValue}
                  name="star"
                />
              </Form.Group> 
              <Form.Group className="mb-3" controlId="form" style={{width : '30vh', margin : '0.5em'}}>
                <Form.Label>누적 관객수</Form.Label>
                <Form.Control
                  type="text"
                  value={item.audiAcc}
                  onChange={ChangeValue}
                  name="audiAcc"
                />
              </Form.Group> 

              <Form.Group className="mb-3" controlId="form" style={{width : '30vh', margin : '0.5em'}}>
                <Form.Label>제조 국가</Form.Label>
                <Form.Control
                  type="text"
                  value={item.country}
                  onChange={ChangeValue}
                  name="country"
                />
              </Form.Group> 
              </div>

              <Form.Group className="ML_4_MB_1" controlId="form">
                <Form.Label>출연 배우 이름</Form.Label>
                <Form.Control
                  type="text"
                  value={item.actorNm}
                  onChange={ChangeValue}
                  name="actorNm"
                />
              </Form.Group> 

              <Form.Group className="ML_4_MB_1" controlId="form">
                <Form.Label>포스터 이미지 링크</Form.Label>
                <Form.Control
                  type="text"
                  value={item.posterUrl}
                  onChange={ChangeValue}
                  name="posterUrl"
                />
              </Form.Group> 

              <Form.Group className="ML_4_MB_1" controlId="form">
                <Form.Label>스틸 영상</Form.Label>
                <Form.Control
                  type="text"
                  value={item.audioUrl}
                  onChange={ChangeValue}
                  name="audioUrl"
                />
              </Form.Group> 

              <Form.Group className="ML_4_MB_1" controlId="form">
                <Form.Label>스틸 이미지 url(3개 , 로 구분하여 입력)</Form.Label>
                <Form.Control
                  type="text"
                  value={item.stillUrl}
                  onChange={ChangeValue}
                  name="stillUrl"
                />
              </Form.Group> 

              <Form.Label className='ML_4_MB_1'>영화 줄거리</Form.Label>
              <Form.Group className="ML_4_MB_1" controlId="form">
                  <textarea 
                  style={{height : '15vh', width : '100vh'}}
                  type="text"
                  value={item.plot}
                  onChange={ChangeValue}
                  name="plot"
                />
              </Form.Group>               
                  <Button variant="outline-primary" 
                  type="submit"
                  style={{marginLeft :'40em' ,marginBottom : '1.35em'}}>
                    수정
                  </Button>
                  <Button variant='outline-danger' 
                  className='ml-4 mb-4' 
                  onClick={deleteMovie}>
                    게시물 삭제
                  </Button>
                </Form>
              </Container>
            </div> :        
            <>
              navigate('/')
              alert('관리자페이지입니다.')
            </>                                    
        }
            </>
          );
        };
        
        export default UpdateMovie;
        