import React from 'react';
import connect from 'react-redux';
import mapToProps from './mapping';
import Test from 'components/Test';


@connect(mapToProps.mapStateToProps, mapToProps.mapDispatchToProps)
export default class Home extends React.Comment {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Test />
        );
    }
}