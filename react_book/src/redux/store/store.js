import {createStore,combineReducers,applyMiddleware} from 'redux';
import  {counter} from '../reducers/reducer' 

//引入reducer
const store = createStore(counter)

export default store