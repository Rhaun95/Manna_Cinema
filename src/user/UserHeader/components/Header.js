import { Link, useNavigate } from 'react-router-dom';
import SearchControll from '../../Search/components/SearchControll';
import onRemove from '../../UserSetting/components/AlertConfirm';
import '../css/Header.css'




function Header() {

    return(
      <div className='header'>
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg header">
            <Link to='/' className='' style={{top : 1, }}><img src='https://i.esdrop.com/d/f/8AgqMbQApP/r99SKL2BvA.jpg' style={{height:'8vh',}}></img></Link>          
           <ul className="navbar-nav" >             
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
                {sessionStorage.getItem("id")?
              <Link to='/booking' className='dropdown-item'>예매 페이지</Link> :                          
              <div onClick={onRemove} className='dropdown-item' style={{cursor:"pointer"}}>예매 페이지</div>}                           
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
                공지 및 문의
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
              {sessionStorage.getItem("id")?
              <Link to="/bookMark" className="dropdown-item"> 북마크 목록 </Link>:
              <div onClick={onRemove} className='dropdown-item' style={{cursor:"pointer"}}>북마크 목록</div>}          
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
    )
          }

export default Header;