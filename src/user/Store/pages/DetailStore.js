import { useEffect,useState } from "react";
import { Container } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import {Button} from 'react-bootstrap'
import onRemove from '../../UserSetting/components/AlertConfirm';
import axios from 'axios';




function DetailStore(props) {
   
    let {id} = useParams()
    const navigate = useNavigate()
    const user= sessionStorage.getItem("id")

    const [item, setItem] = useState([]);
    const [price, setPrice] = useState(0);
    let num = 0 ;

    useEffect(()=> {
        fetch('http://localhost:8080/store/' + id)
        .then((res) => res.json())
        .then((res) => setItem(res))
        
    },[])


    const[basketItem, setBasketItem] = useState({
        user_id: user,
        item_name: " ",
        total_amount: 0,
        total_price: 0,
        item_image: "",
    })

        function ChangeNum(e){
            num = e.target.value
            setPrice(item.price * num)
            setBasketItem({
                user_id: user,
                item_name: item.name,
                total_amount: num,
                total_price: item.price*num,
                item_image: item.image,
            })
        }

        function addToBasket(e){
            e.preventDefault();
            basketItem.item_name= item.name;
            console.log(basketItem);
            axios.post("http://localhost:8080/itembasket/insert",
                basketItem)
                .then(res=>{console.log("아이템 장바구니 추가 성공",res.data)
                            alert("장바구니 추가 성공!")})
                .catch(err=>console.log("아이템 장바구니 추가 실패", err));
        }

        

        return (
                <Container className='noScrollPage'>                
                    <hr/>                                        
                    <img className='storeImage' src={item.image} align={'left'}/>
                    <h2>
                        <h2 className="detailInfo">상품명 :</h2> 
                        {item.name}
                    </h2><br/>
                    <h2>
                        <h2 className="detailInfo">제품 타입 :</h2> 
                        {item.type}
                    </h2><br/>
                    <h2>
                        <h2 className="detailInfo">가격 :</h2> 
                        {item.price}
                    </h2><br/>
                    <h2>
                        <h2 className="detailInfo">주문 수량 :</h2>
                        <input type='number' min={1} onChange={ChangeNum}></input>
                    </h2>
                    <h2>
                        <h2 className="detailInfo">주문 가격 :</h2>
                        <input value={price}></input>
                    </h2>
                    <div>
                        {user?
                            <Button variant="danger" onClick={addToBasket}>장바구니</Button>
                        :
                            <Button variant="danger" onClick={onRemove}>장바구니</Button>}
                        
                    </div>                        
                </Container>  
                          
            
        )
    }

export default DetailStore