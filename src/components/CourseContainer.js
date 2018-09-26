import React, { Component } from "react"
import CourseSelector from "./CourseSelector"
import EditStudent from "./EditStudent"
import StudentsList from "./StudentsList"

class CourseContainer extends Component {
  state = {
    students: [],
    currentCourse: {},
    currentStudent: {},
    courses: []
  }

  componentDidMount() {
    fetch('https://bayside-high.herokuapp.com/api/v1/users/137/courses')
    .then(res => res.json())
    .then(courseData => this.setState({
      courses: courseData
    }))
    // }, () => console.log(this.state.courses)))
  }

  handleChange = event => {
    const currentCourse = this.state.courses.find(c=>c.name===event.target.value)

    const fetchCurrentStudents = fetch(`https://bayside-high.herokuapp.com/api/v1/users/137/courses/${currentCourse.id}`)
      .then(res => res.json())
      .then(studentData => this.setState({
        students: studentData.students
      }, () => console.log("students array", this.state.students)))

// debugger
    this.setState({
      currentCourse: currentCourse
    }, () => console.log(this.state.currentCourse))
  }


  //ATTEMPT AT EDIT / EDIT FORM
  handleClick = (event) => {
    this.setState({
      currentStudent: event.target.parentElement.parentElement
    }, () => console.log("parent element is", this.state.currentStudent))
  }

  // currentStudent: event.target.parentElement.parentElement.querySelector("td")



  render() {

    console.log("CourseContainer currentCourse", this.state.currentCourse)

    return (
      <div className="ui grid container">
        <div className="ui center aligned header sixteen wide column">
          {/* Course Title Here */}
          {this.state.currentCourse.name}
          {/* Course Title */}
        </div>

        <CourseSelector courses={this.state.courses} currentCourse={this.state.currentCourse} handleChange={this.handleChange} />

        <EditStudent currentStudent={this.state.currentStudent} />

        <StudentsList students={this.state.students} handleClick={this.handleClick} />
      </div>
    )
  }
}

export default CourseContainer
