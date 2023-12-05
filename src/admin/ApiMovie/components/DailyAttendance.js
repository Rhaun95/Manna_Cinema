import React from "react"
import { useState } from "react";

function DailyAttendance(props){
    const {movieNm, salesShare,rnum} = props.mItem    
    const hide = props.hide;
    console.log(hide)
    let num = 6;

    return(
        <>
        { rnum < num ?
        <>
        <div style={{display :'inline-block', width : '35em',}}>{movieNm} </div>                   
        <div style={{display :'inline-block', width : '9em'}}>{salesShare} %</div>
        <div className="progress mb-2" style={{height: "20px",}}>
            <div className="progress-bar progress-bar-striped bg-danger" style={{width:  salesShare +'%' }}>{salesShare}%</div>
        </div>        
    <hr></hr>    
        </>
        : 
        <div hidden={hide}>
           
        <div style={{display :'inline-block', width : '35em'}}>{movieNm} </div>                   
        <div style={{display :'inline-block', width : '9em'}}>{salesShare} %</div>
        <div className="progress mb-2" style={{height: "20px",}}>
            <div className="progress-bar progress-bar-striped bg-danger" style={{width:  salesShare +'%' }}>{salesShare}%</div>
        </div>        
    <hr></hr>   
    </div>
        }
        </>
    )
}

export default DailyAttendance