import { useClimbsContext } from '../hooks/useClimbsContexts'

import React, { useEffect, useState } from 'react'
import { FaStar } from 'react-icons/fa'

const StarRating = ({climb}) => {
    const [rating, setRating] = useState(null)
    const [hover, setHover] = useState(null)
    const [ id, setID ] = useState(null)

    const { dispatch } = useClimbsContext()

    const handleSubmit = async (value) => {

        setRating(value)

        
        const editedClimb = { 
            name: climb.name, 
            grade: climb.grade, 
            location: climb.location, 
            priority: value 
        }
   
        console.log(editedClimb)
        
        const response = await fetch(`/api/climbs/${climb._id}` , {
            method: "PATCH",
            body: JSON.stringify(editedClimb),
            headers: {
                "Content-Type": "application/json",
            }
        })

        const json = await response.json()

        if(response.ok) {
            dispatch({type: "EDIT_CLIMB", payload: json})
        }
    }

    useEffect(() => {
        setRating(climb.priority)
        setID(climb._id)
    }, [])

    return (
        <div>
            {[...Array(5)].map((star, iterator) => {
                const ratingValue = iterator + 1

                return (
                    <label className='star-label' key={ratingValue}>
                        <input 
                            type='radio'  
                            className='rating'
                            value={ratingValue} 
                            onClick={()=>handleSubmit(ratingValue)}
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