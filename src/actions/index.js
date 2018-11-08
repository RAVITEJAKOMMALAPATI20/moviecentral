import axios from "axios";

export const MOVIES = "MOVIES";
export const ADDFAV = "ADDFAV";
export const REMOVEMOVIE = "REMOVEMOVIE";
export const ADDMOVIE = "ADDMOVIE";
export const SHOWADDMOVIE = "SHOWADDMOVIE";
export const PLAYMOVIE="PLAYMOVIE";



const ROOT_URL = "http://rhomeaway.xyz/api";

export function movies(items) {

    const action={
        type:MOVIES,
        items
    }
    return action;
}

export function addmovie(item) {

    const action={
        type:ADDMOVIE,
        item
    }
    return action;

}

export function addfavorite(item) {

    const action={
        type:ADDFAV,
        item
    }
    return action;

}

export function removemovie(item) {

    const action={
        type:REMOVEMOVIE,
        item
    }
    return action;

}

export function showaddmovie(item) {

    const action={
        type:SHOWADDMOVIE,
        item
    }
    return action;

}

export function playmovie(item) {

    const action={
        type:PLAYMOVIE,
        item
    }
    return action;

}