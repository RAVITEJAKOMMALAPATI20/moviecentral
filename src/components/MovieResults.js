import React, { Component } from 'react';
import Search from './Search'
import {connect } from 'react-redux';
import MovieItems from "./MovieItems";
import Pagination from "react-js-pagination";

class MovieResults extends Component {


    constructor(props){
        super(props);
        this.state={
            currentpage:1,
            moviesperpage:10
        }

        this.handlePageChange=this.handlePageChange.bind(this);
        this.handlePaginationClick=this.handlePaginationClick.bind(this);
    }

    handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        this.setState({activePage: pageNumber});
    }

    handlePaginationClick(pageNumber) {
        this.setState({currentpage: pageNumber});
    }

    render() {
        let moviecomponents =null;
        let { properties, currentpage, moviesperpage } = this.state;
        const indexOfLastMovie= currentpage * moviesperpage;
        const indexOfFirstMovie = indexOfLastMovie - moviesperpage;
        let pagination= null;
        let currentmovies=[];

        if(this.props.movies!=undefined&&this.props.movies!==""&&this.props.movies.length>0){
             currentmovies=this.props.movies.slice(indexOfFirstMovie, indexOfLastMovie);
            moviecomponents =currentmovies.map(movie=> (<MovieItems movie={movie} addmovie={true} key={movie.id}/>));
            pagination = (<Pagination
                activePage={this.state.currentpage}
                itemsCountPerPage={10}
                totalItemsCount={this.props.movies.length}
                pageRangeDisplayed={5}
                onChange={this.handlePaginationClick}
            />);

        }



        return (
<div>
               <div className={"MovieResults"}> {moviecomponents}</div>
    <br></br>
    <div>{pagination}</div>
</div>

        );
    }
}
function mapStateToProps(state) {
    console.log(state);
    return{
        movies:state.movies
    }
}
export default  connect(mapStateToProps,{})(MovieResults);
