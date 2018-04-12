import gRequest from 'network/gRequest';

export const actions = {
    LOAD_DATA: "test.loadData",
    CHANGE_MESSAGE: 'test.changeMessage'
};

export function loadData(){
    return {
        type: actions.LOAD_DATA,
        payload: gRequest({
            withCredentials: true,
            timeout: 40000,
        }).post('/getData')
    }
}

export function changeMessage(payload) {
    return {
        type: actions.CHANGE_MESSAGE,
        payload: payload
    }
}
