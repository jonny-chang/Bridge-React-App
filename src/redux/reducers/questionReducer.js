import { SET_ANSWER, SET_STEP, CLEAR_ANSWERS } from '../types'

const initialState = {
    currentQ: 0,
    answers: []
}

export default function(state = initialState, action){
    switch(action.type){    
        case SET_STEP:
            return {
                currentQ: action.payload
            }
        case SET_ANSWER:
            return{
                answers: action.payload
            }
        case CLEAR_ANSWERS:
            return(
                initialState
            )
        default:
            return state
    }
}