import { combineReducers } from 'redux';

const moviesReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

const countReducer = (state = {count: "10"}, action) => {
    switch (action.type) {
        case 'SET_COUNT':
            return action.payload;
        default:
            return state;
    }
}

const searchReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_SEARCH':
            return action.payload;
        default:
            return state;
    }
}

const allReducers = combineReducers({
    moviesReducer,
    countReducer,
    searchReducer,
});

export default allReducers;