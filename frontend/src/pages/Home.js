import { useEffect } from "react"
import { useWorkoutsContext } from "../hooks/useWorkoutsContexts"
import { useClimbsContext } from "../hooks/useClimbsContexts"
//components
import WorkoutDetails from "../components/WorkoutDetails"
import WorkoutForm from "../components/WorkoutForm"
import ClimbDetails from "../components/ClimbDetails"
import StarRating from "../components/StarRating"

const Home = () => {
    const { climbs, dispatch } = useClimbsContext()

    useEffect(() => {

        const fetchClimbs = async () => {
            const response = await fetch('/api/climbs')
            const json = await response.json()

            if (response.ok) {
                dispatch({type: 'SET_CLIMBS', payload: json})
            }
        }
        fetchClimbs()
    }, [dispatch])

    return (
        <div className="home">
            <div className="climbs">
                {climbs && climbs.map((climb) => (
                    <ClimbDetails key={climb._id} climb={climb} />
                ))}
            </div>
            <WorkoutForm />
            <StarRating></StarRating>
        </div>
    )
}

export default Home