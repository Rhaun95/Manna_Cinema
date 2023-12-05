import React, { useEffect, useState} from 'react';
import { useNavigate , Redirect } from "react-router-dom";
import '../../../projectCSS/movie.css'
import '../../../projectCSS/adminHome.css';
import ExcelPOI from '../../Excel/components/ExcelPOI';
import MovieApiGraph from '../../ApiMovie/components/MovieApiGraph';
import Sidebar from '../../sidebar/components/Sidebar';
import AdminGraph from '../../Thunder/components/ThunderGraph';


function AdminHomePage() {
  const navigate = useNavigate();    
  return (    
    <>
    {sessionStorage.getItem("id") == 'admin' ?
    <div>                  
      <h1 className="col-xl-10 col-lg-9 col-md-8 ml-auto" >         
        <a href="/adminHome" style={{color : 'inherit'}}>DashBoard</a>     
      </h1>  
      <ExcelPOI/>      
      <MovieApiGraph/>
      <Sidebar/>
          
    

    </div> :           
    <div>
      {window.location.replace('/')}
      관리자페이지입니다.
    </div> 
    }
 </>  
 );
};

export default AdminHomePage;