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
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">𝔹𝕚𝕝𝕝𝕠𝔾𝕣𝕒𝕗𝕖𝕟</Link>} scroll>   
            <Navigation>
                <Link to="/filmer">𝐅𝐢𝐥𝐦𝐞𝐫</Link>
                <Link to="/medlem">𝐌𝐞𝐝𝐥𝐞𝐦</Link>
                <Link to="/omoss">𝐎𝐦 𝐎𝐬𝐬</Link>
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}}  to="/">BilloGrafen</Link>}>
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

        <Footer className="footer" size="mini">
            <FooterSection>
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