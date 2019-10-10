import React, { Component} from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render(){
    return (
<div className="demo-big-content">
    <Layout>
        <Header title="BilloGrafen" scroll>
            <Navigation>
                <Link to="/filmer">Filmer</Link>
                <Link to="/omoss">Om Oss</Link>
                <Link to="/medlem">Medlem</Link>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
            <Link to="/filmer">Filmer</Link>
                <Link to="/omoss">Om Oss</Link>
                <Link to="/medlem">Medlem</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
    );
  }
}

export default App;