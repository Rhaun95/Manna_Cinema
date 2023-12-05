import React from 'react';

function SalesByStore() {
  return (
    <>
      <section>
        <div className='container-fluid' style={{float: 'left'}}>
          <div className='row mb-5'>
            <div className='col-xl-10 col-lg-9 col-md-8 ml-auto'>
              <div className='row align-items-center'>
              <div className='col-xl-6 col-12 mb-xl-0'>
                  <h4 className='text-muted text-center mb-3'>영화관 매출 리스트</h4>
                  
                  <table className='table bg-light text-center '>                    
                    {/* 테이블별 헤더 */}
                    <thead >
                      <tr className='text-muted'>
                        <th> #</th>
                        <th> 매장 이름</th>
                        <th> 일일 매출</th>
                        <th> 월 매출</th>   
                        <th> 비고</th>                     
                      </tr>
                    </thead>
                    {/* 내용 */}
                    <tbody>
                      <tr>
                        <th>1</th>
                        <th>매장1</th>
                        <th>3000만원</th>
                        <th>15000만원</th>
                        <th><button type="button" className="btn btn-info btn-sm">메세지</button></th>
                      </tr>

                      <tr>
                        <th>2</th>
                        <th>매장2</th>
                        <th>1000만원</th>
                        <th>13000만원</th>
                        <th><button type="button" className="btn btn-info btn-sm">메세지</button></th>
                      </tr>

                      <tr>
                        <th>3</th>
                        <th>매장3</th>
                        <th>5000만원</th>
                        <th>20000만원</th>
                        <th><button type="button" className="btn btn-info btn-sm">메세지</button></th>
                      </tr>

                      <tr>
                        <th>4</th>
                        <th>매장5</th>
                        <th>3000만원</th>
                        <th>19000만원</th>
                        <th><button type="button" className="btn btn-info btn-sm">메세지</button></th>
                      </tr>

                      <tr>
                        <th>5</th>
                        <th>매장5</th>
                        <th>3500만원</th>
                        <th>10000만원</th>
                        <th><button type="button" className="btn btn-info btn-sm">메세지</button></th>
                      </tr>
                    </tbody>
                  </table>

                  {/* 테이블 페이네이션 */}
                  <nav>
                    <ul className="pagination justify-content-center">
                      <li className='page-item'>
                        <a href="#" className="page-link py-2 px-3 mt-4">
                          <span>&laquo;</span>
                        </a>
                      </li>

                      {/* 페이지 정보를 추가 */}
                        <li className='page-item active'>
                          <a href='#' className="page-link py-2 px-3 mt-4">1</a>
                        </li>

                        <li className='page-item'>
                          <a href='#' className="page-link py-2 px-3 mt-4">2</a>
                        </li>

                        <li className='page-item '>
                          <a href='#' className="page-link py-2 px-3 mt-4">3</a>
                        </li>

                        <li className='page-item '>
                          <a href='#' className="page-link py-2 px-3 mt-4">4</a>
                        </li>

                      <li className='page-item'>
                        <a href="#" className="page-link py-2 px-3 mt-4">
                          <span>&raquo;</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>

                <div className="col-xl-6 col-12">
                    {/* table-hover => 해당 아이템 표시 */}
                    <h4 className='text-muted text-center mb-3'>최근 지급 내역</h4>
                  <table className='table bg-light text-center table-dark table-hover'>                    
                    {/* 테이블별 헤더 */}
                    <thead >
                      <tr className='text-muted'>
                        <th> #</th>
                        <th> 이름</th>
                        <th> 금액</th>
                        <th> 날짜</th>   
                        <th> 상태</th>                     
                      </tr>
                    </thead>
                    {/* 내용 */}
                    <tbody>
                      <tr>
                        <th>1</th>
                        <th>영진</th>
                        <th>3200만원</th>
                        <th>2022/09/13</th>
                        <th><span className='badge badge-success w-75 py-2 '>Approved</span></th>
                      </tr>

                      <tr>
                        <th>2</th>
                        <th>장호</th>
                        <th>3200만원</th>
                        <th>2022/09/13</th>
                        <th><span className='badge badge-success w-75 py-2'>Approved</span></th>
                      </tr>

                      <tr>
                        <th>3</th>
                        <th>현진</th>
                        <th>3200만원</th>
                        <th>2022/09/10</th>
                        <th><span className='badge badge-success w-75 py-2'>Approved</span></th>
                      </tr>

                      <tr>
                        <th>4</th>
                        <th>미루</th>
                        <th>3200만원</th>
                        <th>2022/09/15</th>
                        <th><span className='badge badge-success w-75 py-2'>Approved</span></th>
                      </tr>

                      <tr>
                        <th>5</th>
                        <th>진환</th>
                        <th>3200만원</th>
                        <th>2022/09/18</th>
                        <th><span className='badge badge-danger w-75 py-2'>Approved</span></th>
                      </tr>
                    </tbody>
                  </table>

                  {/* 테이블 페이네이션 */}
                  <nav>
                    <ul className="pagination justify-content-center">
                      <li className='page-item'>
                        <a href="#" className="page-link py-2 px-3 mt-4">
                          <span>&laquo;</span>
                        </a>
                      </li>

                      {/* 페이지 정보를 추가 */}
                        <li className='page-item active'>
                          <a href='#' className="page-link py-2 px-3 mt-4">1</a>
                        </li>

                        <li className='page-item'>
                          <a href='#' className="page-link py-2 px-3 mt-4">2</a>
                        </li>

                        <li className='page-item '>
                          <a href='#' className="page-link py-2 px-3 mt-4">3</a>
                        </li>

                        <li className='page-item '>
                          <a href='#' className="page-link py-2 px-3 mt-4">4</a>
                        </li>

                      <li className='page-item'>
                        <a href="#" className="page-link py-2 px-3 mt-4">
                          <span>&raquo;</span>
                        </a>
                      </li>
                    </ul>
                  </nav>

                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SalesByStore;