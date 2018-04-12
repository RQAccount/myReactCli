import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from 'components/Home';
import { Spin } from 'antd';
import style from './index.less';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { hideLoading } = this.props;
        return (
            <div>
                {
                    hideLoading ?
                    <Router>
                        <Route path='/' component={Home}></Route>
                    </Router>
                    :
                    <div style={{
                        width: '100%',
                        height: '100%',
                        margin: 'auto',
                        paddingTop: 50,
                        textAlign: 'center',
                    }}
                    >
                        <Spin size='large'/>
                    </div>
                }
            </div>
        );
    }
}

export default App;