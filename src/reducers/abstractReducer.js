import { ReducerFactory } from 'utils/reducerUtil';

let initialState = {};

let abstractReducer = ReducerFactory(initialState);

//从远程接收新数据后更新 (node服务获取数据初始化页面时使用)
abstractReducer.action('receive', function(state, action){

    // 模块名称 this.name
    // 更新模块配置
    if(action.payload.module === this.name){
        state.config = Object.assign({}, state.config, action.payload.config);
        return Object.assign({}, state);
    } else {
        return state;
    }
});

abstractReducer.action('done', function(state, action){
    if(action.payload.module === this.name){
        state.config = Object.assign({}, state.config, action.payload.config);
        return Object.assign({}, state);
    } else {
        return state;
    }
});


export default abstractReducer;