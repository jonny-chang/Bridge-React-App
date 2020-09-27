import { SET_NEWS, SET_CID } from '../types'

const initialState = {
    news: [],
    CID: ""
}

export default function(state = initialState, action){
    switch(action.type){
        case SET_CID:
            return {
                ...state,
                CID: action.payload
            }    
        case SET_NEWS:
            return {
                ...state,
                news: action.payload
            }
        default:
            return state
    }
}