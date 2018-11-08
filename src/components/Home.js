import React, { Component } from 'react';
import Search from './Search'
import MovieResults from "./MovieResults";
import MyFavorets from "./MyMovies";
import WebRoutes from './WebRoutes';


class Home extends Component {
    render() {
        return (
            <div >
                <WebRoutes/>
            </div>
        );
    }
}

export default Home;
