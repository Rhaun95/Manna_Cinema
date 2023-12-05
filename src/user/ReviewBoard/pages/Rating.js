import '../css/rating.css'
import React, {useEffect, useState} from "react";
import { FaStar } from "react-icons/fa";

const Rating=(props)=> {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    const [starHandler, setStarHandler] = useState(true);


    useEffect(() => {
        props.getScore(rating)
    },[starHandler])

    return (
        <div className="rating_container">
        <div className="rating_all">
            <div className="only_rating">
            <div className="rating_movie">영화관 평점:</div>
            <div>
            {[...Array(5)].map((star, index) => {
                const ratingValue = index + 1;
                return (
                    <label>
                        <input
                            type="radio"
                            className="stars"
                            value={ratingValue}
                            onClick={() => {
                                setRating(ratingValue)
                                setStarHandler(!starHandler)
                            }
                        }
                        />
                        <FaStar
                            className="star"
                            size={30}
                            onMouseEnter={() => setHover(ratingValue)}
                            onMouseLeave={() => setHover(null)}
                            color={ratingValue <= (hover || rating) ? "red" : "grey"}
                        />
                       
                    </label>
                );
            })}
            </div>
            </div>
        </div>
         <div>&#8251; 위의 영화관 평점은 좀 더 나은 서비스 제공을 목적으로만 수집됩니다.</div>
         </div>
    );
}
export default Rating