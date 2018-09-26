import React from "react";
import Student from "./Student";

const StudentsList = (props) => {
  console.log("Student props", props)

  const mappedStudents = props.students.map(student => <Student student={student} key={student.id} handleClick={props.handleClick} />)

  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Student Name</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Class Year</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Course Percentage</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Edit</h3>
          </th>
        </tr>

        {mappedStudents}
      </tbody>
    </table>
  );
};

export default StudentsList;
