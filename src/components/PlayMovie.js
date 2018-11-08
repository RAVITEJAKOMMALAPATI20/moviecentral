import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import connect from "react-redux/es/connect/connect";

class PlayMovie extends Component {
    render() {
        return(
            <div id="playmovie" className="PlayMovie" >
                <iframe
                        src={this.props.movie.movieurl}>
                </iframe>
            </div>
        )
    }
}


function mapStateToProps(state) {
    console.log(state);
    return{
        user:state.user,
        movie:state.movie
    }
}
export default connect(mapStateToProps,{})(PlayMovie);