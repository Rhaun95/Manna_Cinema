import { Button, Form } from "react-bootstrap";
import { useState } from "react";

function ExcelPOI(){
    const [num,setNum] = useState(1);

    function numChange(e){
        setNum(e.target.value)
    }

    return(                    
        <div className="col-xl-10 col-lg-9 col-md-8 ml-auto"> 
        <h2>EXCEL 다운로드(POI)</h2>
        <Form.Select onChange={numChange}
        style={{width : '20vh',
        display : 'inline-block'}}>            
              <option value={1}>영화</option>
              <option value={2}>상영관</option>
              <option value={3}>스토어</option>
              <option value={4}>유저</option>
              <option value={5}>게시판</option>
              <option value={6}>번개 게시판</option>
              
        </Form.Select>    

        {num == 1 ?
          <>
          <Button className="ml-2" onClick={()=> {
            window.location.replace("http://localhost:8080/excel/movie")
            }}>[영화] EXCEL</Button>
          </> : 
        <>
            {num == 2 ?                  
            <Button className="ml-2" onClick={()=> {
              window.location.replace("http://localhost:8080/excel/cinema")
              }}>[상영관] EXCEL</Button>
            :
            <>
              {num == 3 ? 
              <Button className="ml-2" onClick={()=> {
                window.location.replace("http://localhost:8080/excel/store")
                }}>[스토어] EXCEL</Button>        
              :
              <>
                {num == 4 ? 
                  <Button className="ml-2" onClick={()=> {
                    window.location.replace("http://localhost:8080/excel/user")
                    }}>[유저] EXCEL</Button>        
                :
                <>
                  {num == 5 ? 
                    <Button className="ml-2" onClick={()=> {
                      window.location.replace("http://localhost:8080/excel/board")
                      }}>[자유 게시판] EXCEL</Button>       
                  :              
                    <Button className="ml-2" onClick={()=> {
                      window.location.replace("http://localhost:8080/excel/thunder")
                      }}>[번개 게시판] EXCEL</Button>                      
                      }
                      </>
                    }
                  </>
                }
              </>
            }
          </>
        }           
        </div>         
    )
}
export default ExcelPOI;