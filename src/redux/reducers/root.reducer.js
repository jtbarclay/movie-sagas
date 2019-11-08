import { combineReducers } from 'redux';

const moviesReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

const allReducers = combineReducers({
    moviesReducer,
});

export default allReducers;