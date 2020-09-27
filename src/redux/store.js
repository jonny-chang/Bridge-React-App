import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

// Reducers
import userReducer from './reducers/userReducer';
import dataReducer from './reducers/dataReducer';
import questionReducer from './reducers/questionReducer';

// Init state
const initialState = {};

// Allows for async code using dispatch()
const middleware = [thunk];

const reducers = combineReducers({
    user: userReducer,
    data: dataReducer,
    questions: questionReducer
})

// Init store
const store = createStore(
    reducers, 
    initialState, 
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store