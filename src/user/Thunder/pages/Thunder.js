import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';


import Post from "../components/Post";
import '../css/Thunder.css';
import { useNavigate } from "react-router-dom";
import { faTemperature1 } from '@fortawesome/free-solid-svg-icons';
import onRemove from '../../UserSetting/components/AlertConfirm';

//Card 형식
const Thunder = () => {
    
    const navigate = useNavigate();
    const [thunders, setThunders]  = useState([]);
    
    const userCheck = window.sessionStorage.getItem("id")

    const[inputText, setInputTetxt] = useState({
        location:"",
        keyword:""
    })

    useEffect(()=>{
        getThunders()
    },[])

    const getThunders= async()=>{
        try{
          const temp = await axios.get("http://localhost:8080/thunder/")
          setThunders(temp.data)
          console.log(temp.data)
    
        }catch(error){
          console.log("번개 이미지 호출 에러: ",error);
        }
      }
      
    const changeLocation = (e)=>{
        setInputTetxt({...inputText, location:e.target.value})
        if(e.target.value =="none" || e.target.value=="극장별"){
            getThunders()
        }else{
            axios.get("http://localhost:8080/thunder/search/"+ e.target.value)
            .then((res)=>{
                setThunders(res.data)
            })
        }


    }

    function toMap(e){
        e.preventDefault();
        navigate("/thunderMap");
    }

    function toInsert(e){
        navigate("/thunderInsert");
    }
    
    function notUser(){
        alert("로그인을 해주세요");
    }

                {/* <input type="text" placeholder='검색어를 입력하세요' className='thunderdetailtitle' value={inputText.keyword} name="keyword"/>
                <button type="button" onClick={searchKeyword} className='thunderdetailtitle'>검색</button> */}
    return (

        <>
        <div className="thunder">
            <header className="thunder_header">
                <div className="thunder_header1" style={{margin:"0"}}>번개 모임</div>

                <div className="thunder_header2">지겨운 일상 속에 번개같은 반짝임!</div>
                <div className="thunder_header2">  새로운 만남을 가져보세요 : )</div>
            </header>
            <div>
                <button className='thunderdetailtitle' type="button" onClick={toMap}>지도로 보기</button>
                <select className='thunderdetailtitle' name="location" onChange={changeLocation} value={inputText.location} >
                    <option value="none">극장별</option>
                    <option value="건대" >건대점</option>
                    <option value="남양주">남양주점</option>
                    <option value="장승배기" >장승배기점</option>
                    <option value="가산" >가산점</option>
                    <option value="부천">부천점</option>
                </select>
            
                {!window.sessionStorage.getItem("id")?
                <button className='thunderdetailtitle1' onClick={onRemove}>번개 등록</button>
                :
                <button className='thunderdetailtitle1' onClick={toInsert}>번개 등록</button>
            }
            </div>

            <div className="post_container">
                
                {thunders.map((thunder)=>(
                    <>
                        <div className='temmpp'>
                            <div className="post">
                                <Post thunder={thunder}/>
                            </div>
                            {!userCheck?
                            <button className='join_btn1111' type="button" onClick={onRemove}>상세보기</button>
                                :
                            <button className='join_btn1111' type="button" onClick={(e)=>{
                                    navigate("/thunder/"+thunder.id, {state: thunder})
                                }}>상세보기</button>

                            }
                        </div>
                    </>
                ))}
            </div>
        </div>
        </>
    );
};

export default Thunder;