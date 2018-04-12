import { bindActionCreators } from 'redux';
import { loadData, changeMessage } from 'actions/test';

export default {
    mapStateToProps: state => ({
        list: state.test.list,
        massage: state.test.massage,
    }),
    mapDispatchToProps: dispatch => ({
        loadData: bindActionCreators(loadData, dispatch),
        changeMessage: bindActionCreators(changeMessage, dispatch),
    })
};