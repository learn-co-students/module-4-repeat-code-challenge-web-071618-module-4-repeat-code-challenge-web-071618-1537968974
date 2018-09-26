import React from 'react'

const EditStudent = (props) => {

  return (
    <form
      className="ui form center aligned sixteen wide column"
      onSubmit={""}
    >
      <div className="inline fields">
        <div className="four wide field">
          <input
            id="name"
            type="text"
            value={props.currentStudent.name}
          />
        </div>
        <div className="four wide field">
          <input
            id="class_year"
            type="number"
            value={props.currentStudent.class_year}
          />
        </div>
        <div className="four wide field">
          <input
            id="percentage"
            type="number"
            value={props.currentStudent.percentage}
          />
        </div>
        <button className="ui button" type="submit">
          Submit
        </button>
      </div>
    </form>
  )
}

export default EditStudent
