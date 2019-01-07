import React from "react";
import { Heading, Hero, Container, Section } from 'react-bulma-components/full';
import CourseList from './course_list';

export default() => {
  return (
    <div>
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
    </div>
  );
}