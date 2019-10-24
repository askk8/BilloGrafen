import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';
import $ from 'jquery';

class Filmer extends Component {
    constructor(props){
super(props)
this.state={}
// const urlString ="https:api.themoviedb.org/3/search/movie?query=Avengers&api_key=334afa804965b7ed56ac1af164c1f215"
//https:api.themoviedb.org/3/movie/76341?api_key=334afa804965b7ed56ac1af164c1f215

 const movies = [
     {id:0, poster_src:"https://image.tmdb.org/t/p/w185_and_h278_bestv2/cezWGskPY5x7GaglTTRN4Fugfb8.jpg", title: "Avengers", overview: "Avengers Movie"},
     {id:1, poster_src:"https://image.tmdb.org/t/p/w185_and_h278_bestv2/aXFC4y051yx6C7eQcemt6nPkLDa.jpg", title: "Avengers 2", overview: "2nd Avengers Movie"},
     {id:2, poster_src:"https://image.tmdb.org/t/p/w185_and_h278_bestv2/aXFC4y051yx6C7eQcemt6nPkLDa.jpg", title: "Avengers 2", overview: "2nd Avengers Movie"},
     {id:3, poster_src:"https://image.tmdb.org/t/p/w185_and_h278_bestv2/aXFC4y051yx6C7eQcemt6nPkLDa.jpg", title: "Avengers 2", overview: "2nd Avengers Movie"},
     {id:4, poster_src:"https://image.tmdb.org/t/p/w185_and_h278_bestv2/aXFC4y051yx6C7eQcemt6nPkLDa.jpg", title: "Avengers 2", overview: "2nd Avengers Movie"},

 ]


     var movieRows= []
     movies.forEach((movie)=>{
         console.log(movie.title)
         const movieContentRow = <table  key={movie.id}>
             <div className="movieContentTable">
             <tbody> 
                 <tr>
                     <td paddingLeft="200">
                         <img alt="poster"  width="200" src={movie.poster_src}/>

                     </td>
                     <td>
                         <div className="movieContentTitle">
                     {movie.title}
                     </div>
                     
                     <p><div className="movieContentDescription">{movie.overview}</div></p>
                     
                     </td>
                 </tr>
             </tbody></div>
         </table>
         movieRows.push(movieContentRow)
     })
 this.state ={rows: movieRows}

//  this.fetchMovies()
// this.performSearch()
}

// fetchMovies(){
//     const urlString ="https:api.themoviedb.org/3/search/movie?query=Avengers&api_key=334afa804965b7ed56ac1af164c1f215"
//     $.ajax({
//         url: urlString,
//         success:(searchResults) =>{
//                          console.log("Fetched Success")
//                          console.log(searchResults)
//                          const results = searchResults.results
            
//                          var movieContentRow=[]
                        
//                          results.forEach((movie) => {
//                              console.log(movie.title)
                            
//                              movieContentRow.push(movieContentRow)
//                          })
            
//                          this.setState({rows: movieContentRow})
            
//                      },
//                      error: (xhr, status, err) => {
//                          console.error("failed to succeed")
//                    }
//     })
// }
// performSearch(){
//     console.log("Perform Search Using DB")
//     const urlString ="https:api.themoviedb.org/3/search/movie?query=Avengers&api_key=334afa804965b7ed56ac1af164c1f215"
//     $.ajax({
//         url: urlString,
//         success: (searchResults) =>{
//             console.log("Fetched Success")
//             console.log(searchResults)
//             const results = searchResults.results

//             var movieContentRow=[]
            
//             results.forEach((movie) => {
//                 console.log(movie.title)
                
//                 movieContentRow.push(movieContentRow)
//             })

//             this.setState({rows: movieContentRow})

//         },
//         error: (xhr, status, err) => {
//             console.error("failed to succeed")
//         }

        

//     })
// }

    render() {
        return (
        <div className="movieContents">

            <input style={{
            fontSize:24,
            display:'block',
            width:"100%",
            paddingTop:3,
            paddingBottom:3,
            paddingLeft:16
            }}
            placeholder="Enter Search term"/>
  
            {this.state.rows}

        </div>
        )
    }
}

export default Filmer;