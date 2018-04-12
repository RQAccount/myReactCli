import { actions } from 'actions/test';
import { ReducerFactory } from 'utils/reducerUtil';
import abstractReducer from './abstractReducer';

let initialState = {
    list: [],
    massage: 'change'
};

let reducer = ReducerFactory(initialState, 'test').extends(abstractReducer);

reducer.action(actions.LOAD_DATA, function (state, action) {
    return Object.assign({}, state, action.payload);
});

reducer.action(actions.CHANGE_MESSAGE, function (state, action) {
    return Object.assign({}, state, action.payload);
});

export default reducer;