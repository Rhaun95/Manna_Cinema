import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function UpdateStore(props) {
    const navigate = useNavigate();
    let { id } = useParams();

    const [item,setItem] = useState([]);
    

    useEffect(() => {
        fetch('http://localhost:8080/store/' + id)
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

        fetch('http://localhost:8080/store/' + id, {
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
                alert('업데이트 실패! 수정 내용을 확인해주세요');
                window.location.replace("/admin/store/update/" + id)
              }
            })
            .then((res) => {
              if (res !== null) {
                setItem(item);        
                navigate('/admin/store');
              } else {
                alert('업데이트 실패!');
              }
            });
        };

        function deleteStore(e){
          if(window.confirm("정말 삭제하시겠습니까?")){
          fetch('http://localhost:8080/store/' + id,{
              method : 'DELETE',
          })
          .then((res)=> res.text())
          .then((res) =>{
              navigate('/admin/store')
          }).catch((error) => {
              alert('아이디가 없음 삭제 실패' + error)
          })
        }
       
      }   
        
        return (
          <>
          {sessionStorage.getItem('id') == 'admin' ?
            <div className='noScrollPage ML_4em'>            
              <Container className='admin'>
              <div style={{textAlign : 'center'}}>
              <Button variant='danger' onClick={deleteStore}>게시물 삭제</Button>          
              </div>
              <h1 style={{textAlign : 'center'}}><strong>🍿매점 수정 페이지🍿</strong></h1>              
                <Form onSubmit={submitItem}>
                <div style={{display : 'flex', margin : '3.5em'}}>
                <Form.Group className="mb-3" controlId="form" style={{width : '30vh', margin : '0.5em'}}>
                <Form.Label>상품 이름</Form.Label>
                <Form.Control
                  type="text"
                  value={item.name}
                  onChange={ChangeValue}
                  name="name"
                />
              </Form.Group>
    
               <Form.Group className="mb-3" controlId="form" style={{width : '30vh', margin : '0.5em'}}>
                <Form.Label>가격 변경</Form.Label>
                <Form.Control
                  type="text"
                  value={item.price}
                  onChange={ChangeValue}
                  name="price"
                />
              </Form.Group> 

              <Form.Group className="mb-3 " controlId="form" style={{width : '30vh', margin : '0.5em'}}>
                <Form.Label>type 변경</Form.Label>
                <Form.Control
                  type="text"
                  value={item.type}
                  onChange={ChangeValue}
                  name="type"
                />
              </Form.Group> 
              <Form.Group className="mb-3 " controlId="form" style={{width : '30vh', margin : '0.5em'}}>
                <Form.Label>재고 변경</Form.Label>
                <Form.Control
                  type="text"
                  value={item.amount}
                  onChange={ChangeValue}
                  name="amount"
                />
              </Form.Group> 
              </div>
              <Form.Label style={{marginLeft : '4em'}}>이미지 url</Form.Label>
              <Form.Group className="mb-3" controlId="form">               
                  <Form.Control                  
                  type="text"
                  value={item.image}
                  onChange={ChangeValue}
                  name="image"
                />
              </Form.Group> 
                  
              <div style={{textAlign : 'center'}}>
                  <Button variant="primary" type="submit">
                    수정
                  </Button>
              </div>
              </Form>
            </Container>
          </div>
          :
          navigate('/')
          }

        </>
          );
        };
        
        export default UpdateStore;
        