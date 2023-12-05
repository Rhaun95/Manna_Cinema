import React from "react";

import ThunderGraph from "../components/ThunderGraph";
import DashboardCard from "../components/DashboardCard";
import ThunderCommunity from "../components/ThunderCommunity";
import '../css/ThunderAdmin.css';
import { useNavigate } from "react-router-dom";

const ThunderAdmin=()=>{

  const navigate = useNavigate();


  return(
    <>
    <div className="thunderAdmin_all">
      <div className="thunderAdmin_select">
        <button  className="thunderAdmin_btn" onClick={()=>{
            navigate("/admin/thunder")
          }}>모임 관리
        </button>
        <button  className="thunderAdmin_btn" onClick={()=>{
            navigate("/admin/thundercomments")
          }}>댓글 관리
        </button>
      </div>
      <h1>번개모임</h1>
      <div className="thunderAdmin_container">
        
        <ThunderCommunity/>
        <ThunderGraph/>

      </div>

    </div>
    </>
  )
}

export default ThunderAdmin;