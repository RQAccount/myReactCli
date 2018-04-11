import React from 'react';
import Test from 'components/Test';
import style from './index.less';


export default class Home extends React.Comment {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={style.container}>
                <Test />
                <Test />
            </div>
        );
    }
}