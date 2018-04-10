import { actions } from 'actions/test';
import { ReducerFactory } from 'utils/reducerUtil';
import abstractReducer from './abstractReducer';

let initailState = {

};

let reducer = ReducerFactory(initailState, 'test').extends(abstractReducer);

reducer.action(actions.LOAD_DATA, function (state, action) {
    return Object.assign({}, state);
});

export default reducer;