import React from "react";
import '../../projectCSS/dashboardCard.css'


function DashboardCard() {
  return (
    <>
     <section>
      <div className="container-fluid">
        <div className="row">
          {/* 화면의 크기에 따라 카드 영역의 그리드 사이즈 조절 */}          
          <div className="col-xl-10 col-lg-9  col-md-9 ml-auto mr-1">
            <div className="row pt-5 mb-5">

            {/* 첫번째 카드 */}
              <div className="col-xl-3 col-sm-6 p-2">
                <div className="card card-common">
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <i className="fas fa-shopping-cart fa-3x text-warning"></i>    
                      <div className="text-right text-secondary">
                        <h5>금액</h5>
                        <br/> 
                        <h6>$135,000</h6>
                      </div>            
                    </div>
                  </div>
                  <div className="card-footer text-secondary">
                    <i className="fas fa-sync mr-3"></i>
                    <span>Updated Now</span>
                  </div>
                </div>
              </div>

              {/* 두번째 카드 */}
              <div className="col-xl-3 col-sm-6 p-2">
                <div className="card card-common">
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <i className="fas fa-money-bill-alt fa-3x text-success"></i>    
                      <div className="text-right text-secondary">
                        <h5>Expenses</h5>
                        <br/> 
                        <h6>$39,000</h6>
                      </div>            
                    </div>
                  </div>
                  <div className="card-footer text-secondary">
                    <i className="fas fa-sync mr-3"></i>
                    <span>Updated Now</span>
                  </div>
                </div>
              </div>

              {/* 세번째 카드 */}
              <div className="col-xl-3 col-sm-6 p-2">
                <div className="card card-common">
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <i className="fas fa-users fa-3x text-info"></i>    
                      <div className="text-right text-secondary">
                        <h5>Users</h5>
                        <br/> 
                        <h6>$15,000</h6>
                      </div>            
                    </div>
                  </div>
                  <div className="card-footer text-secondary">
                    <i className="fas fa-sync mr-3"></i>
                    <span>Updated Now</span>
                  </div>
                </div>
              </div>

              {/* 네번째 카드 */}
              <div className="col-xl-3 col-sm-6 p-2">
                <div className="card card-common">
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <i className="fas fa-chart-line fa-3x text-info"></i>    
                      <div className="text-right text-secondary">
                        <h5>Visitors</h5>
                        <br/> 
                        <h6>$45,000</h6>
                      </div>            
                    </div>
                  </div>
                  <div className="card-footer text-secondary">
                    <i className="fas fa-sync mr-3"></i>
                    <span>Updated Now</span>
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

export default DashboardCard;
