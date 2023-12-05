import React, {useState} from 'react';
import { Card, ListGroup, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../css/HomeStoreItem.css';

function StoreItem(props) { 
    const navigate = useNavigate();
  
  const user =sessionStorage.getItem("id")


  let value = props.storeValue;
    console.log(value)

  console.log(value)
    //수현[
    const {id,price,amount,name,type,image} = props.item
    const[basketItem, setBasketItem] = useState({
      user_id:user,
      item_name: name,
      total_amount: amount,
      total_price: price,
      item_image: image,
  })

    function addToBasket(e){
      e.preventDefault();
      setBasketItem(props.item);
      console.log(basketItem);
      axios.post("http://localhost:8080/itembasket/insert",
          basketItem)
          .then(res=>console.log("아이템 장바구니 추가 성공",res.data))
          .catch(err=>console.log("아이템 장바구니 추가 실패", err));
  }
 //]수현    



    return (
      <div className='home_cardStore' style={{transform:`translateX(${value}%)`}}>
        <div className='home_cardStore_content'>
        <div>{id}</div>
         <img  onClick={()=>navigate("/store/" + id)} src={image} height="200px" width="250px"className='home_cardImage'/>
        
        <div>
          <div>{name}</div>
        </div>
        <div className="home_list-group-flush" style={{borderRadius : '30px'}} >
          <div className='home_cardText'>가격 : {price}</div>
          <div className='home_cardText'>상품 타입 : {type}</div>
        </div>
        <div className='home_list_bottom'>
           <Link className='btn btn-secondary' to={"/store/" + id}>상세보기</Link> 
           &nbsp;
           <Button className='btn btn-primary' onClick={addToBasket}>장바구니 추가</Button>  
        </div>
      </div>
    </div>
   
    )
}
export default StoreItem