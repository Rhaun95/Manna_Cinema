import React, { useState,useEffect } from "react";
import moment from "moment";
import { Form } from "react-bootstrap";
import axios from "axios";
import "../css/reviewCommentForm.css";

function ReviewCommentForm(props) {
  const review_id = props.id;
  const nowTime = moment().format("YYYY-MM-DD HH:mm:ss");

  const [item, setItem] = useState({
    id: 0,
    title: 0,
    regDate: nowTime.toString(),
    type: "후기",
    user_id: sessionStorage.getItem("id"),
    review_id: review_id,
  });




  console.log(sessionStorage.getItem("id"));

  const addReviewComment = () => {
    axios.post("http://localhost:8080/Co/insertComment", item).then((res) => {
      setItem(res.data);
      console.log(res);
    });
  };

  const changeValue = (e) => {
    setItem({
      ...item,
      content: e.target.value,
    });
  };

  console.log(item.user_id);

  return (
    <div className="commentForm_all">
      <div className="commentForm_user_id">{item.user_id}</div>
      <Form className="commentForm_write" onSubmit={addReviewComment}>
        <textarea
          className="commentForm_content"
          cols="70"
          rows="3"
          name="content"
          id="comment "
          placeholder="댓글을 남겨보세요"
          onChange={changeValue}
          value={item.content}
        />
        <div className="register_comment">
          <button className="register_comment2" type="submit">
            등록
          </button>
        </div>
      </Form>
    </div>
  );
}

export default ReviewCommentForm;
