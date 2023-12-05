import React from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { useState } from "react";

import { Form } from "react-bootstrap";
import Location from "./Location";
import Rating from "./Rating";
import "../css/reviewBoardForm.css";

function ReviewBoardForm(props) {
  const navigate = useNavigate();
  const nowTime = moment().format("YYYY-MM-DD HH:mm:ss");
  const [val, setVal] = useState({
    regDate: nowTime.toString(),
    user_id: sessionStorage.getItem("id"),
  });

  const ChangeValue = (e) => {
    console.log(e.target.name, e.target.value);
    setVal({
      ...val,
      [e.target.name]: e.target.value,
    });
  };

  function getScore(rating) {
    console.log(rating);
    setVal({
      ...val,
      star: rating,
    });
  }

  console.log(val);
  function getXY(markerLat, markerLng, location) {
    console.log(markerLat, markerLng, location);
    setVal({
      ...val,
      markerLat: markerLat,
      markerLng: markerLng,
      location: location,
    });
    console.log(val);
  }

  const addBoard = (e) => {
    e.preventDefault();
    val.content= val.content.replace("\r\n","<br>");
    fetch("http://localhost:8080/RB/reviewBoard", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        charset: "utf-8",
      },
      body: JSON.stringify(val),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res == 1) {
          console.log("추가 성공");
          console.log(res);
          navigate("/reviewBoard");
        } else {
          alert("후기 등록에 실패하셨습니다. 빈칸 없이 작성해주시기 바랍니다.");
          console.log("추가 실패");
        }
      });
  };

  const returnBoard = (e) => {
    navigate("/reviewBoard");
  };

  return (
    <>
      <div className="reviewBoardForm_container2">
        <div className="reviewBoardForm_wrap22">
          <div className="reviewBoardForm_title2">
              <div className="reviewBoardForm_notice2">
                당신의 후기를 적어주세요!
              </div>
          </div>
          <Form className="reviewBoardForm_write5040" onSubmit={addBoard}>
            <div className="reviewBoardForm_write_wrap">
              <div className="reviewBoardForm_title">
                <div className="reviewBoardForm_title_sub2">
                  <div>제목</div>
                    <input
                      className="reviewBoardForm_realTitle"
                      type="text"
                      placeholder="제목 입력"
                      name="title"
                      onChange={ChangeValue}
                      value={val.title}
                    />
                </div>
              </div>

              <div className="reviewBoardForm_realInfo1">
                <div className="reviewBoardForm_realInfo1_sub">
                    <div className="reviewBoardForm_info1">
                      <div>아이디</div>
                      <div>
                        <input
                          type="text"
                          placeholder="아이디 입력"
                          name="user_id"
                          onChange={ChangeValue}
                          value={val.user_id}
                          readOnly
                        />
                        </div>
                      </div>
                  

                    <div className="reviewBoardForm_info2">
                      <div> 후기글 유형</div>
                      <div>
                        <select name="type" onChange={ChangeValue}>
                          <option value="none">=== 선택 ===</option>
                          <option value={val.type}>영화관후기</option>
                          <option value={val.type}>영화후기</option>
                          <option value={val.type}>기타후기</option>
                        </select>
                      </div>
                    </div>

                    <div className="reviewBoardForm_cinema1">
                      <div>영화관</div>
                      <div>
                        <select name="cinema_name" onChange={ChangeValue}>
                          <option value="none">=== 선택 ===</option>
                          <option value={val.cinema_name}>건대입구점</option>
                          <option value={val.cinema_name}>장승배기점</option>
                          <option value={val.cinema_name}>남양주점</option>
                          <option value={val.cinema_name}>부천점</option>
                          <option value={val.cinema_name}>가산점</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  </div>

                    <div className="reviewBoardForm_cont">
                      <textarea 
                        cols="85"
                        rows="18"
                        wrap="hard"
                        placeholder="내용 입력"
                        name="content"
                        onChange={ChangeValue}
                        value={val.content}
                      ></textarea>
                    </div>
                <div>

                    <Rating getScore={getScore} />

                    <Location getXY={getXY} />
                </div>
              <div className="reviewBoardForm_button">
                <button className="reviewBoardForm_reg5040" type="submit">
                  등록
                </button>
                <button
                  className="reviewBoardForm_reg5040"
                  onClick={returnBoard}
                >
                  취소
                </button>
              </div>
          
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}

export default ReviewBoardForm;
