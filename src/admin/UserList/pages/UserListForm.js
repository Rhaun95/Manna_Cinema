import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Table from 'react-bootstrap/Table';

import '../css/UserList.css'

function UserListForm() {

    const navigate = useNavigate();

    const [userListInfo, setUserListInfo] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/api/userList", {
            method: "GET",
        })
            .then((res) => res.json())
            .then((res) => {            
                setUserListInfo(res)                
            });
    }, []);  

    function DeleteUser(e) {
        e.preventDefault();

        var userId = e.target.value;

        if(window.confirm("회원정보를 삭제하시겠습니까?")){
            fetch('http://localhost:8080/api/admin/' + userId, {
            method: "DELETE",
        }) 
            .then((res) => res.text())
            .then((res) => {
                // console.log(userListInfo[i]);
                window.location.replace('/admin/userListForm')
                alert("삭제완료");
            })
        }        
    }
    
     return (
        <>           
            {}
        <div className="userListFormDiv">      
            <Table striped bordered hover variant="dark" className="userTable" >
                <thead>                   
                     <tr>
                        <th>&nbsp;</th>
                        {userListInfo.map((user) => {
                            return <th className="headerTh"> {user.user_id} </th>;
                         })}
                    </tr>
                </thead>
                <tbody>                
                    <tr>
                        <th>ID</th>
                        {userListInfo.map((user) => {
                            return <th className="bodyTh"> {user.username} </th>;
                         })}                         
                    </tr>
                    <tr>                        
                        <th>닉네임</th>
                        {userListInfo.map((user) => {
                            return <th className="bodyTh"> {user.nickname} </th>;
                         })}
                    </tr>
                    <tr>
                        <th>이메일</th>                        
                        {userListInfo.map((user) => {
                            return <th className="bodyTh"> {user.email} </th>;
                         })}
                    </tr>
                    <tr>
                        <th>전화번호</th>                        
                        {userListInfo.map((user) => {
                            return <th className="bodyTh"> {user.phone} </th>;
                         })}                         
                    </tr>

                    <tr>
                        <th>&nbsp;</th>
                        {userListInfo.map((user) => {
                             return <th className="headerTh"><button value={user.user_id} onClick={DeleteUser}>삭제하기</button></th>;                            
                            })}                         
                    </tr>
                </tbody>
            </Table>           
        </div>
        </>
    )

}

export default UserListForm;