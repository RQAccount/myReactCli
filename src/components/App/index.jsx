import React from 'react';
import Home from 'components/Home';
import { Spin } from 'antd';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { hideLoading, showError } = this.props;
        return (
            <Router>
                hideLoading ?
                <Route component={Home}></Route>
                :
                <div style={{
                    width: '100%',
                    height: '100%',
                    margin: 'auto',
                    paddingTop: 50,
                    textAlign: 'center'
                }}>
                    <Spin size='large'/>

                </div>
            </Router>
        );
    }
}

export default App;