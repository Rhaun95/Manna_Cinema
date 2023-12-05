import React, { useState, useEffect } from 'react';

import '../../../user/Movie/css/movie.css'
import Sidebar from '../../sidebar/components/Sidebar';
import '../css/AdminHeader.css'
import { Link, useNavigate } from 'react-router-dom';
import SearchControll from '../../../user/Search/components/SearchControll';

const AdminHeader = () => {

  const [page, setPage] = useState([])
  let navigate = useNavigate();
  // sidebar_hide
  useEffect(()=>{ 
      setPage(1);
  },[])

  const [hide,setHide] = useState(true);

  


  return (
   
    <div className='adminHeader'>       
       <Sidebar/>      
      <div>       
        <nav  className="navbar navbar-dark bg-dark navbar-expand-lg adminHeader">     
        <div className='text-light py-2' style={{display: 'inline-block'}} >
          <a className='btn' onClick={()=> navigate('/admin')}>
            <i className="fas fa-home mr-2" style={{fontSize: '20px'}}></i>
          </a>
            <span style={{fontSize: '30px'}}> AdminMode </span> 
        </div>           
        <ul className="navbar-nav" >             
           <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                test
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" >
              <a href='/movie' className='dropdown-item'>영화 페이지</a>
              <a href='/store' className='dropdown-item'>스토어 페이지</a>
              <a href='/movieapi' className='dropdown-item'>실시간 영화 순위 정보</a>
              <a href='/booking' className='dropdown-item'>예매 페이지</a>
              <a href='/seatform' className='dropdown-item'>좌석 정보</a>
              <a href='/basket' className='dropdown-item'>장바구니 정보</a>
              <a href='/payment' className='dropdown-item'>결제? 정보</a>

              </div>
            </li>
           <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                영화
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a href='/movie' className='dropdown-item'>영화 페이지</a>
                <a href='/movieapi' className='dropdown-item'>실시간 영화 순위 정보</a>
                <a href='/mcomment' className='dropdown-item'>네이버 영화 한줄평</a>                
              </div>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                예매
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <Link to='/booking' className='dropdown-item'>예매 페이지</Link>                           
              </div>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                극장
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
               <Link to='/cinema' className='dropdown-item'>상영관 정보</Link>
               <Link to='/cinema/1' className='dropdown-item'>DreamBox 장승배기점</Link>
               <Link to='/cinema/2' className='dropdown-item'>DreamBox 남양점</Link>
               <Link to='/cinema/3' className='dropdown-item'>DreamBox 건대점</Link>
               <Link to='/cinema/4' className='dropdown-item'>DreamBox 가산점</Link>
               <Link to='/cinema/5' className='dropdown-item'>DreamBox 부천점</Link>
               <Link to='/cinema/6' className='dropdown-item'>DreamBox 부산점</Link>                             
              </div>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                스토어
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
               <Link to='/store' className='dropdown-item'>매점</Link>               
              </div>
            </li>

            <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              고객센터
            </a>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <Link to="/board" className="dropdown-item">
                문의게시판
              </Link>
            
            </div>
          </li>

          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              커뮤니티
            </a>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <Link to="/reviewBoard" className="dropdown-item">
                후기게시판
              </Link>
              <Link to="/thunder" className="dropdown-item">
                번개모임
              </Link>
            </div>
          </li>
           
          <li>
            <div style={{position : 'fixed', left : 1, right : 1, top : 1, zIndex : -1}}>
            <SearchControll/>         
            </div>
          </li>                                                         
            </ul>  
          </nav>   
      </div>
    </div> 
  );
};

export default AdminHeader;