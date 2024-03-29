import { useEffect } from "react"

import { useClimbsContext } from "../hooks/useClimbsContexts"
//components

import ClimbForm from "../components/ClimbForm"
import ClimbDetails from "../components/ClimbDetails"

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
            <ClimbForm/>
        </div>
    )
}

export default Home