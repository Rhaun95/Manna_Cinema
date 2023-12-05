import React, { useEffect, useState } from "react";
// import axios from 'axios';

import { useNavigate } from "react-router-dom";
import Pagination_RV from "./Pagination_RV";
import "../css/reviewBoard.css";
import axios from "axios";
// import InternalPreviewGroup from "antd/lib/image/PreviewGroup";

//찐
/*import ReviewSearch from "./ReviewSearch";*/

function ReviewBoard() {
  const navigate = useNavigate();

  const [reviews, setReviews] = useState([]);
  const [inputs, setInputs] = useState({
    type: "",
    search: "",
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(15);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = reviews.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    getData22();
  }, []);

  const moveToInsert = () => {
    navigate("/reviewInsert");
  };

  
  /**
   * *DB 데이터 가져옴
   */
  const getData22 = () => {
    axios.get("http://localhost:8080/RB/reviewBoard").then((res) => {
      setReviews(res.data);
    });
  };


  console.log("reviews: ", reviews);
  console.log("inputs: ", inputs);

  const changeValue1 = (e) => {
    inputs.type = e.target.value;
    if (e.target.value == "none") {
      getData22();
    } else {
      axios
        .get("http://localhost:8080/RB/filter/" + inputs.type)
        .then((res) => {
          setReviews(res.data);
        });
    }
  };

  function filteringReview(e) {
    axios
      .get(
        "http://localhost:8080/RB/search/" + inputs.type + "/" + inputs.search
      )
      .then((res) => {
        setReviews(res.data);
      });
  }

  // 검색기능

  const changeValue2 = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="reviewBoard_container_main1">
        <div className="reviewBoard_wrap_all1">
          <div className="reviewBoard_wrap">
              <div className="reviewBoard_title_all1">

                  <div className="reviewBoard_title11" >후기게시판</div>
                  <div className="reviewBoard_title21">
                    당신의 후기를 남겨주세요!
                  </div>

              </div>

            <div className="reviewBoard_select_container">
              <div className="reviewBoard_select1">
                  <select
                    className="btn_reviewBoard1"
                    onChange={changeValue1}
                    name="type"
                  >
                    <option value="none">=====선택=====</option>
                    <option value="영화후기">영화후기</option>
                    <option value="영화관후기">영화관후기</option>
                    <option value="기타후기">기타후기</option>
                  </select>
              </div>

                  <div className="reviewBoard_search1">
                    <input
                      type="text"
                      className="reviewBoardSearchForm1"
                      placeholder="검색어를 입력하세요"
                      name="search"
                      value={inputs.search}
                      onChange={changeValue2}
                    ></input>
                    <button type="button" style={{width:"42px", height:"42px"}} onClick={filteringReview}>
                      🔍
                    </button>
                  </div>

          </div>
        </div>

          <div className="reviewBoard_list_all1">
            <div className="reviewBoard_top_all">
              <div className="type_reviewBoard">유형</div>
              <div className="title_reviewBoard">제목</div>
              <div className="user_id_reviewBoard">작성자</div>
              <div className="regDate_reviewBoard">작성일</div>
              <div className="hit_reviewBoard">조회</div>
            </div>
            <div>


              {currentPosts.map((reviews) => (
                <div className="reviewBoard_map_all" key={reviews.id}>
                  {/* <td>{post.id}</td>*/}
                  <div className="type_reviewBoard">&nbsp;&nbsp;{reviews.type}</div>
                  <div
                    className="title_reviewBoard1"
                    onClick={(e) => {
                      axios
                        .all([
                          axios.put(
                            "http://localhost:8080/RB/reviewBoard/addHit/" +
                              reviews.id
                          ),
                          axios.put(
                            "http://localhost:8080/Bm/bookMark/addHit/" +
                              reviews.id
                          ),
                        ])
                        .then(
                          axios.spread((...res) => {
                            if (res[0] === 1 && res[1] === 1) {
                              console.log(res);
                            }
                          })
                        )
                        .catch((err) => {
                          console.log("err: ", err);
                        });
                      navigate("/reviewBoard/" + reviews.id);
                    }}
                  >
                    [{reviews.cinema_name}] &nbsp; &nbsp;{reviews.title}
                  </div>
                  <div className="user_id_reviewBoard">{reviews.user_id}</div>
                  <div className="regDate_reviewBoard1">{reviews.regDate}</div>
                  <div className="hit_reviewBoard">{reviews.hit} </div>
                </div>
              ))}



              <div className="writeReview_all">
                <button className="writeReview_all_btn1" onClick={moveToInsert}>글쓰기</button>
              </div>
            </div>
          </div>
          <br />

          <Pagination_RV
            postsPerPage={postsPerPage}
            totalPosts={reviews.length}
            currentPage={currentPage}
            paginate={paginate}
          ></Pagination_RV>
        </div>
      </div>
    </>
  );
}

export default ReviewBoard;
