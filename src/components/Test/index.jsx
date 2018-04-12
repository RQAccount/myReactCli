import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import styles from './index.less';
import connect from 'react-redux';
import mapToProps from './dataMapping';

// @connect(mapToProps.mapStateToProps, mapToProps.mapDispatchToProps)
export default class Test extends React.Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        list: PropTypes.array,
        massage: PropTypes.string,
        loadData: PropTypes.func,
        changeMessage: PropTypes.func,
    }

    render() {
        // const { loadData, changeMessage } = this.props;
        // const data = loadData();
        //
        // return (
        //     <div>
        //         <ul style={style.ul}>
        //             { data.list.map(item =>  <li style={style.li}>{item}</li>)}
        //         </ul>
        //         <Button onClick={changeMessage({list: ['after change data']})}>change</Button>
        //     </div>
        // );

        return (
            <div className={styles.container}>
                <ul className={styles.ul}>
                    <li className={styles.li}>哈哈哈</li>
                    <li className={styles.li}>嘿嘿嘿</li>
                    <li className={styles.li}>嘻嘻嘻</li>
                </ul>
                <Button onClick={() => {alert('1111')}}>change</Button>
            </div>
        );
    }
}

// connect(mapToProps.mapStateToProps, mapToProps.mapDispatchToProps)(Test);