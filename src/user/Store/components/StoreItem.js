import React, {useState} from 'react';
import { Card, ListGroup, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../css/Store.css'
import onRemove from '../../UserSetting/components/AlertConfirm';
import '../moving/alert1s.css';



function StoreItem(props) { 
    const user =sessionStorage.getItem("id")
    const navigate = useNavigate();

    //수현[
    const {id,price,amount,name,type,image} = props.item
    const[basketItem, setBasketItem] = useState({
      user_id: user,
      item_name: name,
      total_amount: 1,
      total_price: price,
      item_image: image,
  })

    function addToBasket(e){
      e.preventDefault();
      props.setToastState(true)
      basketItem.item_name= name;
      getTotal()
      console.log(basketItem);
      axios.post("http://localhost:8080/itembasket/insert",
          basketItem)
          .then(res=>console.log("아이템 장바구니 추가 성공",res.data))
          .catch(err=>console.log("아이템 장바구니 추가 실패", err));
  }

  // toast 알림창의 상태를 저장해 둘 state
  let [toastState, setToastState] = useState(false);

    //체크용 팝업창
    function getTotal(){
      // dispatch(movieBasketActions.getMovieBasket({totalBooking}))
      setToastState(true)
  }


  /** -----------------------------//수현[-------  */ 


    return (
      <div className='cardStore' 
      type="button">

        <Card bg="dark" id='card'>
        <Card.Img onClick={()=>navigate("/store/" + id)} variant="top" src={image} className='cardImage'/>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text className='sht'>            
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush" style={{borderRadius : '30px'}} >
          <ListGroup.Item className='cardText'>가격 : {price}</ListGroup.Item>
          <ListGroup.Item className='cardText'>상품 타입 : {type}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
         
           <Link className='btn btn-secondary' to={"/store/" + id}>상세보기</Link>
           
         
           &nbsp;
           {user?
           <Button className='btn btn-primary' onClick={addToBasket}>장바구니 추가</Button>  :
           <Button onClick={onRemove}  style={{cursor:"pointer"}}>장바구니 추가</Button>}         
        </Card.Body>
      </Card>
      </div>
   
    )
}
export default StoreItem