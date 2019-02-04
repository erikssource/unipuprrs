import React, {Component} from "react";
import { Box, Media, Image, Button, Content, Level } from "react-bulma-components/full";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom"; 
import { deleteCourse } from "../redux/actions";

class AdminCourse extends Component {
  constructor(props) {
    super(props);
    console.log("PROPS: ", props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    this.props.dispatch(deleteCourse(this.props.course.id))
  }

  render() {
    const course = this.props.course;
    return (
      <Box>
        <Media>
          <Media.Item renderAs="figure" position="left">
            <Image renderas="p" size={96} alt="course icon" src={course.image} />
          </Media.Item>
          <Media.Item>
            <Content>
              <p>
                <strong>{course.title}</strong>
                <br />
                {course.summary}
              </p>
            </Content>
            <Button color="danger" onClick={this.handleDelete}>Delete</Button>
          </Media.Item>
        </Media>
      </Box>
    );
  }
}

export default withRouter(connect(
  state => ({})
)(AdminCourse))
