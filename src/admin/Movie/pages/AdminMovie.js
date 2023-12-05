import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import AMovieItem from '../components/AMovieItem';

function AdminMovie() {
   
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
        fetch('http://localhost:8080/movie/' + i,{
        method : 'DELETE',
        })
          .then((res)=> res.text())
            .then((res) =>{
              window.location.replace('/admin/movie')                          
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
        fetch('http://localhost:8080/movie', {
          method: 'GET',
        })
          .then((res) => res.json())
          .then((res) => {
            setItems(res);
                      
          }); //비동기 함수
          
       }, []);

       function InsertPage() {
          navigate('/admin/movie/insert')
       }

       return (
        <>
        {sessionStorage.getItem("id") == 'admin' ?        
        <div>          
            <Container className='admin'>                        
            <div style={{display : 'flex'}}>
            <h1 className='ml-5'>관리자 🎥영화🎥 페이지</h1>
            <div className='ml-5'>            
            <Button variant='outline-primary' onClick={InsertPage} style={{margin : '1em'}}>영화 추가</Button>
            <Button variant='outline-danger' onClick={()=> onRemove(checkedList)}>선택 삭제</Button>  
            </div>
            </div>            
            {items.map((item) => (              
                <>
                <AMovieItem item={item} key={item.movieId}/>
                <input type='checkbox'
                className='checkSize'
                value={item.movieId}              
                onChange={(e)=>{
                onCheckedElement(e.target.checked, e.target.value); 
                }}></input>
                </>
            ))}            
            <hr/>                        
            </Container>
        </div> :        
        <>
          {navigate('/')}{/* useNavaige */}
          {alert('관리자 페이지입니다.')}
        </>
       }
    </>
    );              
};


export default AdminMovie;
