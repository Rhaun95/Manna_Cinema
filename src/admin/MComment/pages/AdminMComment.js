import { useEffect, useState } from "react";
import MCommentItem from "../components/MCommentItem";
import { Container, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import '../css/adminMcomment.css'

function AdminMComment(){
    let navigate = useNavigate();
    const [mComList,setMCoList] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8080/mcomment', {
          method: 'GET',
        })
          .then((res) => res.json())
          .then((res) => {
            setMCoList(res);
            // console.log(res)

            // console.log(items);
          }); //비동기 함수          
       }, []);           

       console.log(mComList);
           

       return(
        <>
       {sessionStorage.getItem("id") == 'admin' ? 
        <Container className="admin">
          <h1 className="MCTitleAdmin">네이버 한줄평 관리</h1>
        <Table striped bordered hover variant="dark" className="tableCustom">
        <thead>
          <tr className="adminThRow">
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
      </Container> : <>{alert("관리자페이지입니다.")}{navigate('/')}</>
    }
    </>
)



}

export default AdminMComment;