import {SHOWADDMOVIE,PLAYMOVIE} from "../actions";

export default function movie(state = {} ,action ) {
    switch (action.type) {
        case SHOWADDMOVIE:
            return action.item
        case PLAYMOVIE:
            return action.item;
        default:
            return state;
    }
}