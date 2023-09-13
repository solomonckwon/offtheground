import React from 'react'
import { FaStar } from 'react-icons/fa'

const StarRating = () => {
    return (
        <div>
            {[...Array(5)].map((star, iterator) => {
                const ratingValue = iterator + 1

                return (
                    <label>
                        <input type='radio' name = 'rating' value={ratingValue}/>
                        <FaStar size="10" />
                    </label>
                ) 
            })}    
        </div>
        )
}

export default StarRating