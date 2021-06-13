import React from "react";

const Part = ({ parts }) => {
  return (
    <>
      {parts.map((part) => (
        <p key={part.id}>
          {part.name} {part.exercises}{" "}
        </p>
      ))}
      <p>
        Total of{" "}
        {parts.reduce((s, p) => {
          return s + p.exercises;
        }, 0)}{" "}
        exercises
      </p>
    </>
  );
};

export default Part;
