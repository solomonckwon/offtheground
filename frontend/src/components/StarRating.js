import React, { useEffect, useState } from 'react'
import { FaStar } from 'react-icons/fa'

const StarRating = ({climb}) => {
    const [rating, setRating] = useState(null)
    const [hover, setHover] = useState(null)

    useEffect(() => {
        setRating(climb.priority)
    }, [rating])

    return (
        <div>
            {[...Array(5)].map((star, iterator) => {
                const ratingValue = iterator + 1

                return (
                    <label className='star-label'>
                        <input 
                            type='radio'  
                            className='rating'
                            value={ratingValue} 
                            onClick={()=>setRating(ratingValue)}
                        />
                        <FaStar 
                            className='star' 
                            onMouseEnter={()=>setHover(ratingValue)}
                            onMouseLeave={()=>setHover(null)}
                            color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"} 
                            size="15" 
                        />
                    </label>
                ) 
            })}    
        </div>
        )
}

export default StarRating