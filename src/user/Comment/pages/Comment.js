import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../css/reviewComment.css";
// import axios from "axios";

const Comment = (props) => {
  const id = props.id;
  const navigate = useNavigate();
  const [comments, setComments] = useState([]);
 

  useEffect(() => {
    fetch("http://localhost:8080/Co/comment/" + id)
      .then((res) => res.json())
      .then((res) => {
        setComments(res);
        console.log(setComments);
      });
  }, []);


  return (
    <>
      <div className="container_comment_board">
        <div className="comment_box_board" style={{fontSize:"18px", fontWeight:"bold"}}>&gt;답변</div>
        <div className="comment_box_board">
            <div className="comment_content_board"> {comments.type}</div>
            <div className="comment_content_board"> {comments.regDate}</div>
            <div className="comment_content_board">{comments.content}</div>
        </div>
      </div>
  
    </>
  );
};

export default Comment;
