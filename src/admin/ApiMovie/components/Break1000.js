import React from "react"
import { useState } from "react";
import { Button } from "react-bootstrap";

function Break1000(props){
    const {rank, movieNm, openDt, audiAcc, rnum} = props.mItem    
    const hide = props.hide
    function OutNum(){
        const num = audiAcc / 100000 
        return num + '%'
    }
    return(
        <>
        { rnum < 6 ?
    <>
    <div style={{display :'inline-block', width : '35em', }}>{movieNm}</div>
    <div style={{display :'inline-block', width : '9em'}}>관객수 : {audiAcc}</div>
        <div className="progress mb-2" style={{height: "20px",}}>
            <div className="progress-bar progress-bar-striped" style={{width: OutNum()}}>{OutNum()}</div>
        </div>                
    <hr></hr>
    
    
    </> : <><div hidden ={hide}>
    <div style={{display :'inline-block', width : '35em'}}>{movieNm}</div>
    <div style={{display :'inline-block', width : '9em'}}>관객수 : {audiAcc}</div>
        <div className="progress mb-2" style={{height: "20px",}}>
            <div className="progress-bar progress-bar-striped" style={{width: OutNum()}}>{OutNum()}</div>
        </div>        
    <hr></hr></div></>
    }    
    </>
    )
}

export default Break1000