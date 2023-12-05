import { useState, useEffect } from "react";
import DailyAttendance from "./DailyAttendance";
import Break1000 from "./Break1000";
import { Button } from "react-bootstrap";
import '../../../projectCSS/AdminGraph.css'

function MovieApiGraph(){ 
    const yesterday = new Date();
    
    let years = yesterday.getFullYear()
    let month = yesterday.getMonth()+1
    let day = 0;
    if(yesterday.getDate() == 1 ){
    day = 30
    month = yesterday.getMonth()
    if(month < 10){
        month = '0'.concat(month)
    }
  }
    else{
        day = yesterday.getDate()-1
        if(day < 10){
            day = '0'.concat(day)
        }
        if(month < 10){
            month = '0'.concat(month)
        }
    }
    let date = years+""+month+""+day+""
  
    
    const [movieItems,setMovieItem] = useState([]);
    

  
       useEffect(() => {
        fetch('https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=' + date, {
          method : 'GET',
       })       
          .then((res) => res.json())
          .then((res) => { 
            setMovieItem(res.boxOfficeResult.dailyBoxOfficeList);

          }); 
       }, []);                      
       let [hide, setHide] = useState(true)
       let [hide2, setHide2] = useState(true)
       let [more, setMore] = useState('더보기')
       let [more2, setMore2] = useState('더보기')

    return(
    <section>
    <div className="container-fluid">
        <div className="row">
          <div className="col-xl-10 col-lg-9 col-md-7 ml-auto" style={{height : '100vh'}}>  
            <div className="row mb-4 ">
             <div className="col-xl-6 col-12">
              <div className="p-4 rounded">                          
                <h4 className="mb-4">{date} 누적 관객 천만 돌파 지수</h4>                
                {movieItems.map((mItem) => (                  
                    <Break1000 mItem={mItem} key={mItem.rnum} hide={hide2}/>
                  ))}      
                    <Button
                    variant="primary" 
                    onClick={()=> {setHide2(!hide2); 
                    if(more=='더보기') setMore("다시 축소") 
                    else setMore('더보기')}}>{more}</Button>                              
              </div>                                 
            </div>            
            {console.log(date)}
            
            <div className="col-xl-6 col-12">
              <div className="p-4 rounded">                          
                <h4 className="mb-4">{date} 일간 관객 점유율</h4>                
                {movieItems.map((mItem) => (                   
                    <DailyAttendance mItem={mItem} key={mItem.rnum} hide={hide}/>))}                                    
                     <Button 
                    variant='outline-danger'
                    onClick={()=> {setHide(!hide); 
                    if(more2=='더보기') setMore2("다시 축소")
                    else setMore2('더보기')}}>{more2}</Button>
              </div>                                 
            </div>                    
          </div>
          </div>  
        </div>
      </div>     
    </section>      
    )  
}

export default MovieApiGraph
