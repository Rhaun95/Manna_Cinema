import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function MovieApiItem(props){ 
    const {rank, movieNm, openDt, audiAcc} = props.mItem

    return (
        <Card bg='dark'>
            <Card.Body>
                <Card.Title>{movieNm}</Card.Title>
                <p>랭킹 : {rank}</p>
                <p>개봉일자 : {openDt}</p>
                <p>누적 관객 수  : {audiAcc}</p>
                {/* <Link to={'/language/'+ id} className="btn btn-secondary">상세보기</Link> */}
            </Card.Body>
        </Card>
    )
}

export default MovieApiItem