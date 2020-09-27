import { SET_USER, SET_UNAUTHENTICATED, SET_AUTHENTICATED, LOADING_USER, SET_USER_ERRORS, SET_EMAIL } from '../types'

export const loginUser = (userData, history) => (dispatch) => {
    fetch(`http://13.57.251.106/verify-login?email=${userData.email}&pwd=${userData.password}`)
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
            history.push('/')
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
    fetch(`http://13.57.251.106/register-user?email=${userData.email}&pwd=${userData.password}&fname=${userData.fname}&lname=${userData.lname}`)
    .then(res => res.json())
    .then(
      (result) => {
        if (result.status == 1){
          history.push('/login')
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

  export const setEmail = (email) => (dispatch) => {
    dispatch({
      type: SET_EMAIL,
      payload: email
    })
  }


