import React, { Component } from 'react';
import Search from './Search'
import MovieResults from "./MovieResults";
import connect from "react-redux/es/connect/connect";
import MovieItems from "./MovieItems";
import {Link} from "react-router-dom";

class MyMovies extends Component {

    constructor(props){
        super(props);
        this.state={
            query:''
        }
        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(e) {
        this.setState({ query: e.target.value });
        console.log(this.state);
    }



    render() {

        let filtermovies=this.props.mymovies.filter((movie)=>{
           return movie.title.toLowerCase().indexOf(this.state.query.toLowerCase())!==-1;
        });
        return (
            <div className={"MyMovies"}>
                <div id="search" className="Search" >
                    <input  placeholder="Filter for a movie with Title..." style={{backgroundColor:"white",color:"black"}}onChange={this.handleChange}/>
                </div>
                {
                    filtermovies.map(movie=>{
                        return <MovieItems movie={movie} usertype={"usertype"} editmovie ={true} playmov={true}deletemovie={true} key={movie.id}/>
                    })
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log(state);
    return{
        mymovies:state.mymovies
    }
}
export default connect(mapStateToProps,{})(MyMovies);
