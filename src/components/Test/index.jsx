import React from 'react';
import connect from 'react-redux';
import mapToProps from './mapping';

@connect(mapToProps.mapStateToProps, mapToProps.mapDispatchToProps)
export default class Test extends React.Comment {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>hello, test! </div>
        );
    }
}