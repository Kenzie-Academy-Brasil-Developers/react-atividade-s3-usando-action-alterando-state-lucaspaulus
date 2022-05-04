import {createStore, combineReducers} from "redux"
import useReducer  from "./modules/user/reducer"
const reducers = combineReducers({user: useReducer})

const store = createStore(reducers) 


export default store