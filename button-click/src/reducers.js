import { combineReducers } from 'redux';

const entry = (state={}, action) => {
    switch (action.type) {
        case 'ENTER_WORLD':
            return action.entry;
        case 'EXIT_WORLD':
            return {};
        default:
            return state;
    }
};

export default combineReducers({
    entry: entry
});