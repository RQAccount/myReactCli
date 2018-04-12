import React from 'react';
import Test from 'components/Test';
import styles from './index.less';


export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.container}>
                hello, world!
                <Test></Test>
            </div>
        );
    }
}