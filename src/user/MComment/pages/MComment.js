import { useEffect, useState } from "react";
import MCommentItem from "../components/MCommentItem";
import { Table } from "react-bootstrap";
import '../css/mcomment.css'

function MComment(props){    
    const [mComList,setMCoList] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8080/mcomment', {
          method: 'GET',
        })
          .then((res) => res.json())
          .then((res) => {
            setMCoList(res);
          }); 
       }, []);                      
       
       return(
        <div>
          <h1 className="MCTitle">Naver 영화 한줄평 및 별점</h1>
        <Table striped bordered hover variant="dark" className="tableCustom">
        <thead>
          <tr className="thRow">
            <th>No</th>
            <th>영화</th>            
            <th>한줄평</th>            
            <th>별점</th>
            <th>네이버 링크</th>
          </tr>
        </thead>
        <tbody>
        {mComList.map((item) => (
              <MCommentItem item={item} key={item.key}/>
            ))}
        </tbody>
      </Table>              
      </div>
       )
}

export default MComment;