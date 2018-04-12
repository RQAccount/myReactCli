/*
* https://github.com/zalmoxisus/redux-devtools-extension#implementation
* */

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

export default function InitStore(rootReducer, initialState) {
    let finalCreateStore;

    if(process.env.NODE_ENV === 'production'){

        finalCreateStore = compose(
            applyMiddleware(thunk) // 初始化中间件
        )(createStore);

    }else{

        finalCreateStore = compose(
            applyMiddleware(thunk),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        )(createStore);
    }

    return finalCreateStore(rootReducer, initialState);
}

