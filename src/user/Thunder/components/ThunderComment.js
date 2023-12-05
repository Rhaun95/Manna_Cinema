import axios from 'axios';
import React, {useEffect, useState} from 'react';
import '../css/ThunderComment.css';

function ThunderComment(props) {

    // const [location,setLocation] =useState('')
    //하나의 댓글 정보
    const {id, user_id, content, regDate, posting_num} = props.comment;

    
    const [show, setShow]=useState(false)
    const [toggle, setToggle]= useState(true);

    // 업데이트 하냐 안하냐
    const [updating, setUpdating] = useState(false);

    const [inputText, setInputText]= useState("");

    const [newComment, setNewComment]=useState({
        user_id: "Lee",
        content : inputText,
        posting_num: id

    })

    const [status, setStatus] = useState(0);
    
   
    const user ={
        username: sessionStorage.getItem("id"),
        uid :5040,
    }

    const data={
        uid: user.uid,
        cid: id
    }

    useEffect(()=>{
        getCheck();
    },[])
   
    useEffect(()=>{
       props.getComment()
    },[toggle])


    /**
     * * 모든 좋아요 눌린 댓글들 DB에서 user 이름과 댓글 아이디로 필요한 댓글들의 
     */
    const getCheck = async()=>{
      axios.get("http://localhost:8080/likeCo/" + data.uid+"/"+ data.cid)
        .then(res=>{
                if(res.data!== null){
                    setStatus(res.data.status)
                }else{
                    console.log(res.data)
            }
        })
    }

    function changeValue(e){
        setNewComment({...newComment,
            content: e.target.value});
            
    }
 
    /**
     * * 댓글 좋아요
     */
    function clickicon(){
        try{
            axios.post("http://localhost:8080/likeCo/insert", data)
            .then(res=>console.log(user_id +"이(가) "+ data.cid+"번 댓글을 좋아합니다."))
        }catch(err){
            console.log(err)
        }
        setShow(!show)

    }

    /**
     * * 댓글 좋아요 취소
     */
    function deleteIcon(){
        if(show===true || status===1){
            setShow(false)
            setStatus(0)
            axios.delete("http://localhost:8080/likeCo/" + data.uid+"/"+ data.cid)
            .then(res=>{
                console.log(user_id +"이(가) "+ data.cid+"번 댓글을 더이상 좋아하지 않습니다.")
            })
        }
    }

    const saveText=async()=>{
        let temp = await axios.put("http://localhost:8080/thCo/" + id, newComment)
        
        setUpdating(!updating)
        setToggle(!toggle)
     }


    return (
        <>     
        <div className='comment_box'>
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtmgoFZ6lN3qk5_BC6iFg-vqm8ycsDomK9CQ&usqp=CAU" alt=''
                width="50px" height="50px" style={{borderRadius:"45%"}}/>
            </div>
            <div className='comment_content'>
                {/* <div> {id}</div> */}
                <div> {user_id}</div>

                {/* 수정하냐마냐 */}
                {
                    updating? <input type='text' value={newComment.content} style={{padding:"7px", borderBottom:"1px solid lightgray"}}  onChange={changeValue} placeholder={content} />
                    : <div>{content}</div>
                }

                <div  className='comment_Co_Bo'>
                    <div className='thunderCoIcon_box' >    
                        {/* 채우기없는 이미지 */}
                        <img className='thunderCoIcon' width="20px"  onClick={clickicon} src='https://cdn-icons-png.flaticon.com/512/656/656944.png'/>
                        {/* 누르면채워짐 -> show = true */}
                        {status===1||show?<img className='thunderCoIcon' width="20px"  onClick={deleteIcon} src='https://cdn-icons-png.flaticon.com/512/656/656843.png'/>
                            :  <div/>}
                        <div className='coUpdate_btn1' onClick={()=>setUpdating(!updating)}>수정</div> 
                        <div className='coUpdate_btn2' onClick={saveText}>저장</div> 
                    </div>  
                            
                        <div> {regDate.slice(0,10)}</div>
                </div>
            </div>
        </div>
        </>
    );


}

export default ThunderComment;