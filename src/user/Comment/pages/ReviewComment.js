import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/reviewComment.css";
import moment, { now } from 'moment'
import { Navigate } from "react-router-dom";

function ReviewComment(props) {
  const review_id = props.id;

  const item =props.item
  
  const nowTime = moment().format('YYYY-MM-DD HH:mm:ss');

  const [input, setInput] = useState({
    user_id: '',
    title: '',
    content: '',
    regDate: '',
    type: '',

  })

  const[toggle,setToggle]=useState(true)
  const[check, setCheck]=useState(true)

  useEffect(()=>{
    props.readReview();
  },[check])




  const [upCheck, setUpCheck] = useState(true);


  function changeValue(e){
    setInput({
      ...item,
      [e.target.name] : e.target.value,
      regDate : nowTime.toString()
    })

  }
console.log(input)

  
  /**--------------------------------------------------------------------- */

  function changeForm(){
    setUpCheck(false)
    setToggle(!toggle)
  }

  function saveUpdate(){
   
    axios.put("http://localhost:8080/Co/update/"+ item.posting_num, input)
    .then((res)=>{
      if(res.data==1){
        alert("댓글 수정성공")
        setCheck(!check)
        
      }else{
        alert("댓글 수정 실패")
      }
      setUpCheck(true)
    })
  }

  return (
    <>
      <div className="reviewComment_allAll">
       
          <div className="container_comment_board" key={item.review_id}>
            <div className="comment_box_board">{item.user_id}</div>
            <div className="comment_box_board">
              
              {/* 수정 누르면 */}
              {upCheck? 
                <div className="comment_content_board">{item.content}</div>
                  :
                <input type="text" className="regDate_bookMark" name="content" value={input.content}
                       placeholder={item.content} onChange={changeValue}/>
              }
                <div className="comment_content_board">{item.regDate}</div> 
                <div className="comment_content_board">
                    {
                      item.user_id == sessionStorage.getItem("id")  
                      ?
                      <div>
                        <button className="deleteReviewComment_button"
                                onClick={() => {
                                    axios
                                      .delete(
                                        "http://localhost:8080/Co/delete/" +item.user_id + "/" + item.posting_num )
                                      .then((res) => {
                                        console.log(res.data);
                                        setCheck(!check)
                                        
                                        });
                                    }}
                                  >
                            삭제
                          </button>  
                          {
                            toggle
                            ?
                            <button className="updateReviewComment_button" onClick={changeForm}>수정</button>
                            :
                            <button className="updateReviewComment_button" onClick={saveUpdate}>저장</button>
                          }
                      </div>
                      : null
                    }
            </div>
            </div>
         
          </div>


          
      </div>
      {/* <div>
        {comments.title != null ? (
          <button onClick={() => navigate("/commentUpdate/" + id)}>수정</button>
        ) : (
          <button onClick={() => navigate("/commentInsert")}>등록</button>
        )}
      </div> */}
    </>
  );
}

export default ReviewComment;
