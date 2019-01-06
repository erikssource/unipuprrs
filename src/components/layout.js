import React from "react";
import { Navbar, Section } from 'react-bulma-components/full';

export default ({children}) => (
    <div>
      <Navbar color="primary">
        <Navbar.Brand>
          <Navbar.Item>
            <span className="is-size-3">Unipup</span>
          </Navbar.Item>
        </Navbar.Brand>
      </Navbar>
      <Section>
        {children}
      </Section>
    </div>
);
