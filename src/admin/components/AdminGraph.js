import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import '../../projectCSS/AdminGraph.css'
import { Button } from 'react-bootstrap';
import DailyAttendance from './DailyAttendance';
import Break1000 from './Break1000';

function AdminGraph() {

  return (        
    <>

    <section>
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-10 col-lg-9 col-md-8 ml-auto">
                <div className="row mb-4 ">

                {/* 막대 진행바 */}  {/* 매출 백분위 */} 
                  <div className="col-xl-6 col-12">
                    <div className="p-4 rounded">
                      <h4 className="mb-4" style={{textAlign: 'center'}}>영화 관객수</h4>

                      {/* 영화관5 */}
                      <h6 className='mb-2'>영화관 5</h6>
                      <div className="progress mb-4" style={{height: "20px"}}>
                        <div className="progress-bar progress-bar-striped" style={{width: "45%"}}>45%</div>
                      </div>
                      
                    </div>
                  </div>

                  <div className="col-xl-6 col-12 bg-light">
                    <h4 className="p-3 mb-3 fontColor">문의사항</h4>
                    <div className="container-fluid bg-white">

                      {/* 메뉴1 */}
                      <div className="row py-3 mb-4 task-borders">
                        <div className="col-1">
                            <input type="checkbox" checked ></input>
                        </div>
                        <div className="col-sm-9 col-8 textAlignLeft fontColor">
                            문의사항 1
                        </div>
                      </div>                                  
                    </div>
                  </div>

                      
                </div>
              </div>
            </div>     
          </div>
        </section>        
    </>    
  );
}

export default AdminGraph;