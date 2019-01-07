import React from "react";
import { Navbar, Section } from 'react-bulma-components/full';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from './home';
import Admin from './admin';

export default () => (
    <div>
      <Router>
        <div>
        <Navbar color="primary">
          <Navbar.Brand>
            <Navbar.Item renderAs="div" className="is-size-4"><Link className="has-text-white" to="/">Unipup</Link></Navbar.Item>
          </Navbar.Brand>
          <Navbar.Menu>
            <Navbar.Container position="end">
              <Navbar.Item renderAs="div"><Link className="has-text-white" to="/admin">Admin</Link></Navbar.Item>              
            </Navbar.Container>
          </Navbar.Menu>
        </Navbar>
        <Section>
          <Route exact path="/" component={Home} />
          <Route path="/admin" component={Admin} />
        </Section>
        </div>
      </Router>
    </div>
);
