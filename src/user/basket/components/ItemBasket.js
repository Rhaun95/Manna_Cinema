import React,{useState} from 'react';
import axios from "axios";

const ItemBasket = (props) => {
    const bi= props.bi
    const [isSelected, setIsSelected] = useState(true)
    const [reload, setReload] = useState(true)

    /**
     * * 선택 목록 삭제
     */
    const deleteItem=()=>{
        axios.delete("http://localhost:8080/itembasket/" + bi.id)
            .then((res)=>{
                console.log("아이템 삭제 성공", res.data)
                props.getData();
                })
            .catch(err=>console.log("아이템 삭제 실패", err))
    }

    /**
     * * 선택 여부 처리
     */
    function select(){
        setIsSelected(isSelected? false : true);
        props.payStore(bi, isSelected);
    }


    return (
        <>
        <div className="movieItem">
            <div className="movie_poster">
                <img style={{width: '100px', height: '150px' }}
                        src={bi.item_image}
                        alt="이미지" />
            </div>

            <div className="basket_details">
                <div className="details">상품명 : {bi.item_name}</div>
                <div className="details">수량 : {bi.total_amount}</div>
                <div className="details">가격 : {bi.total_price}</div>
            </div>
            <div className='setting_container'>
                <input className='checkbx' type="checkbox" name="check" value ={bi.id} onChange={select}/>
                <button type="submit" className="btnDelete" onClick={deleteItem} width="50px" height="50px">X</button>
            </div>
        </div>
        <div className="bottom"/>
        </>
    );
};

export default ItemBasket;