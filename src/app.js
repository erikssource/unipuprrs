import React from "react";
import { Heading, Hero, Container, Section } from 'react-bulma-components/full';

import Layout from './components/layout';
import CourseList from './components/course_list';

export default () => {
  return (
    <Layout>
      <Hero color="info">
        <Hero.Body>
          <Container>
            <Heading>University Pup Demo</Heading>
            <Heading subtitle size={3}>
              Course Catalog
            </Heading>
          </Container>
        </Hero.Body>
      </Hero>
      <Section>
        <CourseList />
      </Section>
    </Layout>
  );
}