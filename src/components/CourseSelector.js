import React from "react";

const CourseSelector = (props) => {
  // console.log("CourseSelector props", props)

  // const mappedCourses = props.courses.map(course => course.name)
  const courseList = props.courses

  return (
    <div className="sixteen wide column">
      <select className="ui dropdown" onChange={props.handleChange} >
        {/* Pass through a list of courses and map through it below to generate the individual options in your dropdown. */}
        {courseList.map((course, i) => {
          return (
            <option key={i} className="item" value={course.name}>
              {course.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default CourseSelector;
