import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Grid, Cell} from 'react-mdl';
import $ from 'jquery';
import Filmer from './filmer';
import  {selectedMovie} from './filmer.js';
import { bool } from 'prop-types';

var seat1 = true
var seat2 = true

class boka extends Component{
    constructor(props){
        super(props)
        this.state={}



this.bookMovieSeat=[[]]
this.activeMovie = []
this.fetchMovies(selectedMovie)
this.movieRows= []
this.thisMovie()


// SKA VA SAMMA SOM PÅ FILMER
this.movieIdList = [
    279, 280, 278, 281, 2000, 250, 2001
]
/////////////////////////////
//this.makeSeats()


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
               
                <div style={{marginLeft: 130}} className="movieTimeAndDate">Lördag 10 November Klockan 20:00 - Salong 1</div>
                <input style={{marginRight: 50, marginLeft: 200}} className="btnColor" type="button" onClick={(e) =>this.bokaStol(1)} value="Boka Stol 1"/>
                <input className="btnColor" type="button" onClick={(e) =>this.bokaStol(2)} value="Boka Stol 2"/>
                
                </td>
            </tr>
        </tbody></div>
    </table>
console.log(this.activeMovie[0].title)
this.movieRows.push(movieContentRow)
this.setState({rows: this.movieRows})
}
bokaStol(id){
    console.log(seat1)
alert("Nu har du Bokat din stol!");
if (id === 1 && seat1===true){
    seat1=false
    return
}
if (id === 2 && seat2===true){
    seat2=false
    return
}
 if (id === 1 && seat1===false){
     seat1=true
     return
 }
if (id === 2 && seat2===false){
    seat1=true
    return
}
}
// makeSeats(){
//  this.movieIdList.forEach((id)=>{


    
//      })
     
// }








    render() {
        return (
        <div style={{width: '100%', height:'100%', margin: 'auto'}}>
            
            {this.state.rows}
        </div>

        )
    }



}
export default boka;