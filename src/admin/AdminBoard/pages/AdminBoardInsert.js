import React from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { useState } from "react";
import { Form } from "react-bootstrap";
import "../css/AdminBoardForm.css";

function AdminBoardInsert(props) {
  const navigate = useNavigate();
  const nowTime = moment().format("YYYY-MM-DD HH:mm:ss");

  const [val, setVal] = useState({
    title: "",
    content: "",
    type: "공지사항",
    hit: "0 ",
    regDate: nowTime.toString(),
    user_id: sessionStorage.getItem("id"),
  });

  const ChangeValue = (e) => {
    setVal({
      ...val,
      [e.target.name]: e.target.value,
    });
    console.log(val);
  };

  const addBoard = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/Bo/board", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        charset: "utf-8",
      },
      body: JSON.stringify(val),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res !== null) {
          alert("공지사항이 등록되었습니다!");
          console.log(res);
          navigate("/admin/Board");
        } else {
          alert("후기 등록에 실패하셨습니다. 빈칸 없이 작성해주시기 바랍니다.");
          console.log("추가 실패");
        }
      });
  };

  const returnBoard = (e) => {
    navigate("/admin/Board");
  };

  return (
    <>          
        <div className="reviewBoardForm_container">
            <div className="reviewBoardForm_wrap22">
            <div className="reviewBoardForm_title3">
                <div className="reviewBoardForm_notice2" style={{marginBottom:"15px"}}>
                   공지사항을 작성하는 페이지입니다.
                </div>
            </div>
            <Form className="reviewBoardForm_write" onSubmit={addBoard}>
                <div>
                    <div className="reviewBoardForm_write_wrap">
                        <div className="reviewBoardForm_title">
                            <div className="reviewBoardForm_title_sub2">
                            <div>제목</div>
                                <input style={{width:"526px"}}
                                className="reviewBoardForm_realTitle"
                                type="text"
                                placeholder="제목 입력"
                                name="title"
                                onChange={ChangeValue}
                                value={val.title}
                                />
                            </div>
                        </div> 
                    </div>


  
                  
                    <div className="boardForm_cont">
                            <textarea cols="70" rows="20" placeholder="내용 입력" name="content"
                                        onChange={ChangeValue}
                                        value={val.content}></textarea>
                        </div>

                        </div>

                        <div className="boardForm_button">
                            <button className="boardForm_reg" type="submit">등록</button>
                            <button className='boardForm_reg' onClick={returnBoard}>취소</button>
                        </div>
                    </Form>
                </div>
            </div>
        </>
    );
}
export default AdminBoardInsert;
