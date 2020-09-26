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

const date = localStorage.date
const email = localStorage.email

// if (token){
  
// }

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
