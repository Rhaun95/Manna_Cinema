import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Pagination_RV from "../components/Pagination_RV";
import '../css/ThunderCommunity.css';

function ThunderComments() {

  const navigate = useNavigate();

  //번개모임 댓글 DB 데이터 저장
  const [thunderComments, setThunderComments]  = useState([]);
  // const[category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [username, setUsername] = useState("");
  const user= localStorage.getItem("user");

  {/* 페이지 네이션 */}
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = thunderComments.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(()=>{
    getComments();
  
  },[])

  /**
   * * ThunderComment 데이터
   */
     const getComments= async()=>{
      try{
        const temp = await axios.get("http://localhost:8080/thCo")
        setThunderComments(temp.data) ;
  
      }catch(error){
        console.log("번개 이미지 호출 에러: ",error);
      }
    }



  // useEffect(()=>{
  //   )
  // }},[location])

  //  /**
  //  * * 유저네임별 호출
  //  */
  const searchUser=(()=>{
    if(username == ""){
      getComments()
    }else{
    axios.get("http://localhost:8080/thCo/select/"+ username)
    .then((res)=>{
        setThunderComments(res.data)
    })
  }})

  const [checkedInputs, setCheckedInputs] = useState([]);

  useEffect(()=>{

    console.log(checkedInputs)
  },[checkedInputs])

  const changeHandler = (checked, id) => {
    if (checked) {
      setCheckedInputs([...checkedInputs, id]);
    } else {
      // 체크 해제
      setCheckedInputs(checkedInputs.filter((ci) => ci !== id));
    }
  };

   /**
   * * 삭제
   */
  const deletePost=(()=>{
    for(let i=0; i<checkedInputs.length;i++){
      axios.delete("http://localhost:8080/thCo/"+ checkedInputs[i])
      .then((res)=>{
          console.log(res.data)
          window.location.replace("/admin/thundercomments");
      })
    }
    
   
  })
      

  //  * * 게시글별
  //  */
  function changeCinema(e){
    
    setLocation(e.target.value)
    if(location == "none"){
      getComments()
    }else{
      axios.get("http://localhost:8080/thCo/select/"+ user)
    .then((res)=>{
        setThunderComments(res.data)})
    }}
  


  const changeUsername = (e)=>{
    setUsername(e.target.value)
  }   
  

  return (
    <>

    <div className='container_fluid33_all'>
      <section>
        <div className='container-fluid33'>
        <button  className="thunderAdmin_btn" 
                  onClick={()=>{ navigate("/admin/thunder")}}>모임 관리
        </button>
        <button  className="thunderAdmin_btn" onClick={()=>{
            navigate("/admin/thundercomments")
          }}>댓글 관리
        </button>
              <div className='row align-items-center'>
                  <div className='container-fluid33_title' >번개 댓글 목록</div>
                  
                  <div>
                    🔍<input  className='adminThunco_input' type="text" onChange={changeUsername} name="username" placeholder='유저 아이디/ 게시물 번호' value={username}/>
                    <button className='adminThunco_btn' onClick={searchUser}>검색</button>
                    <button className='adminThunco_btn' type="button" onClick={deletePost}>삭제</button>

                  </div>
                  {/* <select name="category" onChange={changeCategory} value={category}>
                    <option value="none">카테고리</option>
                    <option value="같이보기">같이보기</option>
                    <option value="이벤트 투어">이벤트 투어</option>
                  </select> */}
{/* 
                  <select name="location" onChange={changeCinema}>
                        <option value="none">영화관 </option>
                        <option value ="장승배기" name="location">장승배기</option>
                        <option value ="남양주" name="location">남양주</option>
                        <option value ="건대" name="location">건대</option>
                        <option value ="부천" name="location">부천</option>
                        <option value ="가산" name="location">가산</option>
                        <option value ="한강" name="location">한강</option>
                    </select> */}


              <div className='container_fluid33_content'>
                  <table className='table bg-light text-center'>                    
                    {/* 테이블별 헤더 */}
                    <thead >
                      <tr className='text-muted'>
                        <th> #</th>
                        <th>등록자</th>
                        <th> 내용</th>  
                        <th> 게시물 번호</th>
                        <th> 등록 날짜</th>   
                        <th>선택</th>                     
                      </tr>
                    </thead>
                    {/* 내용 */}
                    <tbody>
                      {currentPosts.map((comment,i)=>(
                        <>
                        <tr>
                          <th>{i+1}</th>
                          <th>{comment.user_id}</th>
                          <th>{comment.content}</th>
                          <th>{comment.posting_num}</th>
                          <th>{comment.regDate.substring(0,10)}</th>
                          <th><input type="checkbox"  onChange={(e)=>{
                                changeHandler(e.currentTarget.checked, comment.id)
                              }}
                              checked={checkedInputs.includes(comment.id) ? true : false}/></th>
                        </tr>
                        </>
                      ))}
                      
                    </tbody>
                  </table>
                 
                </div>
                </div>
      
        <Pagination_RV postsPerPage={postsPerPage} totalPosts={thunderComments.length} currentPage={currentPage}
                               paginate={paginate}></Pagination_RV>
          
        </div>

      </section>
      </div>
    </>
  );
}

export default ThunderComments;