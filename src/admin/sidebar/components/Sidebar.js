import React from 'react';

import '../css/sidebar.css';

const Sidebar = () => {

  return (
    <>

      <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light collapse pl-3 sidebar">
        <div className="position-sticky ">
          <ul className="nav flex-column">
            <li className="nav-item active bottom-border mb-2">
              <a className="nav-link active" aria-current="page" href="#">
                    <span data-feather="home"></span>
                    관리자 메뉴
              </a>
            </li>

            <li className="nav-item active">
              <a className="nav-link active bottom-border mb-3" aria-current="page" href="#">
               <img src='https://w1.pngwing.com/pngs/743/500/png-transparent-circle-silhouette-logo-user-user-profile-green-facial-expression-nose-cartoon-thumbnail.png'
                   alt='' width={50} className="mr-3"/>
               <span  >ID : {sessionStorage.getItem('id')}</span>                   
              </a>

              {/* fa-이모티콘 https://fontawesome.com/search?s=solid&f=sharp&o=r */}
              <li className="nav-item">
                <a className="nav-link text-black  active current ml-1" aria-current="page" href="/admin">
                  <i className="fas fa-info mr-3"></i>
                  Dashboard
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link text-black sidebar-link active" aria-current="page" href="/admin/">
                <i className="fas fa-key  mr-3"></i>
                  [관리자]
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-black sidebar-link active" aria-current="page" href="/admin/userListForm">
                <i className="fas fa-user fa-lg mr-3"></i>
                  [유저]
                </a>
              </li>
              {/* fa-이모티콘 https://icons.getbootstrap.com/ */}
              <li className="nav-item">
                <a className="nav-link text-black sidebar-link active" aria-current="page" href="/admin/movie">
                <i className="fas fa-video  mr-3"></i>
                  [영화] 
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link text-black sidebar-link active" aria-current="page" href="/admin/store">
                <i className="fas fa-store  mr-3"></i>
                  [스토어] 
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link text-black sidebar-link active" aria-current="page" href="/admin/cinema">
                <i className="fas fa-home mr-3"></i>
                  [극장]
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-black sidebar-link active" aria-current="page" href="/admin/thunder">
                <i className="fas fa-user fa-lg mr-3"></i>
                  [번개모임]
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-black sidebar-link active" aria-current="page" href="/admin/mcomment">
                <i className="fas fa-user fa-lg mr-3"></i>
                  [한줄평 (Naver)]
                </a>
              </li>              
              
              <li className="nav-item">
                <a className="nav-link text-black sidebar-link active" aria-current="page" href="/admin/board">
                <i className="fas fa-user fa-lg mr-3"></i>
                  [문의게시판]
                </a>
              </li>           
              <li className="nav-item">
                <a className="nav-link text-black sidebar-link active" aria-current="page" href="/admin/reviewBoard">
                <i className="fas fa-user fa-lg mr-3"></i>
                  [후기게시판]
                </a>
              </li>                          
            </li>
          </ul>
          
        </div>
      </nav>
    </>
  );
};

export default Sidebar;