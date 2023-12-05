import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import MovieApiItem from '../components/MovieApiItem';
import Movie_API_KEY from '../../../key/key.js'


function MovieApi() {        

    const date = new Date(); //현재 날짜 추출    
    let years = date.getFullYear()
    let month = date.getMonth()+1
    let day = 0;
    if(date.getDate() == 1 ){
    day = 30
    month = date.getMonth()
    if(month < 10){
        month = '0'.concat(month)
    }
}
    else{
        day = date.getDate()-1
        if(day < 10){
            day = '0'.concat(day)
        }
        if(month < 10){
            month = '0'.concat(month)
        }
    }
    const yesterday = years+""+month+""+day+"" //영화 실시간 데이터  kobis api 주소에 들어갈 날짜 형식 맞춰줌 > 20220924          
    const [movieItems,setMovieItem] = useState([]);

       useEffect(() => {//kobis api 주소 + targetDt ex)20220924 json type으로 key/value 반환해줌
        fetch( `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${process.env.REACT_APP_MOVIE_API_KEY}&targetDt=`+ yesterday, {
          method : 'GET',
       })       
          .then((res) => res.json())
          .then((res) => { 
            setMovieItem(res.boxOfficeResult.dailyBoxOfficeList);
          }); 
       }, []);       

    return (
        <div>            
            <Container>            
            <h1>{yesterday} 영화 순위 정보 </h1>
            {movieItems.map((mItem) => ( //10개 데이터 있는데 그걸 하나씩 뽑으려고 foreach = map 
                <MovieApiItem mItem={mItem} key={mItem.movieCd}/>                
            ))}                        
            </Container>            
        </div>        
        
    )
}

export default MovieApi;