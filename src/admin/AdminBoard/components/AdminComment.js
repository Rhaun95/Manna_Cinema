import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import moment from 'moment';
import axios from 'axios'


// import ReviewCommentForm from '../components/ReviewCommentForm';
// import axios from "axios";

const AdminComment=()=> {
    const {id} = useParams();


    const navigate = useNavigate();
    const [comments, setComments] = useState([]);

console.log("AmdinComment: ", id)


//등록 비교
let [toggle, setToggle]= useState(true);
         
//수정/저장 비교
let[checkData, setCheckData] = useState(true)


    // const id = props.id
    const nowTime = moment().format('YYYY-MM-DD HH:mm:ss');


    const [item, setItem] = useState({
        id: id,
        title:"",
        regDate:  nowTime.toString(),
        type:'예매문의',
        user_id: sessionStorage.getItem("id"),
        review_id: 0
    })

    console.log(sessionStorage.getItem("id"))
    console.log(comments)



    useEffect(() => {
        getCommentData()
        getCheck()

    }, []);


    useEffect(() => {
        getCommentData()
    }, [toggle]);
 
    /**
     * *답변이 이미 존재하는지 확인
     * ?존재 하면 checkData == false
     * */
    function getCheck(){
        if(comments.length <0){
            setToggle(true)
        }else{
            setToggle(false);
        }
    }
    console.log("checkData: ", checkData)
    console.log("item: ", item)

/**
 * * 답변 받아오기 -- 어차피 하나임
 */
    function getCommentData(){
        fetch('http://localhost:8080/Co/comment/' + id)

        .then((res) => res.json())
        .then((res) => {
            setComments(res)
        
        });
    }
    console.log("comments: ", comments)


    // 어차피 어드민 답변 1개
    /**
     * * 답변 등록 -> item
     */
    const addReviewComment=()=>{
        axios.post("http://localhost:8080/Co/insertComment", item )
            .then((res)=>{
                setComments(res.data)
                console.log("추가 성공 여부: ", comments)
                setToggle(!toggle)
            })
    }
    console.log(item)

    const changeValue = (e) => {
        setItem({
            ...item,
            content : e.target.value
        })
        console.log(item)
    }

   
    function throwalert(){
        alert("더이상 댓글을 작성할 수 없습니다.")

    }

  //수정모드로
    function updateComment(){
        setCheckData(false);
        console.log("수정누름")
    }

  //수정한 글 저장
    function save(){
      
        console.log("저장누름")
        axios.put("http://localhost:8080/Co/update/"+ comments.posting_num, item)
            .then((res)=>{
                if(res.data ==1){
                    setComments(item)
                    alert("답변 수정 성공")
                    setCheckData(true);
                }else{
                    alert("답변 수정 실패")
                    setCheckData(true);
                }
            })
        

    }


    return(
        <>
            <div className="container_comment_board">
                <div>
                    <div>답변</div>
                </div>
                <div className='comment_box_board'>
                    <div className='comment_box_board'>
                    
                        <div> {comments.user_id}</div>
                        <div> {comments.title}</div>
                        <div> {comments.regDate}</div>
                    </div>
                    

                    <div>
                        {checkData?
                            <div>{comments.content}</div>
                            :
                            <input type="text" value={item.content}    onChange={changeValue}   placeholder={comments.content}      />
                        }
                    </div>

                   
                    
                    <div style={{marginLeft:"100px"}}>
                            {/* 수정을 누르면 checkData(false)*/}
                                {checkData ?
                                    <button className="register_button" type="button" onClick={updateComment} >수정</button>
                                    :
                                    <button className="register_button" type="button" onClick={save} >저장</button>
                            }
                    </div>





                </div>
                        
                <div style={{marginTop:"100px"}}>

            <div className="commentForm_all50">
                
                <div className="commentForm_user_id">{item.user_id}</div>

                <textarea className="commentForm_content50" cols="70" rows="3"  name="content" id="comment " placeholder="답변을 남겨보세요"
                onChange={changeValue} value={item.content}/>

             {/* 등록처음일때(true)*/}
                {!toggle? 
                <button className="register_button50" type="button" onClick={addReviewComment}>등록</button>
                   :  
                    <button className="register_button50" type="button" onClick={throwalert} >등록</button> 
                } 
            </div>
        </div>
    </div>      
          
        </>
    );

}

export default AdminComment;