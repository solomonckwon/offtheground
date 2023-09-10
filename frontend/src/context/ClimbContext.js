import { createContext, useReducer } from 'react'

export const ClimbsContext = createContext()

export const climbsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_CLIMBS':
            return {
                climbs: action.payload
            }
        default:
            return state
    }
}

export const ClimbsContextProvider = ( {children}) => {
    const [state, dispatch] = useReducer(climbsReducer, {
        climbs: null
    })

    return (
        <ClimbsContext.Provider value = {{...state, dispatch}}>
            {children}
        </ClimbsContext.Provider>
    )
}