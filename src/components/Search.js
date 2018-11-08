import React, { Component } from 'react';
import {Form,FormControl ,FormGroup,ControlLabel,Button} from 'react-bootstrap'
import  axios from 'axios';
import {API_KEY} from '../secret'
import {movies} from '../actions';
import {connect } from 'react-redux';
import {Link} from "react-router-dom";


class Search extends Component {

constructor(props){
    super(props);
    this.state={
        query:''
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
}


    handleChange(e) {
        this.setState({ query: e.target.value });
        console.log(this.state);
    }
    handleClick(){
        console.log("Query in Search JS"+this.state.query);
    let url =`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${this.state.query}&page=1&include_adult=false`;
        console.log("Query in Search JS"+this.state.query);
        console.log(url);
        fetch(url,{method:'GET'}).then(response=>response.json()).then(jsonObj=>{
            let items =jsonObj.results;
            let movies=items.map(movie=>{
                return {
                    movieid:movie.id,
                    title:movie.original_title,
                    genre:movie.genre,
                    releasedate:movie.release_date,
                    studio:movie.studio,
                    synopsis:movie.overview,
                    image:"https://image.tmdb.org/t/p/w300/"+movie.poster_path,
                    movieurl:movie.movieurl,
                    actors:movie.actors,
                    director:movie.director,
                    country:movie.country,
                    rating:movie.vote_average,
                    availability:movie.availability,
                    price:movie.price
                }
            })
            this.props.movies(movies)


        });
    }

    render() {
        return (

                <div id="search" className="Search">
                    <input  placeholder="Search for a movie with Title..." onChange={this.handleChange}/>
                    <div id="button" className="Button" onClick={this.handleClick}><Link to={"/search"} style={{ textDecoration: 'none', color:'inherit' }}>Search</Link></div>
                </div>

        );
    }
}

export default connect(null,{movies})(Search);
