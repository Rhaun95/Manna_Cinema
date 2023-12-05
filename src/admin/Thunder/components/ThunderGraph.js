import React,{useState, useEffect} from 'react';
import axios from 'axios';
import '../css/AdminGraph.css';

function AdminGraph() {

  const [thunders, setThunders]  = useState([]);




  //length, activatedLength,percentage
  // const [gasan, setGasan]= useState({})
  // const [namyang, setNamyang]= useState({})
  // const [gundae, setGundae]= useState({})
  // const [jangsung, setJangsung]= useState({})
  // const [bucheon, setBucheon]= useState({})


  // const locations =["가산", "남양주", "건대", "장승배기","부천"]

  const resArr=[]
  

  function rechnen2(locationArr){
    let leng = locationArr.length
    let activatedLeng = locationArr.filter(part => part.activated ===1).length;
    let percent = Math.round(activatedLeng/leng *100) +"%";
    let res={
      length:leng,
      activatedLength: activatedLeng,
      percentage:percent
    };

    return res
  }


  const rechnen1=(locs)=>{
    for(let i =0; i<locs.length; i++){
      
          let arr =  thunders.filter(thunder => thunder.location===locs[i])
          let temp =  rechnen2(arr);
          console.log(temp)
          resArr.push(temp)
    }
  }
  useEffect(()=>{
      getThunders();
    //   rechnen1(locations)
      
    // console.log(resArr[0].activatedLength)
    },[])

  /**
   * * Thunder 데이터
   */
   const getThunders= async()=>{
    try{
      const temp2 = await axios.get("http://localhost:8080/thunder/")

      setThunders(temp2.data)

    }catch(error){
      console.log("번개 이미지 호출 에러: ",error);
    }
  }
   
  const gasan= thunders.filter(thunder => thunder.location==="가산")
  const namyang= thunders.filter(thunder => thunder.location==="남양주")
  const gundae= thunders.filter(thunder => thunder.location==="건대")
  const jangsung= thunders.filter(thunder => thunder.location==="장승배기")
  const bucheon= thunders.filter(thunder => thunder.location==="부천")


  const gasanTotal = gasan.length
  const gasanActivated = gasan.filter(part => part.activated ===1).length
  const gasanPercentage = Math.round(gasanActivated/gasanTotal *100) +"%";

  const namyangTotal = namyang.length
  const namyangActivated = namyang.filter(part => part.activated ===1).length
  const namyangPercentage = Math.round(namyangActivated/namyangTotal *100) +"%";

  const gundaeTotal = gundae.length
  const gundaeActivated = gundae.filter(part => part.activated ===1).length
  const gundaePercentage = Math.round(gundaeActivated/gundaeTotal *100) +"%";
 
  const jangsungTotal = jangsung.length
  const jangsungActivated = jangsung.filter(part => part.activated ===1).length
  const jangsungPercentage = Math.round(jangsungActivated/jangsungTotal *100) +"%";

  const bucheonTotal = bucheon.length
  const bucheonActivated = bucheon.filter(part => part.activated ===1).length
  const bucheonPercentage = Math.round(bucheonActivated/bucheonTotal *100) +"%";



  return (
    <div className="container-fluid22">
      <section style={{width:"500px"}}>
          <div className="ThunderGraph_container">
            <div className="row">
              <div className="col-xl-8 col-lg-7 col-md-8 mt-5">
                <div className="row mb-4 ">

                {/* 막대 진행바 */}  {/* 매출 백분위 */} 
                  <div >
                    <div className="p-4 rounded">
                      <h4 className="mb-4" style={{textAlign: 'center'}}>지역별 모임</h4>

                   
                      <div  style={{display:"flex", justifyContent:"space-around"}}>
                        <div className='mb-2'>가산점 </div>
                        <div  className='mb-2'>({gasanActivated}/{gasanTotal})</div>
                      </div>                    
                      <div className="progress mb-4" style={{height: "20px"}}>
                        <div className="progress-bar progress-bar-striped font-weight-bold" style={{width: gasanPercentage}}>{gasanPercentage}</div>
                      </div>

                
                      <div  style={{display:"flex", justifyContent:"space-around"}}>
                        <div className='mb-2'>남양주점 </div>
                        <div  className='mb-2'>({namyangActivated}/{namyangTotal})</div>
                      </div>    
                      <div className="progress mb-4" style={{height: "20px"}}>
                        <div className="progress-bar progress-bar-striped font-weight-bold bg-success" style={{width: namyangPercentage}}>{namyangPercentage}</div>
                      </div>

        
                      <div  style={{display:"flex", justifyContent:"space-around"}}>
                        <div className='mb-2'>건대점 </div>
                        <div  className='mb-2'>({gundaeActivated}/{gundaeTotal})</div>
                      </div>    
                      <div className="progress mb-4" style={{height: "20px"}}>
                        <div className="progress-bar progress-bar-striped font-weight-bold bg-danger" style={{width: gundaePercentage}}>{gundaePercentage}</div>
                      </div>

   
                      <div  style={{display:"flex", justifyContent:"space-around"}}>
                        <div className='mb-2'>장승배기점 </div>
                        <div  className='mb-2'>({jangsungActivated}/{jangsungTotal})</div>
                      </div>
                      <div className="progress mb-4" style={{height: "20px"}}>
                        <div className="progress-bar progress-bar-striped font-weight-bold bg-info" style={{width: jangsungPercentage}}>{jangsungPercentage}</div>
                      </div>

           
                     <div  style={{display:"flex", justifyContent:"space-around"}}>
                        <div className='mb-2'>부천점 </div>
                        <div  className='mb-2'>({bucheonActivated}/{bucheonTotal})</div>
                      </div>    
                      <div className="progress mb-4" style={{height: "20px"}}>
                        <div className="progress-bar progress-bar-striped font-weight-bold" style={{width: bucheonPercentage}}>{bucheonPercentage}</div>
                      </div>
                      {/* <div  style={{display:"flex", justifyContent:"space-around"}}>
                        <div className='mb-2'>가산점 </div>
                        <div  className='mb-2'>{resArr[0].activatedLength}/{resArr[0].length}</div>
                      </div>                    
                      <div className="progress mb-4" style={{height: "20px"}}>
                        <div className="progress-bar progress-bar-striped font-weight-bold" style={{width: resArr[0].percentage}}>{resArr[0].percentage}</div>
                      </div>

                
                      <div  style={{display:"flex", justifyContent:"space-around"}}>
                        <div className='mb-2'>남양주점 </div>
                        <div  className='mb-2'>({resArr[1].activatedLength}/{resArr[1].length})</div>
                      </div>    
                      <div className="progress mb-4" style={{height: "20px"}}>
                        <div className="progress-bar progress-bar-striped font-weight-bold bg-success" style={{width: resArr[1].percentage}}>{resArr[1].percentage}</div>
                      </div>

        
                      <div  style={{display:"flex", justifyContent:"space-around"}}>
                        <div className='mb-2'>건대점 </div>
                        <div  className='mb-2'>({resArr[2].activatedLength}/{resArr[2].length})</div>
                      </div>    
                      <div className="progress mb-4" style={{height: "20px"}}>
                        <div className="progress-bar progress-bar-striped font-weight-bold bg-danger" style={{width: resArr[2].percentage}}>{resArr[2].percentage}</div>
                      </div>

   
                      <div  style={{display:"flex", justifyContent:"space-around"}}>
                        <div className='mb-2'>장승배기점 </div>
                        <div  className='mb-2'>({resArr[3].activatedLength}/{resArr[3].length})</div>
                      </div>
                      <div className="progress mb-4" style={{height: "20px"}}>
                        <div className="progress-bar progress-bar-striped font-weight-bold bg-info" style={{width: resArr[3].percentage}}>{resArr[3].percentage}</div>
                      </div>

           
                     <div  style={{display:"flex", justifyContent:"space-around"}}>
                        <div className='mb-2'>부천점 </div>
                        <div  className='mb-2'>({resArr[4].activatedLength}/{resArr[4].length})</div>
                      </div>    
                      <div className="progress mb-4" style={{height: "20px"}}>
                        <div className="progress-bar progress-bar-striped font-weight-bold" style={{width: resArr[4].percentage}}>{resArr[4].percentage}</div>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>     
          </div>
        </section>
    </div>
  );
}

export default AdminGraph;