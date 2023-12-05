import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

/*import FaStar from "react-icons/fa";*/
import StaticMap from "../../../user/ReviewBoard/pages/StaticMap";
import "../../AdminReviewBoard/css/AdminReviewDetail.css";
import ReviewComment from "../../../user/Comment/pages/ReviewComment";
import ReviewCommentForm from "../../../user/Comment/pages/ReviewCommentForm";

/*import Comment from "../Comment/Comment";*/

function AdminReviewDetail(props) {
  let { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState([]);
  const [item, setItem] = useState({});

/*----------------------------------------------------*/


//해당 게시물의 댓글들
const [items, setItems] = useState([]);

const readReview = () => {
  axios
    .get("http://localhost:8080/Co/reviewComment/" + id)
    .then((res) => setItems(res.data));
};

const Review_desc = () => {
  axios
    .get("http://localhost:8080/Co/reviewComment_desc/" + id)
    .then((res) => setItems(res.data));
};



/*----------------------------------------------------*/



  useEffect(() => {
    fetch("http://localhost:8080/RB/reviewBoard/" + id)
      .then((res) => res.json())
      .then((res) => {
        setItem(res);
        console.log(item);
      });
      readReview()

    getData();
  }, []);

  console.log(item);

  const deleteList = (e) => {
    e.preventDefault();
    axios.delete("http://localhost:8080/RB/reviewBoard/ " + id).then((res) => {
      console.log(typeof res, res);
      navigate("/reviewBoard");
    });
  };

  const movetoUpdateForm = (e) => {
    navigate("/reviewBoardupdate/" + id);
  };

  //북마크 기능
  const data = {
    own_id: sessionStorage.getItem("id"),
    post_id: item.id,
    user_id: item.user_id,
    title: item.title,
    regDate: item.regDate,
    type: item.type,
    hit: item.hit,
    cinema_name: item.cinema_name,
  };
  const user = sessionStorage.getItem("id")

  console.log(sessionStorage.getItem("id"));

  const [val, setVal] = useState([]);

  //유저가 찜한 게시글들의 정보들
  const getData = () => {
    axios
      .get("http://localhost:8080/Bm/bookMark/" + sessionStorage.getItem("id"))
      .then((res) => {
        setVal(res.data);
      });
    console.log(val);
  };

  //북마크
  const bookMark = () => {
    //중복값 입력 안 되게 어떻게 해야되나
    axios.post("http://localhost:8080/Bm/bookMark", data).then((res) => {
      if (res.data != 0) {
        console.log(res.data);
        console.log(data);
        alert('북마크에 저장되었습니다.');
      } else {
        alert("이미 북마크에 등록된 글입니다.");
        console.log("북마크 오류");
      }
    });
  };

  // 이전글, 다음글
  // const prevPage = (e) => {
  //   /* navigate("/board/" + item.prev)*/
  //   if (item.prev != 9999) {
  //     navigate("/board/movePage/" + item.prev, { state: { id: item.prev } });
  //   } else {
  //     setTitle("이전 글이 없습니다.");
  //   }
  // };
  // const nextPage = (e) => {
  //   if (item.next != 9999) {
  //     navigate("/board/movePage/" + item.next, { state: { id: item.next } });
  //   }
  // };

  return (
    <>

    <div className="adminReviewDetails_container">
        <div className="adminReviewDetails_wrap5040">
            <div className="reviewDetails_title_box">
              <div className="reviewDetails_title_box" onClick={() =>{ navigate('/admin/reviewBoard')}}>&gt; 후기게시판</div>
            </div>
          <div className="boardDetails_view_wrap">
            <div className="boardDetails_view">

              <div className="reviewDetails_title">{item.title}</div>

              <div className="reviewDetails_info">
                  
                  <div className="reviewDetails_num">
                    <div>글쓴이</div> &nbsp;&nbsp;
                    <div> {item.user_id}</div>
                  </div>
                  <div className="reviewDetails_num">
                    <div>작성일</div>&nbsp;&nbsp;
                    <div>{item.regDate}</div>
                  </div>
                  <div className="reviewDetails_num">
                    <div>조회</div>&nbsp;&nbsp;
                    <div>{item.hit}</div>
                  </div>
              </div>
            <div style={{display:"flex"}}>
                  
                  {item.markerLat !== 0 ?
                <>
                    <div className="reviewDetail_cont">
                      {/* <pre style={{width: "670px"}}>{item.content.split("\n").map((line) => {
                        return (<>{line}<br/></>)
                      })}</pre> */}
                      <pre  style={{width: "670px"}}>{item.content}</pre>
                    </div>

                      <StaticMap
                        Lat={item.markerLat}
                        Lng={item.markerLng}
                        location={item.location}
                        />
                        </>
                        : 
                          
                      <div className="reviewDetail_cont">
                     
                    <div style={{width:"1010px"}}>{item.content}</div>

                  </div>}
                    </div>
                </div>
            </div>


            {item.user_id == sessionStorage.getItem("id") ? (
              <div className="boardDetails_bt_wrap">
                <button className="details_delete" onClick={deleteList}>
                  삭제
                </button>
                <button className="details_update" onClick={movetoUpdateForm}>
                  수정
                </button>
                {/* <button className="details_Home" onClick={home}>
                홈
              </button> */}
              </div>
            ) : null}

            {/*    댓글기능*/}
            <br />

            {items.map((item)=>(
                  <ReviewComment id={id} item={item} readReview={readReview}/>
            ))}
           <div className="reviewColumn_container">
              <div className="commentComment">&gt;댓글</div>
              <div type="button" className="comment_register" onClick={readReview}>
                등록순
              </div>
              <div type="button" className="comment_latest" onClick={Review_desc}>
                최신순
              </div>
            </div>




            
            <ReviewCommentForm id={id} />


            <button style={{padding:"4px 12px", marginTop:"15x"}} onClick={bookMark}>북마크</button>

           

            {/* 이전글,다음글*/}
            <div className="reviewDetails_move_page_box">
              <div className="boardDetails_move_page">
                <p>&#x25b2;</p>
                <span >{item.prevTitle}</span>
              </div>

              <div className="boardDetails_move_page">
                <p> &#9660;</p>
                <span>{item.nextTitle}</span>
              </div>
            </div>
          </div>
        </div>
      
    </>
  );
}

export default AdminReviewDetail;
