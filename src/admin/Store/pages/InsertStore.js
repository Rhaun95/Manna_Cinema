import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';

function InsertStore(props) {
    const navigate = useNavigate();

    const [item,setItem] = useState({
        name : '',
        price :'',
        amount :'',
        name :'',
        type :'',
        image : ''
    })

    function ChangeValue(e) {
        setItem({
            ...item,
            [e.target.name] : e.target.value,
        });
    }
    function submitItem(e){
        e.preventDefault();

        fetch('http://localhost:8080/store', {
            method:'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
              },
            body: JSON.stringify(item), //JS Object를 JSON으로 변경해서 던진다
              
        })
        .then((res) => res.json())
        .then((res) => {
          if (res !== null) {
            setItem(item);
            navigate('/admin/store');
          } else {
            alert('글 등록에 실패하였습니다');
          }
        });
    }
    return (
        <div>
           
          <Container className='noScrollPage'>          
          <h1 style={{textAlign : 'center'}}><strong>🍿매점 추가 페이지🍿</strong></h1> 
            <Form onSubmit={submitItem}>
            <div style={{display : 'flex', margin : '3.5em'}}>
              <Form.Group className="mb-3" controlId="form"  style={{width : '30vh', margin : '0.5em'}}>
                <Form.Label>상품명</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  onChange={ChangeValue}
                  name="name"
                />
              </Form.Group>
    
               <Form.Group className="mb-3" controlId="form"  style={{width : '30vh', margin : '0.5em'}}>
                <Form.Label>상품 가격</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter price"
                  onChange={ChangeValue}
                  name="price"
                />
              </Form.Group> 
              <Form.Group className="mb-3" controlId="form" style={{width : '30vh', margin : '0.5em'}}>
                <Form.Label>상품 재고</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter amount"
                  onChange={ChangeValue}
                  name="amount"
                />
              </Form.Group> 
              <Form.Group className="mb-3" controlId="form" style={{width : '30vh', margin : '0.5em'}}>
                <Form.Label>세트 or 단품</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter type"
                  onChange={ChangeValue}
                  name="type"
                />
              </Form.Group> 
              <Form.Group className="mb-3" controlId="form" style={{width : '30vh', margin : '0.5em'}}>
                <Form.Label>image url</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter image"
                  onChange={ChangeValue}
                  name="image"
                />
              </Form.Group>
              </div>
              <Button variant="danger" type="submit">상품 추가</Button>
              
            </Form>
          </Container>
        </div>
      )

}

export default InsertStore