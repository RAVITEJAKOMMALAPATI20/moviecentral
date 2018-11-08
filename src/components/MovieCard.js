
import React, { Component } from 'react';
import Input from "muicss/lib/react/input";
import connect from "react-redux/es/connect/connect";
import {addfavorite,removefavorite,addmovie} from '../actions';
class MovieCard extends Component {



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
            price:this.props.movie.price,
            showStore:true
        }

        this.addMovie=this.addMovie.bind(this);
        this.closeMovieCard=this.closeMovieCard.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick(){

    }
    handleChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    componentWillMount(){
        let url ="http://www.omdbapi.com/?i=tt3896198&apikey=194e200d&t="+this.props.movie.title;
        fetch(url,{method:'GET'}).then(response=>response.json()).then(jsonObj=>{
         console.log(JSON.stringify(jsonObj)+"kkkkkkk")
          this.setState({
              director:jsonObj.Director,
              studio:jsonObj.Production,
              country:jsonObj.Country,
              actors:jsonObj.Actors,
              genre:jsonObj.Genre
          })})
    }






    addMovie(){
        this.props.addmovie(this.state);
        this.closeMovieCard();
    }
    closeMovieCard(){
        this.setState({
            showStore:false
        })
    }


    render() {
        console.log("ok");


        return(


            <div id="movieCard" className="MovieCard" style={{display: this.state.showStore ? 'flex' : 'none' }}>
                 <img src={this.props.movie.image} alt="..."></img>
               <div><h4></h4></div>

                <div className={"AboutMovie "}>
                    <div> <h4>Title</h4><input  name={"title"} onChange={this.handleChange} defaultValue={this.state.title}/></div>
                    <div> <h4>Director</h4><input  name={"director"}onChange={this.handleChange} defaultValue={this.state.director}/></div>
                    <div> <h4>ImageUrl</h4><input name={"image"} onChange={this.handleChange} defaultValue={this.state.image}/></div>
                    <div> <h4>Studio</h4><input  name={"studio"} onChange={this.handleChange} defaultValue={this.state.studio}/></div>
                    <div> <h4>Actors</h4><input  name={"actors"} onChange={this.handleChange} defaultValue={this.state.actors}/></div>
                    <div> <h4>Availability</h4><input name={"availability"} onChange={this.handleChange} defaultValue={this.state.availability} /></div>
                    <div> <h4>MovieUrl</h4><input name={"movieurl"}  onChange={this.handleChange} defaultValue={this.state.movieurl} required={true}/></div>
                </div>

                <div className={"MovieButton2"} onClick={this.addMovie}>Add This Movie</div>
                <div className={"MovieButton3"} data-dismiss="modal" onClick={this.closeMovieCard}>Close</div>

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
export default connect(mapStateToProps,{addmovie})(MovieCard);