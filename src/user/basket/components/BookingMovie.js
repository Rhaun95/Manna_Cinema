import React from 'react';
import {Button} from 'react-bootstrap';

function BookingMovie(props){ 
    const {posterUrl, title} = props.mItem

    const selects=(e)=>{
        props.selectMovies(title, posterUrl)
    }

    return (
        <>
            <div>
            <img src={posterUrl} width="80px" height="120px" style={{margin: "10px 0"}}/>
            <Button 
                className="movie_item" variant="primary" value={title}
                onClick={selects}>{title}</Button>
            </div>
        </>
    )
}

export default BookingMovie