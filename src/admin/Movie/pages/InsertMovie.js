import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';

function InsertMovie() {
    const navigate = useNavigate();

    const [item,setItem] = useState({
        title : '',
        directorNm :'',
        actorNm :'',
        genre :'',
        runtime :'',
        repRlsDate : '',
        rating : '',
        posterUrl : '',
        plot : '',
        star : '',
        audiAcc :'',
        stillUrl : '',
        country : '',
        audioUrl : ''
    })

    function ChangeValue(e) {
        setItem({
            ...item,
            [e.target.name] : e.target.value,
        });
    }
    function submitItem(e){
        e.preventDefault();

        fetch('http://localhost:8080/movie', {
            method:'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
              },
            body: JSON.stringify(item), //JS Object를 JSON으로 변경해서 던진다
              
        })
        .then((res) => res.json())
        .then((res) => {
          if (res.status == 200) {
            setItem(item);
            alert('영화 추가되었습니다!')
            navigate('/admin/movie');
          } else {
            alert('영화 추가 실패하였습니다');
          }
        });
    }
  
    return (
        <div>          
          {sessionStorage.getItem("id")=='admin' ? 
          <Container className='admin'>          
          <h1 style={{textAlign : 'center'}}><strong>🎥영화 추가 페이지🎥</strong></h1>
            <Form onSubmit={submitItem}>           

              <div style={{display : 'flex', margin : '3.5em'}}>
                <Form.Group className="mb-3" controlId="form" style={{width : '30vh', margin : '0.5em'}}>
                <Form.Label>영화 이름</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="영화 이름"              
                  onChange={ChangeValue}
                  name="title"
                />
              </Form.Group>
    
               <Form.Group className="mb-3" controlId="form" style={{width : '30vh', margin : '0.5em'}}>
                <Form.Label>감독명</Form.Label>
                <Form.Control
                  type="text"                  
                  onChange={ChangeValue}
                  placeholder="감독명"
                  name="directorNm"
                />
              </Form.Group> 

              <Form.Group className="mb-3 " controlId="form" style={{width : '30vh', margin : '0.5em'}}>
                <Form.Label>장르</Form.Label>
                <Form.Control
                  type="text"                
                  onChange={ChangeValue}
                  placeholder="장르"
                  name="genre"
                />
              </Form.Group> 
              <Form.Group className="mb-3" controlId="form" style={{width : '30vh', margin : '0.5em'}}>
                <Form.Label>상영 시간</Form.Label>
                <Form.Control
                  type="text"                
                  onChange={ChangeValue}
                  placeholder="분만 입력하세요!"
                  name="runtime"
                />
              </Form.Group> 
              <Form.Group className="mb-3" controlId="form" style={{width : '30vh', margin : '0.5em'}}>
                <Form.Label>개봉일</Form.Label>
                <Form.Control
                  type="text"                
                  onChange={ChangeValue}
                  placeholder="YYYYMMDD"
                  name="repRlsDate"
                />
              </Form.Group> 
              <Form.Group className="mb-3" controlId="form" style={{width : '30vh', margin : '0.5em'}}>
                <Form.Label>심의등급</Form.Label>
                <Form.Control
                  placeholder="심의등급"
                  type="text"                  
                  onChange={ChangeValue}
                  name="rating"
                />
              </Form.Group> 

              <Form.Group className="mb-3" controlId="form" style={{width : '30vh', margin : '0.5em'}}>
                <Form.Label>평점</Form.Label>
                <Form.Control
                placeholder="?.?"
                  type="text"                  
                  onChange={ChangeValue}
                  name="star"
                />
              </Form.Group> 
              <Form.Group className="mb-3" controlId="form" style={{width : '30vh', margin : '0.5em'}}>
                <Form.Label>누적 관객수</Form.Label>
                <Form.Control
                placeholder="9999999"
                  type="text"                  
                  onChange={ChangeValue}
                  name="audiAcc"
                />
              </Form.Group> 

              <Form.Group className="mb-3" controlId="form" style={{width : '30vh', margin : '0.5em'}}>
                <Form.Label>제조 국가</Form.Label>
                <Form.Control
                  placeholder="제조 국가"
                  type="text"                  
                  onChange={ChangeValue}
                  name="country"
                />
              </Form.Group> 
              </div>

              <Form.Group className="ML_4_MB_1" controlId="form">
                <Form.Label>출연 배우 이름</Form.Label>
                <Form.Control
                  placeholder="출연 배우 이름"
                  type="text"                  
                  onChange={ChangeValue}
                  name="actorNm"
                />
              </Form.Group> 

              <Form.Group className="ML_4_MB_1" controlId="form">
                <Form.Label>포스터 이미지 링크</Form.Label>
                <Form.Control
                  type="text"                  
                  onChange={ChangeValue}
                  placeholder="포스터 이미지 링크"
                  name="posterUrl"
                />
              </Form.Group> 

              <Form.Group className="ML_4_MB_1" controlId="form">
                <Form.Label>스틸 영상 url</Form.Label>
                <Form.Control
                  type="text"                  
                  onChange={ChangeValue}
                  name="audioUrl"
                  placeholder="스틸 영상 url"
                />
              </Form.Group> 

              <Form.Group className="ML_4_MB_1" controlId="form">
                <Form.Label>스틸 이미지 url(3개 , 로 구분하여 입력)</Form.Label>
                <Form.Control
                  type="text"                  
                  onChange={ChangeValue}
                  placeholder="스틸 이미지 url(3개 , 로 구분하여 입력)"
                  name="stillUrl"
                />
              </Form.Group> 

              <Form.Label className='ML_4_MB_1'>영화 줄거리</Form.Label>
              <Form.Group className="ML_4_MB_1" controlId="form">               
                  <textarea 
                  style={{height : '15vh', width : '131vh', borderRadius : '5px'}}
                  type="text"                  
                  onChange={ChangeValue}
                  placeholder="영화 줄거리"
                  name="plot"
                />
              </Form.Group> 

              <Button variant="outline-danger" className='mb-4' type="submit" style={{marginLeft : '40em'}}>추가</Button>
            </Form>
          </Container>          
          :<> {window.location.replace('/')}
           {alert("관리자 페이지입니다.")}</>
            }
        </div>
      )

}

export default InsertMovie