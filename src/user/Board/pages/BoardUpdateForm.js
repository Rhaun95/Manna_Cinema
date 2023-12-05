import React from 'react';
import {useNavigate, useParams, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {Form} from "react-bootstrap";
import '../css/boardForm.css'
import moment from "moment";
import 'moment/locale/ko';
import axios from 'axios';




function BoardUpdateForm() {

    const nowTime = moment().format('YYYY-MM-DD HH:mm:ss');

   const location = useLocation();
//    const secret = location.state;
    let {id} = useParams()
    const navigate = useNavigate()
    const [val, setVal] = useState({
        /*      id: '',*/
        user_id: '',
        title: '',
        content: '',
        regDate: '',
        type: '',
        secret:0,
        board_pw: ''


    })


    const ChangeValue = (e) => {
        console.log(e.target.name, e.target.value);
        setVal({
            ...val,
            regDate: nowTime.toString(),
            [e.target.name]: e.target.value,
            
        });
    }


    useEffect(() => {
        fetch('http://localhost:8080/Bo/board/' + id, {
            method: 'GET'
        })

            .then((res) => res.json())
            .then((res) => setVal(res));
        console.log(val)

    }, [])

    const returnBoard =(e) => {
        navigate("/board/" + id)
    }


    const updateBoard = (e) =>{
        e.preventDefault()
        axios.put('http://localhost:8080/Bo/board/'+id, val)
        .then((res)=> {

            if(res !=null){
                console.log('문의글 수정 성공')
                navigate('/board');
            }else{
                navigate('/board/'+ id);
                console.log('문의글 수정 실패');
            }

        }
        )

    }

    const [checked, setChecked] = useState(true);

    const changeCheck = (e) => {
        setChecked(!checked);
        if (checked === true) {
            console.log("비밀글 설정 성공", val.secret);
            return val.secret = 1;


        } else {
            console.log("비밀글 설정 실패", val.secret);
            return val.secret = 0;

        }
    }





    return (
        <>          
        <div className="reviewBoardForm_container2">
            <div className="reviewBoardForm_wrap22">
            <div className="reviewBoardForm_title3">
                <div className="reviewBoardForm_notice2" style={{marginBottom:"15px"}}>
                   문의 내용을 수정해주시기 바랍니다.
                </div>
            </div>
            <Form className="reviewBoardForm_write" onSubmit={updateBoard}>
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
                    
                    {/* <div className='reviewBoardForm_realInfo1_sub'>
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
                                        <input type="boardForm_pw_input1" name="board_pw"
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
                        </div> */}
                        
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
};

export default BoardUpdateForm;