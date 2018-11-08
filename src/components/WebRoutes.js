import React, { Component } from 'react';
import MovieResults from "./MovieResults";
import MyMovies from "./MyMovies";
import {Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {BrowserRouter} from "react-router-dom";
import PlayMovie from "./PlayMovie";
class WebRoutes extends Component {
    render() {
        return(
            <div >
                <Route path="/search" component={MovieResults}/>
                <Route path="/mymovies" component={MyMovies}/>
                <Route path={"/playmovie"} component={PlayMovie}/>
            </div>
        )
    }
}






export default WebRoutes;