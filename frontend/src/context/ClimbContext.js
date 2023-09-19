import { createContext, useReducer } from 'react'

export const ClimbsContext = createContext()

export const climbsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_CLIMBS':
            return {
                climbs: action.payload
            }
        case 'CREATE_CLIMB':
            return {
                climbs: [action.payload, ...state.climbs]
            }
        case 'DELETE_CLIMB':
            return {
                climbs: state.climbs.filter((c) => c._id !== action.payload._id)
            }
        case 'EDIT_CLIMB':
            return {
                climbs: state.climbs.map((climb) => {
                    if(climb._id === action.payload._id) {
                        return action.payload
                    } else {
                        return climb
                    }
                })
            }
        default:
            return state
    }
}

export const ClimbsContextProvider = ( {children} ) => {
    const [state, dispatch] = useReducer(climbsReducer, {
        climbs: null
    })

    return (
        <ClimbsContext.Provider value = {{...state, dispatch}}>
            { children }
        </ClimbsContext.Provider>
    )
}