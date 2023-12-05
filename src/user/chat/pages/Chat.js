import React, { useState } from 'react';
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { useNavigate, useParams } from 'react-router-dom';
import ChatItem from '../components/ChatItem';

function Chat() {
    let {id} = useParams();    

    const [chat,setChat] = useState({
      user_id : sessionStorage.getItem("id"),
      context : '',
      tchat_id : id
    })    
    const [chatList,setChatList] = useState([]);
    const [chatStart, setChatStart] = useState(true);

    function ChangeValue(e) {
        setChat({
            ...chat,
            [e.target.name] : e.target.value,
        });
    }
    useEffect(() => {
      function chating(){
      fetch('http://localhost:8080/tchat/' + id, {
        method: 'GET',
      })
        .then((res) => res.json())
        .then((res) => {
          setChatList(res);          
          console.log(chatList)
        }); 
      }
      //1초마다 반복해서 계속 호출(실시간 반영) 유저 많아지면 과부하
      //새로고침 사용하여 할 수도 있지만, 간단한 프로젝트이므로 이렇게 구성.
      setInterval(()=> chating(),1000)      
     }, []);

    function submitItem(e){
        e.preventDefault();        
        if(chat.context!=''){
        fetch('http://localhost:8080/tchat/' + id, {
            method:'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
              },
            body: JSON.stringify(chat),
        })
        .then((res) => res.json())
        .then((res) => {
          if (res !== null) {
            setChat(chat);            
            setChatStart(!chatStart);            
            setChat({
              user_id : sessionStorage.getItem("id"),
              context : '',
              tchat_id : id
            })
          } else {
           alert("오류")
          }
        });   
      }
      else alert('내용을 입력하세요');                          
    }
    return (
      <>
          <Container>          
          <h4>{id}번 채팅방</h4>                  
          {chatList.map((item) => (
           <ChatItem item={item} key={item.num}/>                
          ))}          
            <Form onSubmit={submitItem}>           
               <Form.Group className="mb-3" controlId="form" style={{ margin : '0.5em'}}>                
                <Form.Control
                  type="text"                  
                  onChange={ChangeValue}
                  placeholder="보낼 메시지"
                  name="context"
                  value={chat.context}
                  className='mb-2'
                  style={{width :'' }}
                />
                <Button variant="danger" type="submit">전송</Button>
              </Form.Group>                                                 
            </Form>
          </Container>          
      </>
      )
}
export default Chat