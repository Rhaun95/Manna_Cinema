import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import '../css/register.css'


function Register(props) {

  const navigate = useNavigate();      

  const dateNow = new Date();
  const today = dateNow.toISOString().slice(0, 10);
  

  const [login,setLogin] = useState({
    username : '',
    password : '',
    nickname : '',
    email : '',
    code: '',
    birth : '',
    phone : '',
    date : today, 
  })

  function ChangeValue(e) {
    setLogin({
      ...login,
      [e.target.name] : e.target.value,
    });
    // console.log(login)    
  }    


  //Id체크
  const [idCheck, setIdCheck] = useState('true');

  function IdCheck(e){
    e.preventDefault();
  
    fetch('http://localhost:8080/sign/check/' + login.username, {
          })
          .then((res) => res.json())         
          .then((res) => {      
              if(res === 200){              
                alert("사용가능한 아이디입니다"); //백앤드 보낸 데이터 200일때 true           
                setIdCheck(true);
              } else if(res === 400){
                // alert("이미 사용중인 아이디입니다.")
                setIdCheck(false);
              } 
            })
   }

   //pw체크
   const [pw,setPw] = useState('')

   function PwCheck(e){
    setPw(
      e.target.value,
    )
  }

  function keyCheck(e){
    e.preventDefault();
    // console.log("authcode:")
    // console.log(authcode.authcode)

    if(login.code === authcode){
      alert("인증번호 확인")
      console.log("인증번호 확인")
      console.log(login.code)
      console.log(authcode)      
      setEmailCheck(true)
    }else{
      alert("다시확인해 주세요")
      console.log("다시확인해주세요")
      console.log(login.code)
      console.log(authcode)
    }
  }
  
  //인증코드(메일발송)
  const [authcode, setAuthCode] = useState('') 

  //인증 코드 체크
  const [emailCheck, setEmailCheck] = useState(false);  

  //이메일 인증번호 체크
  function codeSend(e){
    e.preventDefault();

    fetch('http://localhost:8080/login/emailCode/' + login.email, {  
    })
    .then((res) => res.text())
    .then((res) => {
      alert("메일로 발송된 인증번호 확인해 주세요")
      setAuthCode(res)  
      console.log("인증번호 값")
      console.log(res)
    })
  }

  //이메일 인증번호 체크 함수
  function keyCheck(e){
    e.preventDefault();

    if(login.code === authcode){
      alert("인증번호 확인")
      console.log("인증번호 확인")
      console.log(login.code)
      console.log(authcode)      
      setEmailCheck(true)
    }else{
      alert("다시확인해 주세요")
      console.log("다시확인해주세요")
      console.log(login.code)
      console.log(authcode)
    }
  }

 

  //Submit
  function submitItem(e){    
    e.preventDefault();
 
    if(idCheck == true){
      fetch('http://localhost:8080/api/signup', {
        method:'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',             
        },
        body: JSON.stringify(login), //JS Object를 JSON으로 변경해서 던진다
      })
        .then((res) => res.json())
        .then((res) => { 
          if(login.password !== pw) {
            alert("비밀번호와 비밀번호 확인이 일치하지 않습니다")                     
          }else{
            alert("회원가입 완료")
            navigate("/")
          }
        })         
    }else{
      alert("아이디 중복체크 확인하세요")
    } 
  }

  return (
    <div className='regiMain'>
      <section className='regiSize'>
            <h1> 회원가입 </h1>
            <form onSubmit={submitItem} > 

            {/* 아이디 체크 */}
            {idCheck?  
            <div className='int-area '>
              <input type="text" name="username" onChange={ChangeValue} id="id"
              autoComplete='off' required/>
              <label htmlFor='id'>Id</label>                        
              <button className="btn btn-none mb-3 id_check" onClick={IdCheck}>중복확인</button>
            </div>          
            :
            <div className='int-area ' >
                <input type="text" name="username" onChange={ChangeValue} id="id"
                autoComplete='off' required/>
                <label style={{color:'red'}}  htmlFor='id'>일치하는 아이디가 있습니다</label>                 
                <button className="btn btn-none mb-3 id_check" onClick={IdCheck}>중복확인</button>
            </div>
            }
          
            <div className='int-area'>
              <input type="password" name="password" onChange={ChangeValue} id="pw"
              autoComplete='off' required/>
              <label htmlFor='pw'>Password</label>
            </div>

            <div className='int-area'>
              <input type="password" name="password_Check" onChange={PwCheck} id="pwCheck"
              autoComplete='off' required/>
              <label htmlFor='pwCheck'>PasswordCheck</label>
            </div>

            <div className='int-area '>
              <input type="text" name="nickname" onChange={ChangeValue} id="nickname"
              autoComplete='off' required/>
              <label htmlFor='nickname'>Nickname</label>                                      
            </div> 

            <div className='int-area '>
              <input type="text" name="email" onChange={ChangeValue} id="email"
              autoComplete='off' required/>
              <label htmlFor='email'>Email</label>     
              <button className="btn btn-none mb-3 id_check" onClick={codeSend}>발송</button>                                 
            </div>      

            <div className='int-area '>
              <input type="text" name="code" onChange={ChangeValue} id="emailCheck"
              autoComplete='off' required/>
              <label htmlFor='emailCheck'>인증번호를 입력하세요</label>      
              <button className="btn btn-none mb-3 id_check" onClick={keyCheck}>인증번호 확인</button>                                
            </div>    

            <div className='int-area '>
              <input type="text" name="birth" onChange={ChangeValue} id="birth"
              autoComplete='off' required/>
              <label htmlFor='birth'>Birth</label>                                      
            </div> 

            <div className='int-area '>
              <input type="text" name="phone" onChange={ChangeValue} id="phone"
              autoComplete='off' required/>
              <label htmlFor='phone'>Phone</label>                                      
            </div> 
            
            <div className='btn-area' id='btn'>
              <button type='submit'>회원가입</button>
            </div>

            

        </form>
        
          
        
      </section>
    </div>
  );
}

export default Register;