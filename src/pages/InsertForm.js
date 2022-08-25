import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header';

function InsertForm(props) {
    const navigate = useNavigate();

    const [item,setItem] = useState({
        name : '',
    })

    function ChangeValue(e) {
        setItem({
            ...item,
            [e.target.name] : e.target.value,
        });
    }
    function submitItem(e){
        e.preventDefault();

        fetch('http://localhost:8080/La/insert', {
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
            navigate('/');
          } else {
            alert('글 등록에 실패하였습니다');
          }
        });
    }
    return (
        <div>
           
          <Container className='temp'>
          <Header/>
            <Form onSubmit={submitItem}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>추가할 name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  onChange={ChangeValue}
                  name="name"
                />
              </Form.Group>
    
              {/* <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Author</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Author"
                  onChange={ChangeValue}
                  name="author"
                />
              </Form.Group> */}
              <Button variant="primary" type="submit">Submit</Button>
            </Form>
          </Container>
        </div>
      )

}

export default InsertForm