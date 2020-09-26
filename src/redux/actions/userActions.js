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
            localStorage.setItem('exp', result.expire)
            localStorage.setItem('email', result.email)
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

  export const signupUser = (userData, history) => (dispatch) => {
    fetch(`http://localhost:5000//register-user?email=${userData.email}&pwd=${userData.password}&fname=${userData.fname}&lname=${userData.lname}`)
    .then(res => res.json())
    .then(
      (result) => {
        if (result.status == 1){
          history.push('/signup-success')
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

  export const logoutUser = () => (dispatch) => {
      dispatch({type: SET_UNAUTHENTICATED})
      localStorage.removeItem('exp');
      localStorage.removeItem('email');
  }


