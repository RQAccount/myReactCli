import React from 'react';
import connect from 'react-redux';
import PropTypes from 'prop-types';
import mapToProps from './mapping';
import style from './index.less';

@connect(mapToProps.mapStateToProps, mapToProps.mapDispatchToProps)
export default class Test extends React.Comment {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        loadData: PropTypes.func,
    }

    render() {
        const { loadData } = this.props;
        const data = loadData();

        return (
            <div>
                <ul style={style.ul}>
                    { data.list.map(item =>  <li style={style.li}>{item}</li>)}
                </ul>
            </div>
        );
    }
}