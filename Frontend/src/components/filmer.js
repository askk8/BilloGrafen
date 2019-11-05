import React, { Component } from 'react';
import { Grid, Cell, Button, Input} from 'react-mdl';
import $ from 'jquery';
import Boka from './boka';
import { Switch, Route } from 'react-router-dom';
import { withRouter } from 'react-router';

var selectedMovie = 0;

class Filmer extends Component {
constructor(props){
super(props)
this.state={}


//Filmer

this.movieIdList = [
    475557, 420809, 420818, 559969, 449924
]





this.movieRows= []
this.movies = []
this.updateArrays()
}

updateArrays(){
this.movieIdList.forEach((id)=>{
this.fetchMovies(id)
//this.addMovie(id)
})
}    

addMovie(){
    var movieContentRow = ""
    for(let i = 0; i < this.movies.length; i++){
        movieContentRow = <table  key={this.movies[i].id}>
        <div className="movieContentTable">
        <tbody> 
            <tr>
                <td paddingLeft="200">
                    <img alt="poster"  width="200" src={this.movies[i].poster_path}/>

                </td>
                <td>
                    <div className="movieContentTitle">
                {this.movies[i].title}
                </div>
                
                <p><div className="movieContentDescription">{this.movies[i].overview}</div></p>
                <input type="button" onClick={(e) =>this.bookMovie(this.movies[i].id)} style={{marginLeft: 10}}  value="Boka"/>
                </td>
            </tr>
        </tbody></div>
    </table>

}

    this.movieRows.push(movieContentRow)
    console.log(this.movieRows)
    this.setState({rows: this.movieRows})
}

fetchMovies(id){

    const urlString ="https://api.themoviedb.org/3/movie/"+id+"?api_key=334afa804965b7ed56ac1af164c1f215"
    $.ajax({
        url: urlString,
        success:(searchResults) =>{
                         console.log("Fetched Success")
                         const results = searchResults
                        

var poster_path = "https://image.tmdb.org/t/p/w185"+results.poster_path;                    
var title = results.title;
var overview = results.overview;     
const movieObject = {id:id, poster_path:poster_path, title:title, overview:overview}

this.movies.push(movieObject)

console.log(this.movies)
this.addMovie()
                     },
                     error: (xhr, status, err) => {
                         console.error("failed to succeed")
                   }
    })

}


bookMovie(id){
    this.props.history.push('/boka')
    selectedMovie = id
    console.log(selectedMovie+"YOLSWAS")
}


render() {
    return (
    <div className="movieContents">
       
            {this.state.rows}

        </div>
        )

    }

}
export {selectedMovie};
export default Filmer;