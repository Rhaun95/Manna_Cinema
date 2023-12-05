import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function DetailMComment(props){
    const {id,title,url,comment,score,key} = props.item;    
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
    {comment == '' ? 
    <tr>        
        <td> {starRender()}</td>            
        <td style={{color : 'red'}}> -----------------Only 별점(내용 X)-----------------</td>        
    </tr>
    :
    <tr>               
        <td> {starRender()}</td>
        <td> {comment}</td>
    </tr>
    }
    </>
    )
}
export default DetailMComment;

