import React, { useReducer, createContext } from 'react'

const ComponentContext = createContext()

const initialState = [
        {   
            mainPoint: 'Point One',
            subPoints: [
                {
                    subPointTitle: 'SubPoint 1:1',
                    content: ['A quote', 'Another Quote'],
                },
                {
                    subPointTitle: 'SubPoint 1:2',
                    content: [],

                }
            ],
        },
        {   
            mainPoint: 'Point Two',
            subPoints: [
                {
                    subPointTitle: 'SubPoint 2:1',
                    content: ['A quote', 'Another Quote'],
                },
            ],
        },
        {   
            mainPoint: 'Point Three',
            subPoints: [
                {
                    subPointTitle: 'SubPoint 3:1',
                    content: ['A quote', 'Another Quote'],
                },
                {
                    subPointTitle: 'SubPoint 3:2',
                    content: ['A quote', 'Another Quote'],
                },
                {
                    subPointTitle: 'SubPoint 3:3',
                    content: ['A quote', 'Another Quote'],
                },
            ],
        }
]

const reducer = (state, action) => {

    switch(action.type) {
        case 'quoteEdit': {
            return {
                ...state,
            }
        }
        default: 
            return state
    }
}
const ComponentContextProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <ComponentContext.Provider value = { [ state, dispatch] }>
            {props.children}
        </ComponentContext.Provider>
    )
}

export {ComponentContext, ComponentContextProvider}