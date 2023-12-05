import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import ACinemaItem from '../components/ACinemaItem';
import '../css/CinemaAdmin.css'

function AdminCinema() {
   
    const navigate = useNavigate();    
    const [items, setItems] = useState([])
    
    const [checkedList, setCheckedList] = useState([]);
    function onCheckedElement(checked,item){
      if(checked){
        setCheckedList([...checkedList, item]);
      }
      else if (!checked) {
        setCheckedList(checkedList.filter(el => el !== item));
      }
    }
    function onRemove(item){
      if(item.length>=1){
      if(window.confirm("선택한 항목을 전체 삭제하시겠습니까?")){
      item.map((i) => {
        fetch('http://localhost:8080/cinema/' + i,{
        method : 'DELETE',
        })
          .then((res)=> res.text())
            .then((res) =>{
              window.location.replace('/admin/cinema')                          
            })
            .catch((error) => {
              alert('삭제 실패' + error)
            })
      })
      alert("삭제되었습니다.")
      }               
    }    
    else alert("항목을 선택하세요")
    setCheckedList(checkedList.filter(el => el !== items));
    };

     useEffect(() => {
        fetch('http://localhost:8080/cinema', {
          method: 'GET',
        })
          .then((res) => res.json())
          .then((res) => {
            setItems(res);
                      
          }); //비동기 함수          
       }, []);

       function InsertPage() {
          navigate('/admin/cinema/insert')
       }                       
       return (
        <>
        {sessionStorage.getItem("id") == 'admin' ?        
        <div style={{height : '92vh'}}>             
            <Container className='admin'>   
            <div style={{display : 'flex'}}>
            <h1 className='ml-5'>관리자 🎦상영관🎦 페이지</h1>  
            <div className='ml-5'>               
            <Button variant='outline-primary' onClick={InsertPage} style={{margin : '1em'}}>상영관 추가</Button>        
            <Button variant='outline-danger'onClick={()=> onRemove(checkedList)}>선택 삭제</Button>    
            </div>
            </div>
            {items.map((item) => (
              <>                  
              <ACinemaItem item={item} key={item.id}></ACinemaItem> 
              <input type='checkbox'
              className='checkSize'
              value={item.id}             
              onChange={(e)=>{
                onCheckedElement(e.target.checked, e.target.value); 
              }}></input>       
              </>                
            ))}            
            <hr/>                        
          </Container>      
        </div> :        
        <div>
          {navigate('/')}                            
          관리자페이지입니다.
        </div>
       }
        </>
      );              
};
export default AdminCinema;
