import { SET_USER, SET_AUTHENTICATED, SET_UNAUTHENTICATED, LOADING_USER, SET_USER_ERRORS } from '../types'

const initialState = {
    authenticated: false,
    loading: false,
    email: "",
    errors: {}
}

export default function(state = initialState, action){
    switch(action.type){
        case SET_AUTHENTICATED:
            return {
                ...state,
                authenticated: true
            };
        case SET_UNAUTHENTICATED:
            return initialState
        case LOADING_USER:
            return {
                ...state,
                loading: true
            };
        case SET_USER:
            return {
                authenticated: true,
                loading: false,
                email: action.payload.email
            };
        case SET_USER_ERRORS:
            return{
                authenticated: false,
                loading: false,
                errors: action.payload.message
            }
        default:
            return state
    }
}