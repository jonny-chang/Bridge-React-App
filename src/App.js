import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Pages
import home from './pages/home'

// Redux
import { Provider } from 'react-redux';
import store from './redux/store';


function App() {
  return (
    <Provider store={store}>
          <Router>
            <div className="container">
              <Switch>
                <Route path='/' component={home}/>
              </Switch>
            </div>
          </Router>
      </Provider>
  );
}

export default App;
