import React,{useState, useEffect} from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Container, Form, Button} from 'react-bootstrap';
import '../css/ThunderChatRoom.css';
import '../../chat/css/ChatRoom.css';
import axios from 'axios';
import ChatItem from '../../chat/components/ChatItem';



const ThunderChatRoom =()=>{
  const {id} = useParams();
  const {state} = useLocation();

  const user = sessionStorage.getItem("id")
  const[userlist, setUserlist]=useState([])

  const [chat,setChat] = useState({
    user_id : user,
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
    getUserlist()
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
            user_id : user,
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

  const getUserlist=()=>{
    axios.get("http://localhost:8080/chatroom/"+ id)
    .then((res)=>{
      console.log(res)
      setUserlist(res.data);
    })
  }


  return(
    <>
     
     <Container  >                
        <h1>{id}번 채팅방입니다</h1>
        <div className='chatRoomOut' >
        {chatList.map((item) => (
         <ChatItem item={item} key={item.num}/>                
        ))}          
          <Form onSubmit={submitItem}>           
             <Form.Group className="mb-3" controlId="form" style={{ margin : '0.5em'}}>                
              <Form.Control
                id="FC"
                type="textarea"                  
                onChange={ChangeValue}
                placeholder="보낼 메시지"
                name="context"
                value={chat.context}
                className='mb-2'                
              />
              <Button variant="warning" type="submit">전송</Button>
            </Form.Group>
            <div className='userlist_box' >
            <div className='userlist' >
              <div className='userlist_title'>참가자 목록</div>
              {
                userlist.map((user)=>(
                  <>
                  <div className='joinedUser_info'>
                    <div>
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtmgoFZ6lN3qk5_BC6iFg-vqm8ycsDomK9CQ&usqp=CAU" alt=''
                      width="50px" height="50px" style={{borderRadius:"45%"}}/>
                    </div>
                    <div>{user.username}</div>
                  </div>
                  </>
                ))
              }
              </div>
            </div>      
          </Form>
          
          </div>      
        </Container>            
        
    </>
  )      
        }
export default ThunderChatRoom;
