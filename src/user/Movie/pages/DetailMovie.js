import { useEffect,useState } from "react";
import { Container,Table} from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import {Button} from 'react-bootstrap'
import DetailMComment from "../../MComment/components/DetailMComment";
import '../../MComment/css/mcomment.css';




function DetailMovie() {
    let navigate = useNavigate();
    let {id} = useParams()
    let i  = 0;
    let [j,setJ]= useState(3);

    const [movie, setMovie] = useState([]);
    const [still1,setStill1] = useState("");
    const [still2,setStill2] = useState("");
    const [still3,setStill3] = useState("");
    const [mComList,setMCoList] = useState([]);
    useEffect(()=> {
        fetch('http://localhost:8080/movie/' + id)  
        .then((res) => res.json())
        .then((res) => setMovie(res))
        fetch('http://localhost:8080/movie/' + id +'/still1' )
        .then((res) => res.text())
        .then((res) => setStill1(res))
        fetch('http://localhost:8080/movie/' + id +'/still2' )
        .then((res) => res.text())
        .then((res) => setStill2(res))
        fetch('http://localhost:8080/movie/' + id +'/still3' )
        .then((res) => res.text())
        .then((res) => setStill3(res))
        fetch('http://localhost:8080/mcomment', {
            method: 'GET',
          })
        .then((res) => res.json())
        .then((res) => {
            setMCoList(res);
        });        
    },[])
    return (
        <Container className='temp'>
            <div>                    
                <h1 style={{margin : '0.5em'}}>{movie.title}</h1>                                       
                <img className='posterBox' 
                src={movie.posterUrl} 
                align={'left'}/>
                <h5>                            
                <h4 className="detailInfo">감독 :</h4> {movie.directorNm} 
                <h4 className="detailInfo">장르 :</h4> {movie.genre} 
                <h4 className="detailInfo">상영시간 : </h4>{movie.runtime}분 
                <br/>
                <h4 className="detailInfo">등급 :</h4> {movie.rating} 
                <h4 className="detailInfo">개봉일 :</h4> {movie.repRlsDate}
                <br/>                    
                <h4 className="detailInfo">출연진 :</h4> {movie.actorNm}</h5>                
                <Button 
                id="stillBtn"         
                onClick={()=> {window.scrollTo(0,10000)}}>
                <h4>스틸 영상</h4>
                </Button>                
                <Button
                id="ticketingBtn"
                onClick={()=>navigate('/booking')}>
                <h4>예매하기</h4>
                </Button>                                            
            </div>                    
            <div>                        
                <img className='stillBox' src={still1}/>
                <img className='stillBox' src={still2}/>
                <img className='stillBox' src={still3}/>
            </div>
            <div style={{marginTop : '4em'}}>            
                <Table striped bordered hover variant="dark" className="tableCustom">
                    <thead>
                    <tr className="diThRow">
                        <th id="th1">영화 후기</th>
                        <th id="th2">별점</th>            
                    </tr>
                    </thead>
                    <tbody className="diTbRow">                            
                {                                                     
                mComList.map((item) => (    
                // 크롤링 영화 이름 == 해당 페이지 영화 이름 같을 경우 출력
                item.title == movie.title ? 
                <>
                {/* 처음에 3개의 한줄평만 출력 위함 */}
                <div style={{display : 'none'}}>{i+=1}</div> 
                    {i <= j ?  //j의 초기값 3개만 출력
                    <DetailMComment item={item} key={item.key}/>
                    : <></>
                    }
                </>
                : <></>
                ))
                }                 
                </tbody>
                </Table>                                
                    {i == 0 ? //해당하는 영화의 한줄평이 없을 경우 등록된 리뷰가 없다라고 표기
                    <p>등록된 리뷰가 없습니다.</p> 
                    :
                    i >= 3 ? //3개 미만일시 등록된 갯수만 출력 더보기/축소 버튼 X 
                        j == 3 ? //위 조건이 충족 이후 j의 초기값은 3 (useState) 
                        <Button onClick={()=> {setJ(10000);}}>
                        [ {movie.title} ] 한줄평 펼쳐보기</Button> // 모든 목록 출력 
                        :<Button onClick={()=> {setJ(3)}}> 
                        다시 줄이기</Button>// 다시 3개 출력
                    :<h5 style={{color : 'skyblue'}}>위 {i}개가 등록된 네이버 한줄평입니다.</h5>
                    }

                <h4 style={{color : 'pink', marginTop : '3em'}}>줄거리</h4>
                <h5>{movie.plot}</h5>
                <div style={{marginTop : '4em'}}>
                <video src={movie.audioUrl} controls/>
                </div>
            </div>            
        </Container>            
            
        )
    }

export default DetailMovie