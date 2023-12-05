import React from 'react';

import '../css/FindIdPw.css';

function FindIdPw(props) {

  function IdFind(){

  }

  function PwFind(){
    
  }
  

  return (
    <div className='pageSize'>
      <div className='tab'>
        <ul className='tabnav'>
          <li><a onClick={IdFind}>아이디 찾기</a></li>
          <li><a onClick={PwFind}>비밀번호 찾기</a></li>
        </ul>      
        <div className='tabcontent'>
          <div id='tab01'>아이디 찾기</div>
          <div id='tab02'>비밀번호 찾기</div>
        </div>
      </div>      
    </div>
  );
}

export default FindIdPw;