import { useClimbsContext } from "../hooks/useClimbsContexts";

import formatDistanceToNow from "date-fns/formatDistanceToNow";
import StarRating from "./StarRating";

const ClimbDetails = ({climb}) => {
    const { dispatch } = useClimbsContext()


    return (
        <div className="climb-details">
            <h4>{climb.name}</h4>
            <p><strong>Grade: </strong>V{climb.grade}</p>
            <p><strong>Location: </strong>{climb.location}</p>
            <p>{formatDistanceToNow(new Date(climb.createdAt), { addSuffix: true })}</p>
            <StarRating></StarRating>
        </div>
    )
}

export default ClimbDetails