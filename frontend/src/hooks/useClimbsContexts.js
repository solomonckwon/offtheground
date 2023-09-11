import { ClimbsContext } from "../context/ClimbContext.js";
import { useContext } from "react";

export const useClimbsContext = () => {
    const context = useContext(ClimbsContext)

    if(!context) {
        throw Error('useClimbs context must be used inside of ClimbsContextProvider')
    }

    return context
}