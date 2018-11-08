import axios from "axios";
import {MOVIES} from "./index";

export const GETPLAYREPORT =   "GETPLAYSREPORT";
export const GETTOPPLAYS    =   "GETTOPPLAYS";

export function getplayreport(item) {

    const action={
        type:GETPLAYREPORT,
        item
    }
    return action;
}

export function gettopplays(item) {

    const action={
        type:GETTOPPLAYS,
        item
    }
    return action;
}