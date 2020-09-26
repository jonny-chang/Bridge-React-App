import { SET_USER, SET_UNAUTHENTICATED, SET_AUTHENTICATED, LOADING_USER, SET_USER_ERRORS } from '../types'

export const loginUser = (userData, history) => (dispatch) => {
    fetch(`http://localhost:5000/verify-login?email=${userData.email}&pwd=${userData.password}`)
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
          if (result.status == 1){
            dispatch({ type: SET_AUTHENTICATED })
            dispatch({
                type: SET_USER,
                payload: result
            })
          }
          else (
              dispatch({
                  type: SET_USER_ERRORS,
                  payload: result
              })
          )
        },
        (error) => {
          console.log(error)
        }
      )
  }
