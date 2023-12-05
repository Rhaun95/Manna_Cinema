import { useState } from 'react';
import { Link, resolvePath } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../css/Login.css'
import katalkIcon from '../icons/katalk.png';


function LoginForm() {
    let navigate = useNavigate(); 
     // 로그인 폼에 입력값 담는 곳
    const [login,setLogin] = useState({
      username : '',
      password : ''
  }) 
    //회원정보 담을 곳
    const [userInfo, setUserInfo] = useState({
    userId : '',
    username :'',
    password : '',
    nickname : '',      
    activated : '',
    authorities : ''})

     /**
     * * 카톡 로그인 KEYS
     */
      const REST_API_KEY = '896869f978ea76f2bf8eea3722a7fdce';
      const REDIRECT_URI = 'http://localhost:3000/auth/kakao/callback';
      const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  
      //카톡 Token
      const [tokenstore, setTokenStore] = useState({});
  
  
      const[reload, setReload]=useState(true);
  
  
      //카톡 유저정보 담기
      const[Kuser,setKUser]=useState({});
  
      const code= new URL(window.location.href).searchParams.get('code');

  /**-------수현----------------------------------------- */    
      /**
       * * 카톡 로그인
       */
      function katalklogin(){
          window.location.replace(KAKAO_AUTH_URL)
  
      }
  
      /**
       * * 카톡 토큰
       */
      const getToken=()=>{
          const forToken = {
              grant_type: "authorization_code",
              client_id: REST_API_KEY,
              redirect_uri: REDIRECT_URI,
              code: code,
          };
  
          //토큰 변환
          const toQueryString = Object.keys(forToken)
              .map((k) =>  encodeURIComponent(k) + '=' + encodeURI(forToken[k]))
              .join('&');
  
          try {
              // access token 가져오기
              fetch("https://kauth.kakao.com/oauth/token", {
                  method: 'POST',
                  headers: {
                      'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
                  },
                  body: toQueryString,
              })
                  .then((res) => res.json())
                  .then((res) => {
                      window.Kakao.Auth.setAccessToken(res.access_token);
                      getProfile()
                  });
          } catch (err) {
              console.log(err);
          }
      }
  
      /**
       * * 유저정보 가져오기
       */
      const getProfile = async () => {
  
          try {
              // Kakao SDK API를 이용해 사용자 정보 획득
              await window.Kakao.API.request({
                  url: '/v2/user/me',
              }).then((res)=>{
  
                  sessionStorage.setItem("id",res.kakao_account.profile.nickname)
                  sessionStorage.setItem("nickname",res.kakao_account.profile.nickname)
                  setReload(!reload)
                  console.log(res)
              })
  
          } catch (err) {
              console.log(err);
          }
      };

  /**-------수현----------------------------------------- */    

      async function f(){
        let abc='';

        fetch('http://localhost:8080/api/' + sessionStorage.getItem("id") , {
        method : 'GET', 
        headers : {
        Authorization : sessionStorage.getItem("access_token")
      }
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        setUserInfo(res);        
        // console.log('유저정보')
        // console.log(userInfo); 
        // abc=res;           
        // console.log(abc)
      })
      return abc
      
      }

  useEffect(() => {
    f()
    console.log('이후값')
    console.log(userInfo)
    getToken();
    getProfile();
    },[]);
  
    function ChangeValue(e) {
      setLogin({
          ...login,
          [e.target.name] : e.target.value,
      });
    }
  
    function submitLogin(e){
      e.preventDefault();  
      fetch('http://localhost:8080/api/authenticate', {
          method:'POST',
          headers: {
              'Content-Type': 'application/json; charset=utf-8',
            },
          body: JSON.stringify(login), //JS Object를 JSON으로 변경해서 던진다            
      })
      .then((res) => res.json())
      .then((res) => {
        if (res.token !== undefined) {        
          sessionStorage.setItem('access-token', res.token)        
          sessionStorage.setItem('id', login.username)                    
          window.location.replace('/');
                    
        } else {
          alert('로그인에 실패하였습니다');
        }
       });
      }

      //회원탈퇴
      function Withdrawal(){                
        if(window.confirm("확인을 누르면 회원정보가 삭제됩니다")){
          fetch('http://localhost:8080/api/user/' + sessionStorage.getItem('id'), {
            method: "DELETE",
        }) 
            .then((res) => res.text())
            .then((res) => {
                // console.log(sessionStorage.getItem('id'));                
                alert("삭제완료");
                window.location.replace('/')      
                sessionStorage.clear();   
                // Logout();
            })
        }
      }          
  
      function Logout(){        
        // Kakao.Auth.logout()
        if(sessionStorage.getItem("id") !== null ){      
          fetch('http://localhost:8080/api/user', {
            method : 'GET',
            headers : {
              Authorization : sessionStorage.clear()
            }
          })
            .then((res) => res.json())
            .then((res) => {
              setUserInfo(  
              {userId : '',
              username :'',
              password : '',
              nickname : '',      
              activated : '',
              authorities : ''})
              // Kakao.Auth.logout()
            sessionStorage.clear();  
            })                     
          window.location.replace('/')                   
          }      
          
        }

  return (
    <>
    {        
    sessionStorage.getItem("id") === null ?             
        <div className='loginForm'>        
        <Form onSubmit={submitLogin} style={{display : 'flex',marginLeft : '-14em'}} >
          <Form.Group className="" controlId="form" style={{display : 'flex',}}>
            <Form.Label style={{margin : '1.5em 1em 0 0'}}>ID </Form.Label>
            <Form.Control
              style={{width : '10em',margin : '1em 1em 0 0'}}
              type="text"
              placeholder="Enter ID"
              onChange={ChangeValue}
              name="username"
            />
          </Form.Group>
           <Form.Group className="" controlId="form" style={{display : 'flex'}}>
            <Form.Label style={{margin : '1.5em 1em 0 0'}}>PW </Form.Label>
            <Form.Control
              style={{width : '10em',margin : '1em 1em 0 0'}}
              type="password"
              placeholder="Enter PASSWORD"
              onChange={ChangeValue}
              name="password"
            />                   
          <Button 
          variant="outline-info"
          type="submit"
          className='mr-2'
          style={{margin : '1em 1em 0 0 ',}}>로그인</Button>          
          <Button          
          onClick={katalklogin} 
          variant="outline-warning"
          style={{margin : '1em 1em 0 0 '}}>카카오 로그인</Button>
          <Button variant="outline-success"
          type="button" 
          onClick={()=>navigate('/register')}
          style={{margin : '1em 1em 0 0 ',}}>회원가입</Button>
          </Form.Group>
          </Form>
          </div>       
          : 
          <div className='loginSucess' style={{display : 'flex'}}>
            <div style={{display : 'flex',margin : '1em 1em 0 0'}}>
          <h4 className='mr-3'> ID : {sessionStorage.getItem("id")}</h4>          
          <h4>닉네임 : {sessionStorage.getItem("nickname")?sessionStorage.getItem("nickname"):userInfo.nickname}</h4>
          <ul className="navbar-nav ">             
             <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle ml-3" 
                href="#" id="navbarDropdownMenuLink" 
                data-toggle="dropdown" 
                aria-haspopup="true" 
                aria-expanded="false"
                style={{display : 'flex'}}>
                마이페이지
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" >            
                <Link to='/basket' className='dropdown-item'>장바구니</Link>                
                <Link to="/movieBookingBoard" className="dropdown-item">예매내역</Link>              
                <Link to='/payment/detailsPayment' className='dropdown-item'>결제내역</Link>
                <Link to="/oneOnOne" className="dropdown-item">나의 문의 내역</Link>               
                <Link to='/userModify' className='dropdown-item'>개인정보수정</Link>              
                <button style={{height : '2em'}} className='dropdown-item' onClick={Withdrawal} 
                type="submit" variant="primary">회원탈퇴</button>                   
                <button 
                style={{height : '3em'}}
                className='dropdown-item'
                onClick={Logout} 
                type="submit" 
                variant="primary">로그아웃</button>
                </div>
              </li>
            </ul>
         

          {sessionStorage.getItem('id')=='admin' ?
          <>
          <Button 
          style={{height : '3em'}}
          onClick={()=> navigate('/admin')} 
          type="button" 
          variant="danger" 
          className='ml-3'>관리자</Button>
          </> : <></>}          
          </div>    
          </div>                   
        }
        
      </>
  )
}

export default LoginForm;