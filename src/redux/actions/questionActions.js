import { SET_ANSWER, SET_STEP, CLEAR_ANSWERS } from '../types'

export const setStep = (step) => (dispatch) => (
    dispatch({
        type: SET_STEP,
        payload: step
    })
)

export const setAnswer = (answers) => (dispatch) => {
    dispatch({
        type: SET_ANSWER,
        payload: answers,
    })
}

export const clearAnswers = (dispatch) => {
    dispatch({
        type: CLEAR_ANSWERS
    })
} 

