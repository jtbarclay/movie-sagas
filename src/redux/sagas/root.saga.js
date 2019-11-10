import axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';

function* watcherSaga() {
    yield takeEvery('GET_MOVIES', getMoviesSaga);
    yield takeEvery('PUT_MOVIES', setDetailsSaga);
    yield takeEvery('GET_COUNT', getMoviesCountSaga);
}

// GET request to server at /api/movies to tell server to get all movies from db
function* getMoviesSaga(action) {
    try {
        const movieResponse = yield axios.post('/api/movies', action.payload);
        yield put({ type: 'SET_MOVIES', payload: movieResponse.data });
    } catch (error) {
        console.log('error fetching movies', error);
    }
}

function* getMoviesCountSaga() {
    try {
        const movieCount = yield axios.get('/api/movies');
        yield put({ type: 'SET_COUNT', payload: movieCount.data})
    } catch (error) {
        console.log('error fetching movie count', error);
    }
}

function* setDetailsSaga(action) {
    try {
        yield axios.put(`/api/movies`, action.payload);
        yield put({ type: 'GET_MOVIES'})
    } catch (error) {
        console.log('error setting movie details');
    }
}

export default watcherSaga;