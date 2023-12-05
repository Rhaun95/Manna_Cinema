import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import '../css/reviewComment.css'
import {Form} from "react-bootstrap";
import axios from "axios";

import moment from "moment";
import BoardDetails from "../../Board/pages/BoardDetails";

function CommentForm(props) {

     let {id} = useParams()
    const navigate = useNavigate()

    const nowTime = moment().format('YYYY-MM-DD HH:mm:ss');

    const [comment, setComment] = useState({
        id: id,
        regDate: nowTime.toString(),

    })



    const ChangeValue = (e) => {
        console.log(e.target.name, e.target.value);
        setComment({
            ...comment,
            [e.target.name]: e.target.value

        });
    }


    const addComment = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8080/Co/commentInsert", comment)
            // .then((res) => res.json())
            .then((res) => {
                if (res.data == 1) {
                    console.log('추가 성공');
                    console.log(res);
                    navigate('/board');
                } else{
                    console.log('추가 실패');
                }
            });
    }


    const returnBoard= () => {
        navigate('/board/' +id)
    }

    return (
        <>
            <BoardDetails/>
            <>
                <div className="board_wrap">

                    <Form className="board_write" onSubmit={addComment}>
                        <div className="board_write_wrap">
                            <div className="title">
                                <dl>
                                    <dt>제목</dt>
                                    <dd><input type="text" placeholder="제목 입력" name="title" onChange={ChangeValue}
                                               value={comment.title}/>
                                    </dd>
                                </dl>


                            </div>
                            <div className="cont">
                            <textarea cols="70" rows="30" placeholder="내용 입력" name="content" onChange={ChangeValue}
                                      value={comment.content}></textarea>
                            </div>

                        </div>

                        <div className="bt_wrap">
                            <button type="submit">등록</button>
                            <button onClick={returnBoard}>취소</button>
                        </div>
                    </Form>
                </div>
            </>

        </>

    );
}

export default CommentForm;