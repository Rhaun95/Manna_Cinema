import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/ThunderBoardItem.css';


const BoardItem=(props)=>{
  const{id, title, image, meetingtime}= props.thunder;

  const navigate= useNavigate();

  function view(e){
    e.preventDefault();
    navigate('/thunder/'+ id, {state: props.thunder});
  }


  return(
    <>
      <div className="thunderBoardItem">
        <div className="boardItem_content">
          <div className='imgbox'>
            <img src={image} width="90px" height="70px" alt=''/>
          </div>
          <div className="sub_content" >
            <div>제목: {title} </div> 
            <div>시간 : {meetingtime}</div>
          </div>
        </div>
        {!window.sessionStorage.getItem("id")?
          <button className="boardItem_btn" onClick={props.notUser}>게시글 보기</button>
          :
          <button className="boardItem_btn" onClick={view}>게시글 보기</button>
        }
      </div>
    </>
  );
}



export default BoardItem;