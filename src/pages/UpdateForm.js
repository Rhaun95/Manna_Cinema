import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Header from '../Header/Header';

function UpdateForm(props) {
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
                return "수정되었습니다!"
              } else {
                return navigate('/movie/' + id);
              }
            })
            .then((res) => {
              if (res !== null) {
                setItem(item);
                navigate('/movie/' + id);
              } else {
                alert('업데이트 실패!');
              }
            });
        };
        return (
            <div>
             
              <Container className='temp'>
              <Header></Header>
              <h1><strong>{item.title}</strong> 영화 수정 페이지</h1>
                <Form onSubmit={submitItem}>
                <Form.Group className="mb-3" controlId="form">
                <Form.Label>영화 이름</Form.Label>
                <Form.Control
                  type="text"
                  value={item.title}
                  onChange={ChangeValue}
                  name="title"
                />
              </Form.Group>
    
               <Form.Group className="mb-3" controlId="form">
                <Form.Label>감독명</Form.Label>
                <Form.Control
                  type="text"
                  value={item.directorNm}
                  onChange={ChangeValue}
                  name="directorNm"
                />
              </Form.Group> 
              <Form.Group className="mb-3" controlId="form">
                <Form.Label>출연 배우 이름</Form.Label>
                <Form.Control
                  type="text"
                  value={item.actorNm}
                  onChange={ChangeValue}
                  name="actorNm"
                />
              </Form.Group> 
              <Form.Group className="mb-3" controlId="form">
                <Form.Label>장르</Form.Label>
                <Form.Control
                  type="text"
                  value={item.genre}
                  onChange={ChangeValue}
                  name="genre"
                />
              </Form.Group> 
              <Form.Group className="mb-3" controlId="form">
                <Form.Label>상영 시간</Form.Label>
                <Form.Control
                  type="text"
                  value={item.runtime}
                  onChange={ChangeValue}
                  name="runtime"
                />
              </Form.Group> 
              <Form.Group className="mb-3" controlId="form">
                <Form.Label>개봉일</Form.Label>
                <Form.Control
                  type="text"
                  value={item.repRlsDate}
                  onChange={ChangeValue}
                  name="repRlsDate"
                />
              </Form.Group> 
              <Form.Group className="mb-3" controlId="form">
                <Form.Label>심의등급</Form.Label>
                <Form.Control
                  type="text"
                  value={item.rating}
                  onChange={ChangeValue}
                  name="rating"
                />
              </Form.Group> 
              <Form.Group className="mb-3" controlId="form">
                <Form.Label>포스터 이미지 링크</Form.Label>
                <Form.Control
                  type="text"
                  value={item.posterUrl}
                  onChange={ChangeValue}
                  name="posterUrl"
                />
              </Form.Group> 
              <Form.Group className="mb-3" controlId="form">
                <Form.Label>영화 줄거리</Form.Label>
                <Form.Control
                  type="text"
                  value={item.plot}
                  onChange={ChangeValue}
                  name="plot"
                />
              </Form.Group> 
              <Form.Group className="mb-3" controlId="form">
                <Form.Label>평점</Form.Label>
                <Form.Control
                  type="text"
                  value={item.star}
                  onChange={ChangeValue}
                  name="star"
                />
              </Form.Group> 
              <Form.Group className="mb-3" controlId="form">
                <Form.Label>누적 관객수</Form.Label>
                <Form.Control
                  type="text"
                  value={item.audiAcc}
                  onChange={ChangeValue}
                  name="audiAcc"
                />
              </Form.Group> 
              <Form.Group className="mb-3" controlId="form">
                <Form.Label>스틸 이미지 url(3개 , 로 구분하여 입력)</Form.Label>
                <Form.Control
                  type="text"
                  value={item.stillUrl}
                  onChange={ChangeValue}
                  name="stillUrl"
                />
              </Form.Group> 
              <Form.Group className="mb-3" controlId="form">
                <Form.Label>제조 국가</Form.Label>
                <Form.Control
                  type="text"
                  value={item.country}
                  onChange={ChangeValue}
                  name="country"
                />
              </Form.Group> 
              <Form.Group className="mb-3" controlId="form">
                <Form.Label>스틸 영상</Form.Label>
                <Form.Control
                  type="text"
                  value={item.audioUrl}
                  onChange={ChangeValue}
                  name="audioUrl"
                />
              </Form.Group> 
                  

                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </Container>
            </div>
          );
        };
        
        export default UpdateForm;
        