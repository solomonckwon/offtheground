import { useClimbsContext } from "../hooks/useClimbsContexts";

import formatDistanceToNow from "date-fns/formatDistanceToNow";
import StarRating from "./StarRating";

const ClimbDetails = ({climb}) => {
    const { dispatch } = useClimbsContext()

    const handleClick = async () => {
        const response = await fetch('/api/climbs/' + climb._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if(response.ok) {
            dispatch({ type: 'DELETE_CLIMB', payload:json})
        }
    }

    return (
        <div className="climb-details">
            <h4>{climb.name}</h4>
            <p><strong>Grade: </strong>V{climb.grade}</p>
            <p><strong>Location: </strong>{climb.location}</p>
            <p>{formatDistanceToNow(new Date(climb.createdAt), { addSuffix: true })}</p>
            <StarRating></StarRating>
            <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
        </div>
    )
}

export default ClimbDetails