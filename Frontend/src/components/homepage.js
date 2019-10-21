import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';
import Slideshow from './Slide.js';

class HomePage extends Component {
    render() {
        return (
        <div className="home-grid">
            <h3>ToppListan</h3>
                    <Slideshow />
        </div>
        )
    }
}

export default HomePage;