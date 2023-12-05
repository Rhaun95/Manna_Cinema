import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../../projectCSS/Login.css'
import 'bootstrap/dist/css/bootstrap.css';



const AdminLoginPage = () => {
  const navigate = useNavigate();      

  // navigate("/")
  const [login,setLogin] = useState({
    username : '',
    password : '',
  },[])
  
  function ChangeValue(e) {
    setLogin({
      ...login,
      [e.target.name] : e.target.value,
    });
  }  
    
  const [check, setCheck] = useState(false);   //로그인 상태 여부
  
  function onCheck(res){
    if(login.username == '' || login.password == ''){
      setCheck(false);      

    }else{
      setCheck(!check);
    }    
  }

  function onBack(){
    if(login.username == '' || login.password == ''){
      setCheck(false);

    } 
  }  

  const [thisToken, setThisToken] = useState('');
  
  
  function submitItem(e){
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
                 localStorage.setItem('access-token', res.token)
                  setLogin(login);    
                  setCheck(check);
                  // console.log(res)                                   
                  // navigate("/header", {state: {login,res,check}}) // 로그인 완료 시 admin 페이지 이동 = 성공
                  navigate("/adminHome", {state: {login,res,check}})    

              } else {
                  alert('로그인 실패하였습니다');
              }              
          });
  }
  return (
    <div  className="text-center">      
      <main className="form-signin w-100 m-auto">

        <form onSubmit={submitItem} >          
          <h1 className="h3 mb-3 fw-normal">
          <a className="btn nav-link " onClick={onBack} id="navbarDropdownMenuLink" >              
                로그인
          </a> 
            {/* <Link to="/" type="btn" onClick={onCheck} className="nav-link">
              로그인  
            </Link>   */}
          </h1>

          <div className="form-floating">
            <input type="text" className="form-control" id="floatingInput" placeholder="id" onChange={ChangeValue} name="username" />            
            <label >ID </label>
          </div>

          <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password"  onChange={ChangeValue} name="password"/>            
            <label >Password</label>
          </div>          
         
          <button onClick={onCheck} className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>          
        </form>

      </main>
    </div>
  );
};

export default AdminLoginPage;