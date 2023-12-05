import React, { useEffect, useState } from "react";
import "../css/bookMark.css";
import axios from "axios";
import { useNavigate } from "react-router";

function BookMark() {
  const navigate = useNavigate();


  const [reviews, setReviews] = useState([]);
  const own_id = sessionStorage.getItem("id");
  console.log(typeof own_id, own_id);
 
  useEffect(() => {
    getRealData();
  }, []);
  /**
   * 북마크 불러오기
   */
 
  const getRealData = () => {
    axios.get("http://localhost:8080/Bm/bookMark/" + own_id).then((res) => {
      setReviews(res.data);
    });
    console.log(reviews);
  };


  const filteringType = (e) => {
    if (e.target.value == "none") {
      axios.get("http://localhost:8080/Bm/bookMark/" + own_id).then((res) => {
        setReviews(res.data);
      });
    } else {
      axios
        .get("http://localhost:8080/Bm/filter/" + e.target.value)
        .then((res) => {
          setReviews(res.data);
          console.log(setReviews);
        });
    }

    console.log(e.target.value);
  };

  return (
    <>
      <div className="bookMark_container_main">
        <div className="bookMark_wrap_all">
          <div className="bookMark_wrap">

            <div className="bookMark_title_all">
              <div>
                <div className="bookMark_title">북마크 목록</div>
              </div>
              <div className="bookMark_select">
                <select className="btn_reviewBoard" onChange={filteringType}
                    name="type" >
                  <option value="none">=====선택=====</option>
                  <option value="영화후기">영화후기</option>
                  <option value="영화관후기">영화관후기</option>
                </select>

              </div>
            </div>
            
            <div className="bookMark_list_all">
              <div className="bookMark_top_all">
                <div className="type_bookMark">유형</div>
                <div className="title_bookMark">제목</div>
                <div className="user_id_bookMark">작성자</div>
                <div className="regDate_bookMark">작성일</div>
                <div className="hit_bookMark">조회</div>
              </div>

              <div>
                {reviews.map((review) => (
                  <div className="bookMark_map_all" key={review.id}>
                    {/* <td>{post.id}</td>*/}
                    <div className="type_bookMark">{review.type}</div>
                    <div
                      className="title_bookMark"
                      onClick={(e) => {
                        axios
                          .all([
                            axios.put(
                              "http://localhost:8080/RB/reviewBoard/addHit/" +
                                review.post_id
                            ),
                            axios.put(
                              "http://localhost:8080/Bm/bookMark/addHit/" +
                                review.post_id
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
                        navigate("/reviewBoard/" + review.post_id);
                      }}
                    >
                      [{review.cinema_name}] &nbsp; &nbsp;{review.title}
                    </div>
                    <div className="user_id_bookMark">{review.user_id}</div>
                    <div className="regDate_bookMark">{review.regDate}</div>
                    <div className="hit_bookMark">{review.hit} </div>
                  </div>
                ))}
              </div>
            </div>


          </div>
        </div>
      </div>
    </>
  );
}

export default BookMark;
