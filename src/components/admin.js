import React, {Component} from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom"; 
import { fetchCourses, addCourse } from "../redux/actions";

import { Section, 
  Heading, 
  Button, 
  Box, 
  Message } from "react-bulma-components/full";
import {
  Field,
  Label,
  Control,
  Input,
  Select,
  Textarea
} from "react-bulma-components/lib/components/form"
import AdminCourse from "./admin-course";

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      summary: "",
      description: "",
      image: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.addCourse = this.addCourse.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(fetchCourses());
  }

  addCourse() {
    const course = {
      title: this.state.title,
      summary: this.state.summary,
      description: this.state.description,
      image: this.state.image
    }
    this.props.dispatch(addCourse(course));
    this.setState(
      {
        title: "",
        summary: "",
        description: "",
        image: ""
      }
    )
  }

  handleChange() {
    const target = event.target;
    this.setState({
      [target.name]: target.value

    });
  }

  render() {
    const courses = this.props.courses;
    let addButton;

    if (this.state.valid) {
      addButton = <Button color="success" onClick={this.addCourse} />;
    }
    else {
      addButton = <Message color="danger"><Message.Body>All Fields Must Have a Value</Message.Body></Message>
    }

    return (
      <Section>
        <Heading>Courses</Heading>   
        {courses && courses.length ? courses.map((course) => {
          return (
            <AdminCourse key={`ac-${course.id}`} course={course}></AdminCourse>
          );
        }) : "No Courses Available"}
        <p>&nbsp;</p>
        <Box>
          <Heading>Create a New Course</Heading>
          <Field>
            <Label>
              Select Image from Media Library
            </Label>
            <Control>
              <Select name="image" value={this.state.image} onChange={this.handleChange}>
                <option value="">Select</option>
                <option value="http://localhost/static/a101.jpg">Galaxy</option>
                <option value="http://localhost/static/vuejs.jpg">Vue Slide</option>
                <option value="http://localhost/static/bt101.jpg">Cromwell Tank</option>
              </Select>
            </Control>
          </Field>
          <Field>
            <Label>
              Title
            </Label>
            <Control>
              <Input name="title" type="text" value={this.state.title} onChange={this.handleChange} />
            </Control>
          </Field>
          <Field>
            <Label>
              Summary
            </Label>
            <Control>
              <Input name="summary" type="text" value={this.state.summary} onChange={this.handleChange} />
            </Control>
          </Field>
          <Field>
            <Label>
              Description
            </Label>
            <Control>
              <Textarea name="description" value={this.state.description} onChange={this.handleChange} />
            </Control>
          </Field>
          { (this.state.title.length > 0 &&
             this.state.image.length > 0 &&
             this.state.summary.length > 0 &&
             this.state.description.length > 0) ? 
              <Button color="success" onClick={this.addCourse}>Add Course</Button> : 
              <Message color="danger"><Message.Body>All Fields Must Have a Value</Message.Body></Message> }
        </Box>
      </Section>
    );
  }
}

export default withRouter(connect(
  state => ({courses: state.courses})
)(Admin))