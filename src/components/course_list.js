import React, {Component} from "react";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import { Card, Heading, Tile } from "react-bulma-components/full";
import { fetchCourses } from "../redux/actions";
import store from "../redux/store";

export class CourseList extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    store.dispatch(fetchCourses());
  }
  render() {
    const { courses } = this.props;
    return (
      <Tile kind="ancestor">
      {courses && courses.length 
        ? courses.map((course) => {
          return (
            <Tile key={`course-${course.id}`} size={3} renderAs="article">
            <Card>
              <Card.Image src={course.image}>
              </Card.Image>
              <Card.Content>
                <Heading size={4}>{course.title}</Heading>
                <span>{course.summary}</span>
              </Card.Content>
            </Card>
            </Tile>
          );
        })
        : "No Courses" }
      </Tile>
    )
  }
}

export default withRouter(connect(
  state => ({courses: state.courses})
)(CourseList))


