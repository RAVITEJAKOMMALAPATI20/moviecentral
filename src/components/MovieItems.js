import React, { Component } from 'react';
import {connect } from 'react-redux';
import {addfavorite,removemovie,addmovie,showaddmovie,playmovie} from '../actions';
import MovieCard from "./MovieCard";
import {Link} from "react-router-dom";
class MovieItems extends Component {

    constructor(props){
        super(props);
        this.state={
            showmoviecard:false,
            favorated:false,
            movieid:this.props.movie.movieid,
            title:this.props.movie.title,
            genre:this.props.movie.genre,
            releasedate:this.props.movie.releasedate,
            studio:this.props.movie.studio,
            synopsis:this.props.movie.synopsis,
            image:this.props.movie.image,
            movieurl:this.props.movie.movieurl,
            actors:this.props.movie.actors,
            director:this.props.movie.director,
            country:this.props.movie.country,
            rating:this.props.movie.rating,
            availability:this.props.movie.availability,
            price:this.props.movie.price
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleAddMovie = this.handleAddMovie.bind(this);
        this.handleDeleteMovie = this.handleDeleteMovie.bind(this);
        this.handlePlayMovie = this.handlePlayMovie.bind(this);
    }
   handleClick(){
        if(!this.state.favorated){
            this.addtoFav();
        }else{
            this.removeFav();
        }
       this.setState({favorated:!this.state.favorated})
   }
    handleDeleteMovie(){
            this.props.removemovie(this.props.movie)
    }
    handlePlayMovie(){
        this.props.playmovie(this.props.movie)
    }
    handleAddMovie(){
        console.log("Hi I am here")
        this.setState({
            showmoviecard:true
        })
        this.props.showaddmovie(this.props.movie);
    }
    addtoFav(){
         this.props.addfavorite(this.props.movie);
    }
    removeFav(){
        this.props.removefavorite(this.props.movie);
    }
    displayFav(){
        if(!this.state.favorated){
            return <span className="glyphicon glyphicon-heart-empty" aria-hidden="true" onClick={this.handleClick}></span>
        }else{
           return <span className="glyphicon glyphicon-heart" aria-hidden="true" onClick={this.handleClick}></span>
        }
    }
    displayAddMovie(){
        return <div className={"MovieButton"}  onClick={this.handleAddMovie}>Add Movie</div>
    }

    displayDeleteMovie(){
        return <div className={"MovieButton"} style={{backgroundColor:"red"}} onClick={this.handleDeleteMovie}>Delete Movie</div>
    }
    displayViewMovie(){
        return <div className={"MovieButton"} style={{backgroundColor:"red"}} onClick={this.handlePlayMovie}><Link to={"/playmovie"} style={{ textDecoration: 'none', color:'inherit' }}>Play Movie</Link></div>
    }
    displayEditMovie(){
        return <div className={"MovieButton"} style={{backgroundColor:"red"}} onClick={this.handleDeleteMovie}>Edit Movie</div>
    }

    render() {
        let editmovie=null;
        let playmov=null;
        let addmovie =null;
        let overview =null;
        let moviecard =null;
        let deletemovie=null
        if(this.props.addmovie)
        addmovie=this.displayAddMovie();

        if(this.props.deletemovie)
         deletemovie=this.displayDeleteMovie();

        if(this.props.editmovie)
            editmovie=this.displayEditMovie();

        if(this.props.playmov)
            playmov=this.displayViewMovie();

        if(this.state.showmoviecard){
            console.log("HI")
            moviecard =<MovieCard movie={this.props.movie}/>
        }
        if(this.props.movie.synopsis.length>150){
            overview=this.props.movie.synopsis.substring(0,150)+"...";
        }else{
            overview=this.props.movie.synopsis;
        }
        console.log(this.props.movie);
        return (
<div className={"MovieItems"}>
                    <div className="thumbnail ">
                        <a > <img src={this.props.movie.image} alt="..."></img></a>
                            <div className="caption">
                                <h3>{this.props.movie.title}</h3>
                                <p>{overview}</p>
                                <p>Released Date : {this.props.movie.releasedate}</p>
                                <p>Ratings : <span className={"badge badge-default"}><span className="glyphicon glyphicon-star" aria-hidden="true"></span>{this.props.movie.rating}</span></p>
                                {addmovie}
                                {playmov}
                                {editmovie}
                                {deletemovie}
                                {moviecard}
                            </div>
                    </div>
</div>

        );
    }
}


function mapStateToProps(state) {
    console.log(state);
    return{
        user:state.user,
        movie:state.movie
    }
}
export default connect(null,{addfavorite,removemovie,showaddmovie,playmovie})(MovieItems);
