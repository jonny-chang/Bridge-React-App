import { SET_ANSWER, SET_STEP, CLEAR_ANSWERS, SET_QUESTIONS } from '../types'

const initialState = {
    currentQ: 0,
    answers: [],
    qLength: 0,
    questions: []
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
        case SET_QUESTIONS:
            return{
                questions: action.payload,
                qLength: action.length
            }
        default:
            return state
    }
}