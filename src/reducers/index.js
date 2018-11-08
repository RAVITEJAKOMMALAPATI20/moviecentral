import movies from './movies_reducer'
import mymovies from './mymovies_reducer'
import movie from './movie_reducer'
import {combineReducers} from 'redux';

const rootReducer =combineReducers(
    {movies , mymovies,movie}
);
export default rootReducer;