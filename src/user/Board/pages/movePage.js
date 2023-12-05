import React, {useEffect, useState} from 'react';
import '../css/boardDetails.css';
import {useLocation, useNavigate, useParams} from "react-router-dom";
import Comment from "../../Comment/pages/Comment"


function PrevPage(props) {

    const location = useLocation();
    const id = location.state.id;
    const navigate = useNavigate();

    const [item, setItem] = useState({id: id});
 /*   const [title, setTitle] = useState(false);*/

    useEffect(() => {

        fetch('http://localhost:8080/Bo/board/' + id)
            .then((res) => res.json())
            .then((res) => setItem(res))
    }, []);
    console.log(item)

    // 이전글, 다음글

    const prevPage = (e) => {
        if (item.prev != 9999) {
            navigate('/board/' + item.prev)
        }
    }

    const nextPage = (e) => {
        if (item.next != 9999) {

            navigate('/board/' + item.next)
        }
    }



    return (
        <>            
            <div className="board_container">
            <div className="board_wrap">
                <div className="board_title">
                    <strong>문의게시판</strong>
                    {/*<p>공지사항을 빠르고 정확하게 안내해드립니다.</p>*/}
                </div>
                <div className="board_view_wrap">
                    <div className="board_view">
                        <div className="title">
                            {item.title}
                        </div>
                        <div className="info">
                            <dl>
                                <dt>번호</dt>
                                <dd>{item.id}</dd>
                            </dl>
                            <dl>
                                <dt>글쓴이</dt>
                                <dd> {item.user_id}</dd>
                            </dl>
                            <dl>
                                <dt>작성일</dt>
                                <dd>{item.regDate}</dd>
                            </dl>
                            <dl>
                                <dt>조회</dt>
                                <dd>{item.hit}</dd>
                            </dl>
                        </div>
                        <div className="cont">
                            {item.content}
                        </div>
                    </div>
                    {/*           <div className="bt_wrap">

                        <button onClick={deleteList}>삭제</button>
                        <button onClick={movetoUpdateForm}>수정</button>
                        <button onClick={home}>홈</button>
                    </div>*/}

                    <br/>
                    <div>
                        <div className="move_page">
                            <p>&#x25b2;</p><span onClick={prevPage} >{item.prevTitle }</span>
                        </div>

                        <div className="move_page">
                            <p>	&#9660;</p>
                            <span onClick={nextPage}>{item.nextTitle}</span>
                        </div>

                    </div>

                </div>
                <br/>
                <br/>
                <br/>

                <Comment id={id}/>
            </div>
            </div>
        </>

    );
}


export default PrevPage;
