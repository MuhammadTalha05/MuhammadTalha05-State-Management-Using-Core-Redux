import {combineReducers, createStore} from 'redux'
import {ammountHReducer} from './Reducers/ammountHReducer'
import { todoHandler } from './Reducers/todoReducer';

const rootReducer = combineReducers({
    ammount1 : ammountHReducer,
    todo: todoHandler,
})

const store = createStore(rootReducer);

export default store