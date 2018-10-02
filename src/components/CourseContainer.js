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
      // }, () => console.log("students array", this.state.students)))
      }))

// debugger
    this.setState({
      currentCourse: currentCourse
    // }, () => console.log(this.state.currentCourse))
    })
  }


      // //ATTEMPT AT EDIT / EDIT FORM
      handleClick = (student) => {
        // debugger
        this.setState({
          currentStudent: student
        // }, () => console.log("handleClick student is", this.state.currentStudent))
        })
      }


      // updateName = (event) => {
      //   // console.log(event.target.value)
      //     this.setState({
      //       ...this.state,
      //       currentStudent:
      //     {
      //       ...this.state.currentStudent,
      //       name: event.target.value
      //     }
      //   })
      // }
      //
      //
      // updateClassYear = (event) => {
      //   // console.log("classyear", event.target.value)
      //     this.setState({
      //       ...this.state,
      //       currentStudent:
      //     {
      //       ...this.state.currentStudent,
      //       class_year: event.target.value
      //     }
      //   })
      // }
      //
      //
      // updatePercentage = (event) => {
      //   // console.log("percentage", event.target.value)
      //   this.setState({
      //     ...this.state,
      //     currentStudent:
      //     {
      //       ...this.state.currentStudent,
      //       percentage: event.target.value
      //     }
      //   })
      // }


      update = (event) => {
        // console.log("percentage", event.target.value)
        this.setState({
          ...this.state,
          currentStudent:
          {
            ...this.state.currentStudent,   // prevents overwriting other keys in the currentStudent state not listed below
            [event.target.name]: event.target.value,   // this way requires you add 'name' to the input fields in your Form
            [event.target.name]: event.target.value,
            [event.target.name]: event.target.value
          }
        })
      }


      handleSubmit = (event) => {
        this.setState(prevState => ({
          students: prevState.students.map(
            student => (student.id === this.state.currentStudent.id ? Object.assign(student, this.state.currentStudent) : student)
          )
        }))
        event.preventDefault()
      }


  render() {
    console.log("students state", this.state.students)
    console.log("CourseContainer currentStudent", this.state.currentStudent)

    return (
      <div className="ui grid container">
        <div className="ui center aligned header sixteen wide column">
          {/* Course Title Here */}
          {this.state.currentCourse.name}
          {/* Course Title */}
        </div>

        <CourseSelector courses={this.state.courses} currentCourse={this.state.currentCourse} handleChange={this.handleChange} />

        <EditStudent currentStudent={this.state.currentStudent} updateName={this.updateName} updateClassYear={this.updateClassYear} updatePercentage={this.updatePercentage} handleSubmit={this.handleSubmit} update={this.update} />

        <StudentsList students={this.state.students} handleClick={this.handleClick} currentStudent={this.state.currentStudent} />
      </div>
    )
  }
}

export default CourseContainer
