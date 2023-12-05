import React,{useState, useEffect} from 'react';
import '../css/AdminReviewBoard.css'
import { useNavigate } from 'react-router-dom';
import Pagination_RV from '../components/Pagination_RV'
import axios from 'axios'


const AdminReviewBoard=()=>{
  const navigate = useNavigate();

  const [toggle, setToggle] = useState(true);

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



  useEffect(()=>{
    getData22();
  },[toggle])


  const deleteReviews = () => {
    for(let i=0; i<checkedInputs.length; i++){
      axios.delete("http://localhost:8080/RB/reviewBoard/"+checkedInputs[i])
      .then((res)=>{
        console.log(checkedInputs[i]+"번 삭제 성공" )
        setToggle(!toggle)
      })}
    
};


  /**
   * *DB 데이터 가져옴
   */
  const getData22 = () => {
    axios.get("http://localhost:8080/RB/reviewBoard").then((res) => {
      setReviews(res.data);
    });
  };

  // const filteringType = (e) => {
  //     if (e.target.value == "none") {
  //         getData22();

  //     } else {
  //         axios.get('http://localhost:8080/RB/filter/' + inputs.type)
  //             .then((res) => {
  //                 setReviews(res.data)
  //         })
  //     }
  // }
  
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

  function filteringReview() {
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
/**----------------------------------------------- */
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
  
/**----------------------------------------------- */

  return(
    <>
      <div className='adminReviewBoard_container'>
        <div className="adminReviewBoard_wrap_all">
          <div className="adminReviewBoard_wrap">
            <div className="adminReviewBoard_title_all">
              <div className="adminReviewBoard_title1">후기게시판</div>
              <div className="adminReviewBoard_title2">
                당신의 후기를 남겨주세요!
              </div>
            </div>


            <div className="adminReviewBoard_select_container">
            <div className="adminReviewBoard_select">
              <select
                className="btn_adminReviewBoard"
                onChange={changeValue1}
                name="type"
              >
                <option value="none">=====선택=====</option>
                <option value="영화후기">영화후기</option>
                <option value="영화관후기">영화관후기</option>
                <option value="영화관후기">기타후기</option>
                {/*<option >인기글 모아보기</option>*/}
              </select>
            </div>
              <div className="adminReviewBoard_search">
                <input
                  type="text"
                  className="adminReviewBoardSearchForm"
                  placeholder="검색어를 입력하세요"
                  name="search"
                  value={inputs.search}
                  onChange={changeValue2}
                ></input>
                <button type="button" style={{width:"42px", height:"42px"}}onClick={filteringReview}>
                  🔍
                </button>
              </div>
            </div>
          </div>

          <div className="adminreviewBoard_list_all">
            <div className="reviewBoard_top_all">
              <div className="type_adminReviewBoard">유형</div>
              <div className="title_adminReviewBoard">제목</div>
              <div className="user_id_adminReviewBoard">작성자</div>
              <div className="regDate_adminReviewBoard">작성일</div>
              <div className="hit_adminReviewBoard">조회</div>
              <div className="hit_adminReviewBoard">선택</div>
            </div>
            <div>
              {currentPosts.map((reviews) => (

                <div className="adminreviewBoard_map_all" key={reviews.id}>
                  {/* <td>{post.id}</td>*/}
                  <div className="type_reviewBoard">{reviews.type}</div>
                  <div style={{cursor:"pointer"}}
                    className="title_reviewBoard"
                    onClick={(e) => {
                      /*  axios.put("http://localhost:8080/Bo/board/addHit/" + reviews.id,
                                                       reviews)
                                                       .then(response => console.log(response.data))
    */
                      navigate("/admin/reviewDetail/" + reviews.id);
                    }}
                  >
                    [{reviews.cinema_name}] &nbsp; &nbsp;{reviews.title}
                  </div>
                  <div className="user_id_adminReviewBoard">{reviews.user_id}</div>
                  <div className="regDate_adminReviewBoard">{reviews.regDate}</div>
                  <div className="hit_adminReviewBoard">{reviews.hit} </div>

                  <input  className="adminReviewBoard_checkbox" type="checkbox" onChange={(e)=>{
                                changeHandler(e.currentTarget.checked, reviews.id)
                              }}
                              checked={checkedInputs.includes(reviews.id) ? true : false}/>
                </div>
              ))}
              <div className="writeReview_all">
                <button onClick={deleteReviews}>삭제</button>
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
  )
}


export default AdminReviewBoard;