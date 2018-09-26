import React, { Component } from 'react'
import CourseContainer from './CourseContainer'

class App extends Component {

  render() {
    return (
      <div className="ui raised segment">
        <div className="ui center aligned segment violet inverted">
          <h2>Bayside High Grade Tracker</h2>
        </div>

        <CourseContainer />

      </div>
    )
  }
}

export default App
