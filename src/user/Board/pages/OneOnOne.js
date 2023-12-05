import axios from "axios";
import React, { useEffect, useState } from "react";
import Pagination_B from "./Pagination_B";
import { useNavigate } from "react-router-dom";
import '../css/OneonOne.css'

function OneOnOne() {
  const own_id = sessionStorage.getItem("id");
  const [toggle, setToggle] = useState(true);
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  //페이지네이션//
  const [currentPage, setCurrentPage] = useState(1);
  //한페이지에 보이는 게시글 수
  const [postsPerPage] = useState(10);
  //마지막 게시물 번호 = 현재 페이지 넘버 * 15
  const indexOfLastPost = currentPage * postsPerPage;
  //첫 번째 게시물 번호 = 마지막 게시물 번호 -
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  //해당 페이지에서 보여질 포스트들을 맵 써서 보여줌
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    getByUser();
    }, []);

    useEffect(() => {
      getByUser();
      }, [toggle]);
    

const getByUser=()=>{
  axios.get("http://localhost:8080/Bo/OneOnOne/" + own_id).then((res) => {
    setPosts(res.data);
})
}


  const deleteReviews = () => {
    for(let i=0; i<checkedInputs.length; i++){
      axios.delete("http://localhost:8080/Bo/board/"+checkedInputs[i])
      .then((res)=>{
        console.log(checkedInputs[i]+"번 삭제 성공" )
        setToggle(!toggle)
      })}
    
};
/*---------------------------*/
const [checkedInputs, setCheckedInputs] = useState([]);

  useEffect(()=>{
    console.log(checkedInputs)
  },[checkedInputs])

  const changeHandler=(checked,id)=>{
    if(checked){
      setCheckedInputs([...checkedInputs, id]);
    }else{
      setCheckedInputs(checkedInputs.filter((ci)=> ci !== id))
    }
  }
/*---------------------------*/




  return (
    <>
      <div className="board_container_main">
        <div className="board_wrap_all">
          <div className="board_wrap2">
            <div className="board_title_all">
              <div className="board_title1">나의 문의내역</div>
              <div className="board_title2">고객님이 문의하신 내역입니다.</div>
            </div>
            <div className="board_list_all">
              <div className="board_top_all">
                <div className="type_board">유형</div>
                <div className="title_board">제목</div>
                <div className="user_id_board">작성자</div>
                <div className="regDate_board">작성일</div>
                <div className="hit_board">조회</div>
                <div className="hit_adminReviewBoard">선택</div>
              </div>
              {currentPosts.map((post) => (
                <div className="board_map_all" key={post.id}>
                  {/*<td>{post.id}</td>*/}
                  <div className="type_board">{post.type}</div>
                  <div
                    className="title_bookMark5040"
                    onClick={(e) => {
                      axios
                        .put(
                          "http://localhost:8080/Bo/board/addHit/" + post.id,
                          post
                        )
                        .then((response) => console.log(response.data));

                      navigate("/board/" + post.id);
                    }}
                  >
                    {post.title}{" "}
                  </div>
                  <div className="user_id_board">{post.user_id}</div>
                  <div className="regDate_board">{post.regDate}</div>
                  <div className="hit_board5040">{post.hit} </div>
                  <input  className="adminReviewBoard_checkbox" type="checkbox" onChange={(e)=>{
                                changeHandler(e.currentTarget.checked, post.id)
                              }}
                              checked={checkedInputs.includes(post.id) ? true : false}/>
                </div>
              ))}
                    <div className="writeReview_all">
                <button onClick={deleteReviews}>삭제</button>
              </div>
            </div>
            <br />
          </div>
          <Pagination_B
            postsPerPage={postsPerPage}
            totalPosts={posts.length}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            paginate={paginate}
          ></Pagination_B>
        </div>
      </div>
    </>
  );
}

export default OneOnOne;
