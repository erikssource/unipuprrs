import React, {Component} from "react";
import { Box, Media, Image, Button, Content, Level } from "react-bulma-components/full";
import { deleteCourse } from "../redux/actions";
import store from "../redux/store";

export class AdminCourse extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    store.dispatch(deleteCourse(this.props.course.id))
  }

  render() {
    const { course } = this.props;
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