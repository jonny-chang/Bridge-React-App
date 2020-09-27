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
    let done = false;
    let index = 1;
    let qArr = [];
    while (!done){
        fetch(`http://localhost:5000/get-question?id=${index}`)
            .then(res => res.json())
            .then(
                (result) => {
                    if(result.status === 1){
                        qArr.push(result.question)
                        index++
                    }
                    else{
                        done = true
                    }
                },
                (error) => {
                    console.log(error)
                }
            )
    }
    dispatch({
        type: SET_QUESTIONS,
        payload: qArr,
        qLength: qArr.length
    })
}

