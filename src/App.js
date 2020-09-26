import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AuthRoute from './util/AuthRoute'
import UnAuthRoute from './util/UnAuthRoute'

// Pages
import home from './pages/home'
import login from './pages/login'
import signup from './pages/signup'
import signupSuccess from './pages/signup-success'

// Redux
import { Provider } from 'react-redux';
import store from './redux/store';
import {logoutUser, setUser} from './redux/actions/userActions'
import { SET_EMAIL } from './redux/types';

const date = localStorage.exp
const email = localStorage.email
const currentDate = new Date()

const formatJSDate = (JSDate) => {
  const ret = {
    year: JSDate.getYear() + 1900,
    month: JSDate.getMonth(),
    day: JSDate.getDay(),
    time: JSDate.getTime()
  }
  return ret
}

const formatStringDate = (StringDate) => {
  const ret = {
    year: parseInt(StringDate.substring(0, 4)),
    month: parseInt(StringDate.substring(5, 7)),
    day: parseInt(StringDate.substring(8, 10)),
    time: 0
  }
  const hours = parseInt(StringDate.substring(11, 13))
  const minutes = parseInt(StringDate.substring(14, 16))
  const seconds = parseInt(StringDate.substring(17, 19))
  const millis = hours * 3600000 + minutes * 60000 + seconds * 1000
  ret.time = millis
  return ret
}

const compareDate = (cur, exp) => {
  if (cur.year > exp.year){
    return false
  }
  if (cur.month > exp.month){
    return false
  }
  if (cur.day > exp.day){
    return false
  }
  if (cur.time > exp.time){
    return false
  }
  return true;
}

if (date){
if (compareDate(formatJSDate(currentDate), formatStringDate(date)) == false){
  store.dispatch(logoutUser())
  window.location.href = '/login';
}
else {
  store.dispatch({
    type: SET_EMAIL,
    payload: email
  });
}
}

function App() {
  return (
    <Provider store={store}>
          <Router>
            <div className="container">
              <Switch>
                <UnAuthRoute exact path='/login' component={login}/>
                <UnAuthRoute exact path='/signup' component={signup}/>
                <UnAuthRoute exact path='/signup-success' component={signupSuccess}/>
                <AuthRoute exact path='/' component={home}/>
              </Switch>
            </div>
          </Router>
      </Provider>
  );
}

export default App;
