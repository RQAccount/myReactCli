import { bindActionCreators } from 'redux';
import { loadData, changeMessage } from 'actions/test';

export default {
    mapStateToProps: state => ({
        list: state.test.list,
        xxx: state.test.xxx,
    }),
    mapDispatchToProps: dispatch => ({
        loadData: bindActionCreators(loadData, dispatch),
        changeMessage: bindActionCreators(changeMessage, dispatch),
    })
};