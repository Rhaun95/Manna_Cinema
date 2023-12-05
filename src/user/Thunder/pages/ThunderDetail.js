import React,{useState,useEffect} from 'react';
import {useLocation, useNavigate, useParams } from 'react-router-dom';
import axios from "axios";

import '../css/ThunderDetail.css'

import ThunderComment from '../components/ThunderComment';
import Tag from '../components/Tag';

import {Form} from "react-bootstrap";
import {IoLogoGoogle} from 'react-icons/io'
import {Map, MapMarker} from "react-kakao-maps-sdk";


const ThunderDetail=()=>{

  const {state} = useLocation();
  const temp = state.tags.substring(0,state.tags.length-1)
  const tagdata = temp.split(",");

  const user =sessionStorage.getItem("id")

  const navigate = useNavigate();
  // console.log(state)

  const {id} = useParams()
  const [listRender, setListRender] = useState(false);
  const [show, setShow]=useState(true)
  const [toggle, setToggle] =useState(true);

  const [comments, setComments] = useState([])
  const [thunderDetail, setThunderDetail] = useState({})
  const [userlist, setUserlist]=useState([])
 
  const [thunderComment, setThunderComment] = useState({
    user_id : user,
    content : "",
    posting_num :id,
  });

  const[likeThunder, setLikeThunder]=useState({
    username: user,
    posting_num :id,

  })

 

useEffect(()=>{
    getDetail();
    getComment(); 
    getUserlist();
    getLikedThunder();
  },[])

  useEffect(()=>{
    getDetail();
    getComment(); 

  },[listRender])

/**
   * *해당 게시글의 정보를 불러온다
   */
 const getDetail=async()=>{
        
  try{
      let temp = await axios.get('http://localhost:8080/thunder/' + id)
      setThunderDetail(temp.data)
     
  }catch(err){
      console.log(err)
  }
}
console.log(id+"번 번개모임 상세 정보: ",thunderDetail)

  /**
   * * 이미 좋아요를 눌렀는지 확인 
   */
  const getLikedThunder=async()=>{
    const temp = await axios.get("http://localhost:8080/likeTh/"+user+"/"+id)
    if(temp.data){
      setShow(false)
      console.log(temp.data)
    }else{
      setShow(true)
    }
  }
 

 /**
   * *해당 게시글 번호와 일치하는 댓글번호들을 불러온다
   */
const getComment=async()=>{
  try{
      let temp = await axios.get('http://localhost:8080/thCo/' +id)
      setComments(temp.data)
  }catch(err){
      console.log(err)
  }
}


  /**
   * *해당 게시글의 채팅 참여자 DB
   */
  const getUserlist=()=>{
    axios.get("http://localhost:8080/chatroom/" + id)
    .then((res)=>{
      // console.log(res)
      setUserlist(res.data);
    })
  }

/**
 * * 댓글 추가
 */
function addComment(e){
  try{
    axios.post("http://localhost:8080/thCo/insert", thunderComment)
    .then((res) => {
      console.log(res.data)
      setListRender(!listRender);
    });

  }catch(err){
    console.log("댓글 추가 오류: ", err);
  }
  thunderComment.content =""

}


/**
 * * 게시글 좋아요 추가
 */
function clickicon1(){
    setShow(!show)
    axios.post("http://localhost:8080/likeTh/insert",  likeThunder)
    .then((res)=>{console.log(id+"번 글을 좋아합니다.")}) 
}

/**
 * * 게시글 좋아요 삭제
 */
function clickicon2(){
    setShow(!show)
    axios.delete("http://localhost:8080/likeTh/"+user+"/"+id)
    .then((res)=>{console.log(id+"번 글을 좋아하지 않습니다.")}) 
}

/**
 * * 댓글 입력칸 값 받아옴
 */
  const commentHandler = (e) => {
  e.preventDefault();
  setThunderComment({
    ...thunderComment,
    content : e.target.value
  })
};


    /**
     * * 번개 정보를 보여줌
     */
    function viewInfo(){
      setToggle(true)
    } 
    /**
     * * 참여자 정보를 보여줌
     */
    function viewAttendee(){
      setToggle(false)
    }

    /**
     * * 채팅방에 입장 한적이 없을 시 참여 목록에 해당 user_id 추가
     * * 기존 참여자일 경우 바로 이동 채팅 창으로 이동
     */
    function joinChat(e){
      const check = userlist.filter((userl)=> userl.username == user)
      console.log( check.length)
      if(check.length== 0){
        axios.post("http://localhost:8080/chatroom", {
          post_id: id,
          username: user,
        }).then((res)=>{
          console.log("chatroom: ",res.data);
          
          alert(user+ " 님 반갑습니다.")
          navigate("/thunderchat/"+id, {state: thunderDetail.title })
  
        })
      }else{
        alert(" 채팅방으로 이동합니다.")
        navigate("/thunderchat/"+id, {state: thunderDetail.title })
      }

      console.log("채팅방에 참여합니다..")
      navigate("/thunderchat/"+id, {state: thunderDetail.title })
    }
    


  return(
    <>
      <div className='thunderDetail_all'>
        <div className='thunderDetail_all2'>

          <div className='topHandler'>
              <div className='topHandler_sub1'>
                <div className='topHandler_sub2' onClick={viewInfo}>번개 정보</div>
              </div>
              <div className='topHandler_sub1'>
                <div className='topHandler_sub2' onClick={viewAttendee}>참여자</div>
              </div>
          </div>

          <div className='thunderDetail_top'>
            <div>
              <img src={thunderDetail.image} width="1000px" height="470px"/>
            </div>
            <div className='thunderDetail_top1'>
              <div>{thunderDetail.title}</div>
              <div>{thunderDetail.category}</div>
            </div>
          </div>
          
        {toggle?
          <div className='thunderDetail'>
            <div className='thunderDetailregdate'>
              <div>개설: {thunderDetail.regdate}</div>
              <div>등록자: {thunderDetail.username}</div>
            </div>
            
            {
                show ?  //안보임
              <div className='thunderCoIcon_box1' onClick={clickicon1}>  
              
                  <div> 
                      <img className='thunderCoIcon1' width="40px"  src='https://cdn-icons-png.flaticon.com/512/711/711451.png'/>
                  </div> 
              </div>
              :     //보임
              <div className='thunderCoIcon_box1' onClick={clickicon2}>  
                  
                  <div>  
                      <img className='thunderCoIcon1' width="40px"  src='https://cdn-icons-png.flaticon.com/512/7088/7088368.png'/>
                  </div>
              </div>
                }
           
          <div className='thunderDetail_content'>
            <div>
                <div>
                {state.content.split("n").map((line) => { //this.props.data.content: 내용
                  return (
                    <span>
                      {line}
                      <br />
                    </span>
                  );
                })}
                </div>
            </div>
          </div>
          <div className='thunderdetail_detail'>
            <div className='thunderdetail_detail_detail'>
                <img src='https://cdn-icons-png.flaticon.com/128/3371/3371476.png' width="22px"/> &nbsp;시간: {state.meetingtime}
              </div>
              <div className='thunderdetail_detail_detail'>
                <img src='https://cdn-icons-png.flaticon.com/128/535/535137.png' width="22px"/> &nbsp;위치: {thunderDetail.address} 
              </div>
              <div className='thunderdetail_detail_detail'>
                <img src='https://cdn-icons-png.flaticon.com/128/3163/3163508.png'  width="22px"/> &nbsp;영화관: {thunderDetail.location}
              </div>
          </div>

          <div className='thudnerDetail_tagbox'>
                {tagdata.map((tag)=>(
                  <>
                           {
                        tag =="#20대"?<Tag twenty>{tag}</Tag>:
                         (tag =="#30대"?<Tag thirdty>{tag}</Tag>:
                          (tag =="#조조"?<Tag early>{tag}</Tag>:
                           (tag=="#코미디"?<Tag comedy>{tag}</Tag>:
                            (tag=="#로맨스"?<Tag romance>{tag}</Tag>:
                             (tag=="#심야"?<Tag night>{tag}</Tag>:
                              (tag=="#액션"?<Tag action>{tag}</Tag>:
                               (tag=="#공포"?<Tag horror>{tag}</Tag>:
                                (tag=="#스릴러"?<Tag thriller>{tag}</Tag>:
                                 (tag=="#40대"?<Tag forthy>{tag}</Tag>:
                                  (tag=="#저녁"?<Tag evening>{tag}</Tag>:
                                    <Tag twenty>{tag}</Tag>)
                           )))))))))}
                  </>
                  ))}
            </div>    
          </div> 

        :

          <div className='thunderDetail_content2'>
            <div className='userlist_box2'>
                <div className='userlist2'>
                  {
                    userlist.map((user)=>(
                      <>
                      <div className='joinedUser_info2'>
                        <div>
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtmgoFZ6lN3qk5_BC6iFg-vqm8ycsDomK9CQ&usqp=CAU" alt=''
                          width="50px" height="50px" style={{borderRadius:"45%"}}/>
                        </div>
                        <div>{user.username}</div>
                      </div>
                      </>
                  ))}
              </div>
            </div>
          </div> 
        }

          

          <div className='thunderDetail_bottom'>
              <button className='detail_join_btn' onClick={joinChat}>채팅 참여하기</button>
          </div> 

        <div className='bbbototom'  style={{heigth:"fit-content"}}>
            <input className='addComment' type="texy" placeholder='   댓글을 달아보세요' name="thunderComment" onChange={commentHandler} value={thunderComment.content} />
            <button className='addComment_btn'  type='button' onClick={addComment}>등록</button>
      
          {comments.map((comment)=>(
            <>
              <ThunderComment comment={comment} getComment={getComment}   getDetail= {getDetail} />
            </>
            ))}
        </div>
       </div>
      </div> 
      
    </>
  )
}


export default ThunderDetail;