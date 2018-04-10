export const actions = {
    LOAD_DATA: "test.loadData"
};

export function loadData(payload){
    return {
        type: actions.LOAD_DATA,
        payload: payload
    }
}
