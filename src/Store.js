import { createStore, combineReducers } from 'redux';

import { reducer as todoReducer } from './todos';
import { reducer as filterReducer } from './filter';

const win = window

const reducer = combineReducers({
    todos: todoReducer,
    filter: filterReducer
})

const storeEnhancers = 
    (win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f

export default createStore(reducer,{},storeEnhancers)