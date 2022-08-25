import '../projectcss/movie.css'
import { Link, NavLink } from 'react-router-dom';

function Header() {

    return(
        <nav  className="navbar navbar-dark bg-dark navbar-expand-lg" >
          <Link to='/' ><img src='https://i.esdrop.com/d/f/8AgqMbQApP/wA6tWxaDO6.png' style={{height:'5vh'}}></img></Link>
           <ul className="navbar-nav">
           <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                페이지 이동 확인탭(사용예시)
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <Link to='/' className='dropdown-item'>메인페이지</Link>
              <Link to='/movie/2' className='dropdown-item'>상세보기 2번</Link>
              <Link to='/insert' className='dropdown-item'>추가하기</Link>
              </div>
            </li>
           <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                영화
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a className="dropdown-item" href="/a">영화1</a>
                <a className="dropdown-item" href="/b">영화2</a>
                <a className="dropdown-item" href="/c">영화3</a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                예매
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a className="dropdown-item" href="/a">예매1</a>
                <a className="dropdown-item" href="/b">예매2</a>
                <a className="dropdown-item" href="/c">예매3</a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                극장
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a className="dropdown-item" href="/a">극장1</a>
                <a className="dropdown-item" href="/b">극장2</a>
                <a className="dropdown-item" href="/c">극장3</a>
              </div>
            </li>
            
  
        
          <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                이벤트
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a className="dropdown-item" href="/a">이벤트1</a>
                <a className="dropdown-item" href="/b">이벤트2</a>
                <a className="dropdown-item" href="/c">이벤트3</a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                스토어
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a className="dropdown-item" href="/a">스토어1</a>
                <a className="dropdown-item" href="/b">스토어2</a>
                <a className="dropdown-item" href="/c">스토어3</a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                혜택
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a className="dropdown-item" href="/a">헤택1</a>
                <a className="dropdown-item" href="/b">혜택2</a>
                <a className="dropdown-item" href="/c">혜택3</a>
              </div>
            </li>
          </ul>
      
      </nav>
    )
}

export default Header;