import axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';

function* watcherSaga() {
    yield takeEvery('GET_MOVIES', getMoviesSaga);
}

// GET request to server at /api/movies to tell server to get all movies from db
function* getMoviesSaga() {
    try {
        const movieResponse = yield axios.get('/api/movies');
        yield put({ type: 'SET_MOVIES', payload: movieResponse.data });
    } catch (error) {
        console.log('error fetching movies', error);
    }
}

export default watcherSaga;