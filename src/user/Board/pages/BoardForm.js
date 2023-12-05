import React, {useState, useTransition} from 'react';

import {Form} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import '../css/boardForm.css';
import moment from "moment";


function BoardForm(props) {

    const navigate = useNavigate();
    const nowTime = moment().format('YYYY-MM-DD HH:mm:ss');
    const [val, setVal] = useState({


        regDate: nowTime.toString(),
        board_pw: null,
        secret: 0,
        user_id : sessionStorage.getItem("id")

    })


    const ChangeValue = (e) => {
        console.log(e.target.name, e.target.value);
        console.log(val.board_pw)
        setVal({
            ...val,
            [e.target.name]: e.target.value,
        });
    }
    console.log(typeof val.secret, val.secret)


    const addBoard = (e) => {

        console.log(val);
        e.preventDefault()
        val.content= val.content.replace("\r\n","<br>");
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
                if (res !=null) {
                    console.log('추가 성공');
                    console.log(res);
                    navigate('/board');
                } else {
                    alert("문의글 등록에 실패하셨습니다. 빈칸 없이 작성해주시기 바랍니다.");
                    console.log('추가 실패');
                }
            });
    }

    /**
     * 체크박스를 클릭했을 때, secret 칼럽에 1 들어감
     */
    const [checked, setChecked] = useState(true);
    const changeCheck = (e) => {
        setChecked(!checked);
        if (checked === true) {
            console.log("비밀글 설정 true", val.secret);
            return val.secret = 1


        } else {
            console.log("비밀글 설정 실패", val.secret);
            return val.secret = 0;

        }
    }


    const returnBoard = (e) => {
        navigate("/board");
    }


    return (
        <>          
        <div className="reviewBoardForm_container2">
            <div className="reviewBoardForm_wrap22">
            <div className="reviewBoardForm_title3">
                <div className="reviewBoardForm_notice2" style={{marginBottom:"15px"}}>
                   문의 내용을 작성해주시기 바랍니다.
                </div>
            </div>
            <Form className="reviewBoardForm_write5040" onSubmit={addBoard}>
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

                <div className="reviewBoardForm_realInfo1">
                    <div className="reviewBoardForm_realInfo1_sub">
                        <div className="reviewBoardForm_info2">
                            <div>아이디</div>&nbsp;&nbsp;&nbsp;
                            <div>
                                <input
                                type="text"
                                placeholder="아이디 입력"
                                name="user_id"
                                onChange={ChangeValue}
                                value={val.user_id}
                                readOnly
                                style={{marginRight:"100px"}}
                                />
                                </div>
                            </div>
                    

                    <div className="reviewBoardForm_info2">
                        <div> 문의글 유형</div>&nbsp;&nbsp;
                        <div>
                            <select name="type" onChange={ChangeValue}>
                            <option value="none">=== 선택 ===</option>
                            <option value={val.type}>예매취소</option>
                            <option value={val.type}>매점문의</option>
                            <option value={val.type}>기타문의</option>
                            </select>
                        </div>
                    </div>
                    </div>

                 
                    <div className='reviewBoardForm_realInfo1_sub'>
                            <div>
                                <input type="checkbox" name="secret" onClick={changeCheck}
                                        value={val.secret}/>&nbsp;
                                비밀글 설정
                            </div>
                            <div className="boardForm_pw">
                                <div>비밀번호</div>&nbsp;&nbsp;&nbsp;
                                <div>
                                {
                                    val.secret == 1 ?
                                        <input type="password" name="board_pw"
                                                onChange={ChangeValue}
                                                value={val.board_pw}/>

                                        : <input type="boardForm_pw_input2" name="board_pw" onClick={() => {
                                            alert("비밀글 설정을 클릭해주세요")
                                        }}
                                            onChange={ChangeValue}
                                            value={val.board_pw} readOnly/>
                                        }
                                    </div>
                                </div>
                        </div>
                        
                    </div>
                    <div className="boardForm_cont">
                            <textarea cols="70" rows="20" wrap="hard" placeholder="내용 입력" name="content"
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

export default BoardForm;