import { SET_ANSWER, SET_STEP, CLEAR_ANSWERS, SET_QUESTIONS } from '../types'

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

export const clearAnswers = () => (dispatch) => {
    dispatch({
        type: CLEAR_ANSWERS
    })
} 

export const getQuestions = () => (dispatch) => {
    let qArr = [];

    fetch(`http://13.57.251.106/get-questions`)
        .then(res => res.json())
        .then(
            (result) => {
                dispatch({
                    type: SET_QUESTIONS,
                    payload: result,
                })
            },
            (error) => {
                console.log(error)
            }
        )
    
}

export const analyze = (ans, used_other, id, email) => (dispatch) => {
    if (used_other){
        fetch(`http://13.57.251.106/process-answer-sentiment?used_other=true&id=${id}&other_text=${ans}&email=${email}`)
        .then(res => res.json())
        .then(
            (result) => {
                console.log(result)
            },
            (error) => {
                console.log(error)
            }
        )
    }
    else {
        fetch(`http://13.57.251.106/process-answer-sentiment?used_other=&id=${id}&sent_score=${ans}&email=${email}`)
        .then(res => res.json())
        .then(
            (result) => {
                console.log(result)
            },
            (error) => {
                console.log(error)
            }
        )
    }
}
