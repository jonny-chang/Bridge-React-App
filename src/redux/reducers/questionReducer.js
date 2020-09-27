import { SET_ANSWER, SET_STEP, CLEAR_ANSWERS, SET_QUESTIONS } from '../types'

const initialState = {
    currentQ: 0,
    answers: [],
    questions: []
}

export default function(state = initialState, action){
    switch(action.type){    
        case SET_STEP:
            return {
                ...state,
                currentQ: action.payload
            }
        case SET_ANSWER:
            return{
                ...state,
                answers: action.payload
            }
        case CLEAR_ANSWERS:
            return(
                initialState
            )
        case SET_QUESTIONS:
            return{
                ...state,
                questions: action.payload
            }
        default:
            return state
    }
}