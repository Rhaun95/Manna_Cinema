import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import StoreItem from '../components/StoreItem';
import {Alert1s} from '../moving/Alert1s';
import '../moving/alert1s.css';

function StoreHome() {    
    const [items, setItems] = useState([])
     useEffect(() => {      
        fetch('http://localhost:8080/store', {
          method: 'GET',
        })
          .then((res) => res.json())
          .then((res) => {
            setItems(res);
           
          }); 
          
       }, []);


  // toast 알림창의 상태를 저장해 둘 state
  let [toastState, setToastState] = useState(false);

      //체크용 팝업창
      function getTotal(){
        // dispatch(movieBasketActions.getMovieBasket({totalBooking}))
        setToastState(true)
    }



    return (
        <div>
            <Container className='temp'>          

            <div className='alert_box' style={{width:"100px"}}>
              {toastState === true ? 
              <Alert1s setToastState={setToastState} />: null} 
            </div>  
            {items.map((item) => (
                <StoreItem item={item} key={item.id} setToastState={setToastState}/>                
            ))}
             <hr/>
            </Container>
        </div>
    )
}

export default StoreHome;