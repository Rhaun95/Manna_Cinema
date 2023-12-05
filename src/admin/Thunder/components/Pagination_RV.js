import React from 'react'


const Pagination = ({postsPerPage, totalPosts, currentPage, paginate}) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <>x

            <nav>
                <ul className="pagination justify-content-center">
                    <div className="page-item">
                        <button className="page-link" > &lt;</button>
                    </div>
                    {pageNumbers.map(number => (
                        <li key={number} className="page-item">
                            <a onClick={() => paginate(number)} className="page-link"
                               style={currentPage == number ? {color: '#17a2b8'} : null}>
                                {number}
                            </a>

                        </li>
                    ))}
                    <div className="page-item">
                        <button className="page-link"> &gt;</button>
                    </div>
                </ul>
            </nav>

        </>
    )
}


export default Pagination;