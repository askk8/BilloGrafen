import React, { Component } from 'react';
import Slideshow from './Slide.js';

class HomePage extends Component {
    render() {
        return (
        <div className="home-grid">
            <h3>𝕋𝕠𝕡𝕡𝕝𝕚𝕤𝕥𝕒𝕟</h3>
                    <Slideshow />
        </div>
        )
    }
}

export default HomePage;