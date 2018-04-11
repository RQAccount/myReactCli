import { bindActionCreators } from 'redux';
import { loadData } from 'actions/test';

export default {
    mapStateToProps: state => ({

    }),
    mapDispatchToProps: dispatch => ({
        loadData: bindActionCreators(loadData, dispatch),
    })
};