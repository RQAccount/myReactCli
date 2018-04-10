import { bindActionCreators } from 'redux';
import { loadData } from 'actions/test';

export default {
    mapStateToProps: state => ({

    }),
    mapDispatchToProps: dispatch => ({
        data: bindActionCreators(loadData, dispatch),
    })
};