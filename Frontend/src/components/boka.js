import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Grid, Cell} from 'react-mdl';
import $ from 'jquery';
import Filmer from './filmer';
import  {selectedMovie} from './filmer.js';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

class boka extends Component{
    constructor(props){
        super(props)
        this.state={}




this.activeMovie = []
this.fetchMovies(selectedMovie)
this.movieRows= []
this.thisMovie()
}

thisMovie(){
    console.log("Yolo")
  console.log(selectedMovie)  
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

this.activeMovie.push(movieObject)
this.bookMovie()
                     },
                     error: (xhr, status, err) => {
                         console.error("failed to succeed")
                   }
    })

}

bookMovie(){
    var movieContentRow = ""
    
        movieContentRow = <table  key={this.activeMovie[0].id}>
        <div style={{marginRight: 300, marginLeft: 300}} className="bookContentTable">
        <tbody> 
            <tr>
                <td>
                    <img alt="poster"  src={this.activeMovie[0].poster_path}/>

                </td>
                <td>
                    <div className="movieContentTitle">
                {this.activeMovie[0].title}
                </div>
                
                <p><div className="movieContentDescription">{this.activeMovie[0].overview}</div></p>
                {/* <input type="button" onClick={(e) =>this.bookMovie(this.thisMovie[i].id)} value="Boka"/> */}
                </td>
            </tr>
        </tbody>
        <h1></h1>
        <div style={{marginLeft: 620}}>
        <Button className="btnColor">Boka</Button>
        </div>
        </div>
    </table>
console.log(this.activeMovie[0].title)
this.movieRows.push(movieContentRow)
this.setState({rows: this.movieRows})
}











    render() {
        return (
        <div style={{width: '100%', height:'100%', margin: 'auto'}}>
            
            {this.state.rows}
        </div>

        )
    }



}
export default boka;