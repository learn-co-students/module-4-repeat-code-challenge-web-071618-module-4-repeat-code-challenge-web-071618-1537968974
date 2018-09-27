import React from 'react'

const Student = (props) => {

  return (
    <tr>
      <td>{props.student.name}</td>
      <td>{props.student.class_year}</td>
      <td>{props.student.percentage}</td>
      <td>
        {/* <button className="ui button left" onClick={props.handleClick}> */}
        <button className="ui button left" onClick={() => props.handleClick(props.student)}>
          Edit
        </button>
      </td>
    </tr>

  )
}

export default Student
