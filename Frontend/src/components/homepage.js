import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';

class HomePage extends Component {
    render() {
        return (
        <div className="home-grid">
            <Grid>
                <Cell col={12}>
                    <img
                        src="husse.jpg"
                        alt="avatar"
                        className="avatar-img"
                        />
                        
                        <div className="banner-text">
                            <h1>Husse In The Building</h1> 
                            <h1>Husse In The Building</h1> 
                            <h1>Husse In The Building</h1> 
                            <h1>Husse In The Building</h1> 
                            <h1>Husse In The Building</h1> 
                            <h1>Husse In The Building</h1> 
                            <h1>Husse In The Building</h1>  
                            <h1>Husse In The Building</h1> 
                        </div>     
                                         
                </Cell>
            </Grid>
        </div>
        )
    }
}

export default HomePage;