import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../css/mcomment.css'

function MCommentItem(props){
    const navigate = useNavigate();
    const [items,setItems] =useState([])    
    const {id,title,url,comment,score} = props.item;
    useEffect(() => {
        fetch('http://localhost:8080/movie', {
          method: 'GET',
        })
          .then((res) => res.json())
          .then((res) => {
            setItems(res);
        });          
       }, []);
       
    function movieSiteParam(){ 
    for(let i=0; i<items.length; i++){
        if(items[i].title == title){         
            let link = items[i].movieId   
            return <p type='button'
                    onClick={()=> navigate('/movie/'+ link)}>
                    {title}<p style={{color : "skyblue"}}>(예매 click!)</p></p>
        }
        if(i== items.length-1){
            return <p>{title}<p style={{color:'red'}}>미상영</p></p>
        }                    
      }
    }
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
           <tr className="tbRow">    
             <td>{id}</td>
             <td id="td2">{movieSiteParam()}</td>
             <td style={{color : 'red'}}> -----------------Only 별점(내용 X)-----------------</td>
             <td>{starRender()}</td>
             <td><a href={url}>{title}</a></td>
           </tr>     
          :
          <tr className="tbRow">    
            <td>{id}</td>
            <td id="td2">{movieSiteParam()}</td>
            <td>{comment}</td>
            <td>{starRender()}</td>
            <td><a href={url}>{title}</a></td>
        </tr>         
      }
    </>      
    )    
}
export default MCommentItem;