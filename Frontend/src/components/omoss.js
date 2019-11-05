import React, { Component } from 'react';
import { Jumbotron, Grid, Row, Col, Image, Button} from 'react-bootstrap';
import './Omoss.css';


class OmOss extends Component {
    render() {
        return (
        <div className="home-grid">
            <img src="friend.jpg" width="100%" height="40%"/>
            <h3>Här är vi!</h3>
            <a style={{marginRight: 300}}><img src="Adam cropped.jpg"/></a>
            <a style={{marginRight: 300}}><img src="Arian cropped.jpg"/></a>
            <a><img src="Bill cropped.jpg"/></a>
        
            </div>
        )
    }
}

export default OmOss;