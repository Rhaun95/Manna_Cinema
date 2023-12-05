import '../css/chat.css'

function ChatItem(props) {
    const {user_id, context,tchat_id,time} = props.item;

    return (   
      //채팅(본인)
      <div className="chatRoom">
      {sessionStorage.getItem("id") == user_id ?
      <span className='chatArea'>
      <div className='chatMe'>
      <span>{context}</span>
      </div>
      <span id='timeMe'>{time}</span>
      </span>
      :
      //채팅(본인 외 유저)
      <>
      <span className='chatArea'>
      <div id='userId'>{user_id} : </div>
      <div className='chatUser'>
      <span>{context}</span>
      </div>
      <span id='timeUser'> {time}</span>
      </span>
      </>
      }
   </div>   
    )
}
export default ChatItem
