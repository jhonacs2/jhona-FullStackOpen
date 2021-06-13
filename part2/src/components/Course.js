import React from "react";
import Header from "./Header";

const Course = ({ courses }) => {
  
  return (
    <div>
      {courses.map((course,index) => {
        return <Header key = {index} course = {course}/>
      })}

      {/* <h1>{course.name}</h1>
            <Part parts = {course.parts}/> */}
    </div>
  );
};

export default Course;
