import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import { Form } from "react-bootstrap";
/*import FaStar from "react-icons/fa";*/
import StaticMap from "./StaticMap";
import '../css/reviewDetails.css'
import ReviewComment from "../../Comment/pages/ReviewComment";
import ReviewCommentForm from "../../Comment/pages/ReviewCommentForm";
import moment from 'moment'
import Location from "./Location";
import Rating from "./Rating";



/*import Comment from "../Comment/Comment";*/


function ReviewDetails(props) {

    let {id} = useParams()
    const navigate = useNavigate();

    const [title, setTitle] = useState([]);
    const [item, setItem] = useState({});
    const nowTime = moment().format('YYYY-MM-DD HH:mm:ss');

    //글 정보 담는 곳
    const [val, setVal] = useState({
        title: "",
        content : "",
        regDate: nowTime,
      
    })

    /**
     * * 변경한 값 반영
     */
    function changeValue(e){
     setItem({
            ...item,
         [e.target.name] : e.target.value
    })
    console.log("item: ",item)
}

//지도
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

//별점
  function getScore(rating) {
    console.log(rating);
    setVal({
      ...val,
      star: rating,
    });
  }

    useEffect(() => {

        fetch('http://localhost:8080/RB/reviewBoard/' + id)
            .then((res) => res.json())
            .then((res) => {
                setItem(res)
                console.log(item)
            })

        getData();

    }, []);

    
    /**
     * * 수정한 글 저장하기 -> 이동하기
     */
     const save = (e) => {
        axios.put("http://localhost:8080/RB/update/"+id, item)
        .then(res =>{
            if(res.data !== null){
                alert("업데이트 성공")
            }else{
                alert("업데이트 실패")
            }
        })
        navigate("/reviewBoard")
        }




    const returnBoard = (e) => {
        navigate("/reviewBoard");
    }

   


    //북마크 기능
    const data = {
        own_id: sessionStorage.getItem("id"),
        post_id: item.id,
        user_id: item.user_id,
        title: item.title,
        regDate: item.regDate,
        type: item.type,
        hit: item.hit,
        cinema_name: item.cinema_name
    }


//유저가 찜한 게시글들의 정보들
    const getData = () => {
        axios.get('http://localhost:8080/Bm/bookMark/' + sessionStorage.getItem("id"))
            .then((res) => {
                setVal(res.data)
            })
        console.log(val)

    }


    //북마크
    const bookMark = () => {
        //중복값 입력 안 되게 어떻게 해야되나
        axios.post("http://localhost:8080/Bm/bookMark", data)
            .then((res) => {
                    if (res.data != 0) {
                        console.log(res.data);
                    } else {
                        alert('이미 북마크에 등록된 글입니다.')
                        console.log('북마크 오류')
                    }})
    }


    //이전글, 다음글
    const prevPage = (e) => {
        /* navigate("/board/" + item.prev)*/
        if (item.prev != 9999) {
            navigate('/board/movePage/' + item.prev, {state: {id: item.prev}})
        } else {
            setTitle('이전 글이 없습니다.')
        }
    }
    const nextPage = (e) => {
        if (item.next != 9999) {
            navigate('/board/movePage/' + item.next, {state: {id: item.next}})
        }
    }


    return (
        <>
        <div className="reviewBoardForm_container" style={{marginTop : '3.2vh', height : '140vh'} }>
          <div className="reviewBoardForm_wrap22">
            <div className="reviewBoardForm_title2">
                <div className="reviewBoardForm_notice2">
                  당신의 후기를 적어주세요!
                </div>
            </div>
            <Form className="reviewBoardForm_write" onSubmit={save}>
              <div className="reviewBoardForm_write_wrap">
                <div className="reviewBoardForm_title">
                  <div className="reviewBoardForm_title_sub2">
                    <div>제목</div>
                      <input
                        className="reviewBoardForm_realTitle"
                        type="text"
                        placeholder={item.title}
                        name="title"
                        onChange={changeValue}
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
                            placeholder={item.user_id}
                            name="user_id"
                            onChange={changeValue}
                            value={val.user_id}
                            readOnly
                          />
                          </div>
                        </div>
                    
  
                      <div className="reviewBoardForm_info2">
                        <div> 후기글 유형</div>
                        <div>
                          <select name="type" onChange={changeValue}>
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
                          <select name="cinema_name" onChange={changeValue}>
                            <option value="none">=== 선택 ===</option>
                            <option value={val.cinema_name}>건대입구점</option>
                            <option value={val.cinema_name}>장승배기점</option>
                            <option value={val.cinema_name}>남양주점</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    </div>
  
                      <div className="reviewBoardForm_cont">
                        <textarea
                          cols="85"
                          rows="18"
                          placeholder={item.content}
                          name="content"
                          onChange={changeValue}
                          value={val.content}
                        ></textarea>
                      </div>
                  <div>
  
                      <Rating getScore={getScore} />
  
                      <Location getXY={getXY} />
                  </div>
                <div className="reviewBoardForm_button">
                  <button className="reviewBoardForm_reg" type="submit">
                    등록
                  </button>
                  <button
                    className="reviewBoardForm_delete"
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

export default ReviewDetails;