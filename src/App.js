import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AuthRoute from './util/AuthRoute'
import UnAuthRoute from './util/UnAuthRoute'
import Sidebar from './components/Sidebar'

// Pages
import home from './pages/home'
import login from './pages/login'
import signup from './pages/signup'
import signupSuccess from './pages/signup-success'
import questionnaire from './pages/questionnaire'

// Redux
import { Provider } from 'react-redux';
import store from './redux/store';
import {logoutUser, setEmail} from './redux/actions/userActions'

const date = localStorage.exp
const email = localStorage.email
const currentDate = new Date().getTime()

if (date){
  if (date * 1000 < currentDate){
    store.dispatch(logoutUser())
    window.location.href = '/login';
  }
  else {
    store.dispatch(setEmail(email))
  }
}

function App() {
  return (
    <Provider store={store}>
          <Router>
            {/* <Sidebar/> */}
            <div>
              <Switch>
                <Route exact path='/login' component={login}/>
                <Route exact path='/signup' component={signup}/>
                <Route exact path='/signup-success' component={signupSuccess}/>
                <Route exact path='/questions' component={questionnaire}/>
                <Route exact path='/' component={home}/>
              </Switch>
            </div>
          </Router>
      </Provider>
  );
}

export default App;
