import { useState } from "react";
import { useClimbsContext } from "../hooks/useClimbsContexts";

const ClimbForm = () => {
    const { dispatch } = useClimbsContext();
    const [name, setName] = useState("");
    const [grade, setGrade] = useState("");
    const [location, setLocation] = useState("");
    const [priority, setPriority] = useState("");
    const [ error, setError ] = useState(null);
    const [emptyFields, setEmptyFields] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const climb = { name, grade, location, priority };

        const response = await fetch("/api/climbs", {
            method: "POST",
            body: JSON.stringify(climb),
            headers: {
                "Content-Type": "application/json",
            }
        })

        const json = await response.json();

        if (!response.ok) {
            setError(json.error)
            setEmptyFields(json.emptyFields);
        }

        if(response.ok) {
            setName("")
            setGrade("")
            setLocation("")
            setPriority("")
            dispatch({type: 'CREATE_CLIMB', payload: json})
        }

    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a Climb</h3>

            <label>Name: </label>
            <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
            />

            <label>Grade: </label>
            <input
                type="number"
                onChange={(e) => setGrade(e.target.value)}
                value={grade}
            />

            <label>Location: </label>
            <input
                type="text"
                onChange={(e) => setLocation(e.target.value)}
                value={location}
            />
            
            {/* replace this with star rating component created */}
            <label>Priority </label>
            <input
                type="number"
                onChange={(e) => setPriority(e.target.value)}
                value={priority}
            />

            <button>Add Climb</button>
            {error && <div className="error">{error}</div>}
        </form>
    )

}

export default ClimbForm