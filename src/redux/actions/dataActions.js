import { SET_NEWS } from '../types'

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
