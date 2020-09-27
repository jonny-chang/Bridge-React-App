import { SET_NEWS, SET_CID } from '../types'

export const setNews = () => (dispatch) => {
    fetch(`http://13.57.251.106/get-articles`)
    .then(res => res.json())
    .then(
      (result) => {
        dispatch({
            type: SET_NEWS,
            payload: result
        })
      }

    )
}

export const setCID = (CID, history) => (dispatch) => {
  dispatch({
    type: SET_CID,
    payload: CID
  })
  history.push('/chat')
}
