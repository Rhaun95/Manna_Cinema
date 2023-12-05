import { useState } from "react";
import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function MCommentItem(props){
    const navigate = useNavigate();
    const [items,setItems] =useState([])    
    const {id,title,url,comment,score} = props.item;
  
    function starRender() { 
        if(score  == 10){
         return "⭐⭐⭐⭐⭐"
        }
        else if(score  >= 9){
         return "⭐⭐⭐⭐☆";
        }
        else if(score  >= 8){
         return "⭐⭐⭐⭐";
        }
        else if(score  >= 7){
         return "⭐⭐⭐☆";
        }
        else if(score  >= 6){
         return "⭐⭐⭐";
        }
        else if(score  >= 5){
         return "⭐⭐☆";
        }
        else if(score  >= 4){
         return "⭐⭐";
        }
        else if(score  >= 3){
         return "⭐☆";
        }
        else if(score  >= 2){
         return "⭐";
        }
        else if(score  >= 1){
         return "☆";
        }
        else if(score == 0 ){
         return "최근 후기가 없습니다!"
        }
     }
    return(
        <>
            <tr className="tbRow">    
               <td>{id}</td>
               <td>{title}</td>
               <td>{comment}</td>
               <td>{starRender()}</td>
               <td><a href={url}>{title}</a></td>
               <Button onClick={()=> {                  
                    if(window.confirm("정말 삭제하시겠습니까?")){
                    fetch('http://localhost:8080/mcomment/' + id,{
                        method : 'DELETE',
                    })
                    .then((res)=> res.text())
                    .then((res) =>{
                      window.location.replace('/admin/mcomment')  
                      alert('삭제되었습니다.')                        
                    }).catch((error) => {
                        alert('삭제 실패' + error)
                    })
                   }                                   
                    }}><p style={{color : 'red'}}>Delete</p></Button>
             </tr>     
             
        </>  
    )

    
}
export default MCommentItem;