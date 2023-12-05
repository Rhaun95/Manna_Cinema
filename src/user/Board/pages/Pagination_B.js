import React, {useEffect, useState} from 'react'

function Pagination_B({postsPerPage, totalPosts, currentPage, setCurrentPage, paginate}){

    const pageNumbers = [];
    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <nav>
            <ul className="pagination justify-content-center">
            <div className="page-item">
                <button className="page-link"
                > &lt;</button>
            </div>

                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <a onClick={() => paginate(number)} className="page-link" style={currentPage == number ? {color: '#17a2b8'} : {color: "black"}}>
                            {number}
                        </a>

                    </li>
                ))}
                <div className="page-item">
                    <button className="page-link"> &gt;</button>
                </div>
            </ul>
        </nav>
    );
}

export default Pagination_B;