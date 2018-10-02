import React from 'react'

const EditStudent = (props) => {
  // console.log("EditStudent props", props)

  return (
    <form
      className="ui form center aligned sixteen wide column"
      onSubmit={props.handleSubmit}
    >
      <div className="inline fields">
        <div className="four wide field">
          <input
            id="name"
            type="text"
            name="name"
            value={props.currentStudent.name}
            onChange={props.update}
          />
        </div>
        <div className="four wide field">
          <input
            id="class_year"
            type="number"
            name="class_year"
            value={props.currentStudent.class_year}
            onChange={props.update}
          />
        </div>
        <div className="four wide field">
          <input
            id="percentage"
            type="number"
            name="percentage"
            value={props.currentStudent.percentage}
            onChange={props.update}
          />
        </div>
        <button className="ui button" type="submit" value="Submit">
          Submit
        </button>
      </div>
    </form>
  )
}

export default EditStudent
