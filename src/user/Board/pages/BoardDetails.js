import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "../css/boardDetails.css";
import Comment from "../../Comment/pages/Comment";

//상세보기 (details)
function BoardDetails(props) {


  let { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState([]);

  const [item, setItem] = useState({});


  useEffect(() => {
    fetch("http://localhost:8080/Bo/board/" + id)
      .then((res) => res.json())
      .then((res) => setItem(res));
  }, [id]);

  useEffect(() => {
    fetch("http://localhost:8080/Bo/board/" + id)
      .then((res) => res.json())
      .then((res) => setItem(res));
  }, []);

  console.log(item)


 const realContent = item.content;
  console.log(realContent);   

  const deleteList = (e) => {
    e.preventDefault();
    axios.delete("http://localhost:8080/Bo/board/ " + id).then((res) => {
      console.log(typeof res, res);
      navigate("/board");
    });
  };

  const movetoUpdateForm = (e) => {
    navigate("/boardUpdate/" + id , {state: item.secret});
  };
  


  // 이전글, 다음글
  const prevPage = (e) => {
    if (item.prev != 9999) {
      navigate("/board/" + item.prev );
    } else {
      setTitle("이전 글이 없습니다.");
    }
  };

  const nextPage = (e) => {
    if (item.next != 9999) {
      navigate("/board/" + item.next);
    }
  };

  return (
    <>
     <div className="boardDetails_container222">
        <div className="boardDetails_wrap">
            <div className="boardDetails_title">
              <div className="boardDetails_tilte2" onClick={() =>{navigate('/board')}}>&gt; 문의게시판</div>
            </div>
          <div className="boardDetails_view_wrap">
            <div className="boardDetails_view">

              <div className="boardDetails_title2">{item.title}</div>

              <div className="boardDetails_info11">
                  
                  <div className="boardDetails_num">
                    <div>글쓴이</div> &nbsp;&nbsp;
                    <div> {item.user_id}</div>
                  </div>
                  <div className="boardDetails_num">
                    <div>작성일</div>&nbsp;&nbsp;
                    <div>{item.regDate}</div>
                  </div>
                  <div className="boardDetails_num">
                    <div>조회</div>&nbsp;&nbsp;
                    <div>{item.hit}</div>
                  </div>
              </div>
            <div style={{display:"flex"}}>
                  <div className="boardDetails_cont" >
                  <div style={{width:"1070px"}}>{item.content}</div>
                     
             {/*    <div style={{width:"1070px"}}>{realContent.split("\n").map((line)=>{
                      return <>{line}<br/></>
                    })}</div> */}
                  </div>
            </div>
            </div>
            {
              item.user_id == sessionStorage.getItem("id")?

              <div className="boardDetails_bt_wrap">
              <button className="details_delete" onClick={deleteList}>
                삭제
              </button>
              <button className="details_update" onClick={movetoUpdateForm}>
                수정
              </button>
       
              </div>
              : null
            }
          

       <br />
            
          <Comment id={id} />
          <br />
            <div>
              <div className="boardDetails_move_page">
                <p >&#x25b2;</p>
                <span onClick={prevPage} style={{cursor:"pointer"}}>이전글</span>&nbsp;
                      <div style={{color:"gray"}}>{item.prevTitle}</div>
              </div>

              <div className="boardDetails_move_page11">
                <p> &#9660;</p>
                <span onClick={nextPage} style={{cursor:"pointer"}} >다음글</span>&nbsp;
                      <div style={{color:"gray"}}>{item.nextTitle}</div>
              </div>
            </div>

          </div>
         
         

        </div>
      </div>
    </>
  );
}

export default BoardDetails;