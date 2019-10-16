import React, { Component} from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer,Footer,FooterSection,FooterLinkList, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render(){
    return (
<div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">BilloGrafen</Link>} scroll>
            
            <Navigation>
                <Link to="/filmer">Filmer</Link>
                <Link to="/medlem">Medlem</Link>
                <Link to="/omoss">Om Oss</Link>
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">BilloGrafen</Link>}>
            <Navigation>
                <Link to="/filmer">Filmer</Link>        
                <Link to="/medlem">Medlem</Link>
                <Link to="/omoss">Om Oss</Link>
            </Navigation>
        </Drawer>

        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
        
        <Footer className="header-color" size="mini">
        <FooterSection type="left" logo="Title">
            <FooterLinkList>
                <a href="#">Help</a>
                <a href="#">Privacy & Terms</a>
            </FooterLinkList>
        </FooterSection>
    </Footer>

    </Layout>
</div>
    );
  }
}

export default App;