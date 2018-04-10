import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import InitStore from './store';
import Reducers from './reducers';
import App from './components/App/index';

window.store = InitStore(Reducers);
let hideLoading = false;
let showError = false;

render(
    <AppContainer>
        <Provider store={store}>
            <div>
                <LocaleProvider locale={zhCN}>
                    <App hideLoading={hideLoading} showError={showError}></App>
                </LocaleProvider>
            </div>
        </Provider>
    </AppContainer>,
    document.getElementById('root')
);

if(module.hot) {
    module.hot.accept();
}