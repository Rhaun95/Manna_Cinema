import React, { useEffect, useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../css/board.css";
import Pagination_B from "./Pagination_B";
import { FaLock } from "@react-icons/all-files/fa/FaLock";

function Board() {
  const navigate = useNavigate();
  const user =sessionStorage.getItem("id")
  const [posts, setPosts] = useState([]);
  const [inputs, setInputs] = useState({
    type: "",
    search: "",
  });




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

useEffect(() =>{
  getAllBoard();
},[])


const getAllBoard = () => {
  axios.get("http://localhost:8080/Bo/board")
  .then((res) =>{
    setPosts(res.data);
  })
}

console.log("posts" ,posts);
console.log("inputs" , inputs);


  const moveToInsert = () => {
    navigate("/boardInsert");
  };

  const changeValue1 = (e) => {
    inputs.type = e.target.value;
    if (e.target.value == "none") {
      getAllBoard();
    } else {
      axios
        .get("http://localhost:8080/Bo/board/filter/" + inputs.type)
        .then((res) => {
          setPosts(res.data);
        });
    }
  };

  const changeValue2 = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  function filteringReview(e) {
    axios
      .get(
        "http://localhost:8080/Bo/boardSearch/" + inputs.type + "/" + inputs.search
      )
      .then((res) => {
        setPosts(res.data);
      });
  }


  return (
    <>
      <div className="board_container_main" >
        <div className="board_wrap_all"style={{marginRight : '15em'}}>
          <div className="board_wrap2">
            <div className="board_title_all">
              <div className="board_title1">공지사항 및 문의게시판</div>
              <div className="board_title2">
                공지사항을 숙지해주시기 바랍니다. 문의글은 3일내에 답변드립니다.
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
                    <option value="예매취소">예매취소</option>
                    <option value="매점문의">매점문의</option>
                    <option value="기타문의">기타문의</option>
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
                    <button type="button" style={{width:"42px", height:"42px"}} onClick={filteringReview} >
                      🔍
                    </button>
                  </div>

          </div>



            <div className="board_list_all">
              <div className="board_top_all">
                <div className="type_board">유형</div>
                <div className="title_board">제목</div>
                <div className="user_id_board">작성자</div>
                <div className="regDate_board">작성일</div>
                <div className="hit_board">조회</div>
              </div>
              {currentPosts.map((post) => (
                <>
                <div className="board_map_all" key={post.id}>
                  <div className="type_board">{post.type}</div>

                
                
                  {
                    /**
                     * 비밀번호 설정이 되었으면, 
                     * 제목이 '비밀글입니다'로 바뀜
                     */

                    post.secret == 1 ? (
                      <div
                        className="title_board"
                        name="title"
                        onClick={() => {
                          {

                            
                            post.board_pw == null
                              ? navigate("/board/" + post.id)
                              : navigate("/lockBoard/" + post.id);
                          }
                        }}
                      >
                        <FaLock /> 비밀글입니다.
                      </div>
                    ) : (
                      <div
                        className="title_board"
                        name="title"
                        onClick={(e) => {
                          axios
                            .put(
                              "http://localhost:8080/Bo/board/addHit/" + post.id,
                              post
                            )
                            .then((response) => console.log(response.data));
                          console.log(post.board_pw);

                          {
                            /**
                            * 비밀번호 가 없으면 상세페이지, 있으면 잠금화면으로 이동
                            */
                            post.board_pw == null
                              ? navigate("/board/" + post.id)
                              : navigate("/lockBoard/" + post.id);
                          }
                        }}
                      >
                        {post.title}
                      </div>
                    )}
                    <div className="user_id_board">{post.user_id}</div>
                    <div className="regDate_board">{post.regDate}</div>
                    <div className="hit_board">{post.hit} </div>
                  </div>

                  </>
                ))}
              <div className="writeBoard_all">
                <button onClick={moveToInsert}>글쓰기</button>
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

export default Board;
