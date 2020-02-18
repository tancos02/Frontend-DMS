import { combineReducers } from 'redux';

const filesReducer = () => {
    return [
        { filename: "dummytext.txt", date: "27/12/1999" },
        { filename: "dummy2.pdf", date: "14/02/2019"}
    ]
}

export default combineReducers({
    files: filesReducer,
});