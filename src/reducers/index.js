import { combineReducers } from 'redux';

// 引入各模块的reducer
import testReducer from './test';

const reducers = combineReducers({
    test: testReducer
});

export default reducers;