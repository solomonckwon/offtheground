import { useEffect } from "react"
import { useWorkoutsContext } from "../hooks/useWorkoutsContexts"
import { useClimbsContext } from "../hooks/useClimbsContexts"
//components
import WorkoutDetails from "../components/WorkoutDetails"
import WorkoutForm from "../components/WorkoutForm"
import ClimbDetails from "../components/ClimbDetails"

const Home = () => {
    const { workouts, dispatch } = useWorkoutsContext()
    const { climbs, dispatchClimbs } = useClimbsContext()


    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('/api/workouts')
            const json = await response.json()

            if (response.ok) {
                dispatch({type: 'SET_WORKOUTS', payload: json})
            }
        }

        const fetchClimbs = async () => {
            const response = await fetch('/api/climbs')
            const json = await response.json()

            if (response.ok) {
                dispatchClimbs({type: 'SET_CLIMBS', payload: json})
            }
        }

        fetchWorkouts()
        fetchClimbs()
    }, [dispatch, dispatchClimbs])
    //will only fetch once 

    return (
        <div className="home">
            <div className="climbs">
                {climbs && climbs.map((climb) => (
                    <ClimbDetails key={climb._id} climb={climb} />
                ))}
            </div>
            <div className="workouts">
                {/* map function goes through the array */}
                {workouts && workouts.map((workout) => (
                    <WorkoutDetails key={workout._id} workout={workout} />
                ))}
            </div>
            <WorkoutForm />
        </div>
    )
}

export default Home