
import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Navigation extends Component {
    render() {
        return(
            <div id="navigator" className="Navigation" >
                <nav>
                    <ul>
                        <Link to={"/"} style={{ textDecoration: 'none' ,color:'inherit'}}><li>Home</li></Link>
                        <Link to={"/mymovies"} style={{ textDecoration: 'none', color:'inherit' }}><li>My Movies</li></Link>


                        <Link to={"/reports/useractivity"} style={{ textDecoration: 'none', color:'inherit' }}><li>User activity Report</li></Link>
                        <Link to={"/reports/movieactivity"} style={{ textDecoration: 'none', color:'inherit' }}><li>Movie activity report</li></Link>
                        <Link to={"/reports/financialactivity"} style={{ textDecoration: 'none', color:'inherit' }}><li>Financial report</li></Link>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Navigation;