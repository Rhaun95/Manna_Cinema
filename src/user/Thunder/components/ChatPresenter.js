import * as React from "react";
import { Button, Input } from "antd";
import '../css/ChatPresenter.css';


 const ChatPresenter = (props)=>{
  const { contents,
    message,
    username,
    setMessage,
    setUsername,
    handleEnter,} = props

  return (
    <div className={"chat-box"}>
      <div className='header'>
       해당 코테고리 별 출력 : 
        <Input
          style={{flex : 1}}
          value={username}
          onChange={e=>setUsername(e.target.value)}
        />
      </div>
      <div className={"contents"}>
        {contents.map((message) => (
          <div> {message.username} : {message.content} </div>
        ))}
      </div>
      <div>
        <Input.Search
          placeholder="input your messages..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onSearch={(value) => handleEnter(username,value)}
          enterButton={"Enter"}
        />
      </div>
    </div>
  );
};

export default ChatPresenter;