import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Pagination_RV from "./Pagination_RV";
import '../css/ThunderCommunity.css';

function ThunderCommunity() {

  const navigate = useNavigate();

  const [thunders, setThunders]  = useState([]);
  // const[category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [username, setUsername] = useState("");


  {/* 페이지 네이션 */}
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = thunders.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);


  useEffect(()=>{
    getThunders();
  
  },[])

  /**
   * * Thunder 데이터
   */
     const getThunders= async()=>{
      try{
        const temp = await axios.get("http://localhost:8080/thunder/")
        setThunders(temp.data) ;
  
      }catch(error){
        console.log("번개 이미지 호출 에러: ",error);
      }
    }



   /**
   * * 유저네임/상영관별 호출
   */
  const searchUser=(()=>{
    if(username == ""){
        getThunders()
    }else{
    axios.get("http://localhost:8080/thunder/search/"+ username + "/"+ location)
    .then((res)=>{
        setThunders(res.data)
    })}
    setUsername("")

})

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
      axios.delete("http://localhost:8080/thunder/"+ checkedInputs[i])
      .then((res)=>{
          console.log(res.data)
          window.location.replace("/admin/thunder");
      })
    
   
  }  })
      

  /**
   * * 영화관별 호출
   */
  function changeCinema(e){
    setLocation(e.target.value)
    if(e.target.value == "none"){
      getThunders()
    }else{
      axios.get("http://localhost:8080/thunder/search/"+ e.target.value)
        .then((res)=>{
        setThunders(res.data)
    }) }}



  const changeUsername = (e)=>{
    setUsername(e.target.value)
  }   
  

  return (
    <>
      <section>


              <div className='row align-items-center'>
              <div className='container-fluid32'>

              <div className='row align-items-center'>
                  
                  <div>
                  🔍 <input className='adminThunco_input' type="text" onChange={changeUsername} name="username" placeholder='검색할 유저 아이디' value={username}/>
                    <button  className='adminThunco_btn' onClick={searchUser}>검색</button>
                    <button className='adminThunco_btn' type="button" onClick={deletePost}>삭제</button>
                  </div>

                
                  <select name="location" onChange={changeCinema}>
                        <option value="none">영화관 </option>
                        <option value ="장승배기" name="location">장승배기</option>
                        <option value ="남양주" name="location">남양주</option>
                        <option value ="건대" name="location">건대</option>
                        <option value ="부천" name="location">부천</option>
                        <option value ="가산" name="location">가산</option>
                        <option value ="한강" name="location">한강</option>
                    </select>

                  <table className='table bg-light text-center '>                    
                    {/* 테이블별 헤더 */}
                    <thead >
                      <tr className='text-muted'>
                        <th> #</th>
                        <th>등록자</th>
                        <th> 제목</th>
                        {/* <th> 카테고리</th> */}
                        <th> 영화관</th>
                        <th> 등록 날짜</th>   
                        <th> 상세보기</th>  
                        <th>선택</th>                     
                      </tr>
                    </thead>
                    {/* 내용 */}
                    <tbody>
                      {currentPosts.map((thunder,i)=>(
                        <>
                        <tr>
                          <th>{i+1}</th>
                          <th>{thunder.username}</th>
                          <th>{thunder.title}</th>
                          {/* <th>{thunder.category}</th> */}
                          <th>{thunder.location}</th>
                          <th>{thunder.regdate.substring(0,10)}</th>
                          <th><button type="button" className="btn btn-info btn-sm" 
                                      onClick={(e)=>{
                                         navigate("/thunder/"+thunder.id, {state: thunder})}
                              }>클릭
                              </button>
                          </th>
                          <th>
                            <input type="checkbox" onChange={(e)=>{
                                changeHandler(e.currentTarget.checked, thunder.id)
                              }}
                              checked={checkedInputs.includes(thunder.id) ? true : false}/>
                            </th>
                        </tr>
                        </>
                      ))}
                      
                    </tbody>
                  </table>
                 
                </div>

        </div>
        <Pagination_RV postsPerPage={postsPerPage} totalPosts={thunders.length} currentPage={currentPage}
                               paginate={paginate}></Pagination_RV>
        </div>
      </section>
    </>
  );
}

export default ThunderCommunity;