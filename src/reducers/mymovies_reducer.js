import {ADDFAV, ADDMOVIE, REMOVEMOVIE} from "../actions";

export default function mymovies(state = [] ,action ) {
    switch (action.type) {
        case ADDFAV:
            return [...state,action.item]
        case REMOVEMOVIE:

            state=state.filter(item=>item.movieid!==action.item.movieid);
            return state;
        case ADDMOVIE:
            return [...state,action.item]
        default:
            return state;
    }
}
