import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {useNavigate} from "react-router";
import {Form} from "react-bootstrap";
import '../css/LockBoard.css';

function LockBoard(props) {
    let {id} = useParams()
    const [board, setBoard] = useState({

    })



    const navigate = useNavigate();

    useEffect(()=>{

        console.log(inputText)
        axios.get("http://localhost:8080/Bo/board/" + id)
            .then((res) => {
                    setBoard(res.data)
                    console.log(res.data)
                }
            )
    },[])

    console.log(board);

    const changeBoard = () => {
        if (board.secret== 0) {
            navigate('/board/' + id)
        }
    }

    const returnBoard = (e) => {
        navigate("/board");
    }

    const [inputText, setInputText] = useState("")

    const changeValue = (e) => {
        e.preventDefault()
        setInputText(e.target.value)
    }

    const changeInput = (e) => {
        console.log(typeof board.board_pw, board.board_pw)
        console.log(typeof inputText, inputText)
        if (inputText === board.board_pw) {
            navigate('/board/' + id);

        } else {
            alert('비밀번호를 재입력해주세요')
        }

    }


    return (
        <>
        <div className="lockboard_container_all">
            {changeBoard}            
            <div className='lockboard_container_all2'>
                
                <div className='lock_notice'> 이 글은 비밀글입니다. 비밀번호를 입력하여 주세요.</div>
                <Form className="board_lock">
                    <div className="lock_pw">
                        &gt; 비밀번호
                    </div>
                    <input maxlength="4" className="lockBoard_pw" type="password" name="lock" onChange={changeValue} value={inputText}/>

                    <div className="bt_lock">
                        <button className="lock_Button1" type="submit" 
                                onClick={changeInput}>확인
                        </button>
                        <button className="lock_Button2" onClick={returnBoard}>취소</button>
                    </div>
                </Form>

            </div>
        </div>
        </>
    );
}

export default LockBoard;