import React from "react";
import ReactDOM from "react-dom";

const Header = ({ title }) => {
  return (
    <>
      <h1>{title.name}</h1>
    </>
  );
};

const Content = ({ data }) => {
  const { parts } = data;

  return (
    <>
      <Part name={parts[0].name} exercice={parts[0].exercises} />
      <Part name={parts[1].name} exercice={parts[1].exercises} />
      <Part name={parts[2].name} exercice={parts[2].exercises} />
    </>
  );
};

const Total = ({ total }) => {
  const { parts } = total
  const [one,two,three] = parts
  const sum = one.exercises + two.exercises + three.exercises
  
  return (
    <>
      <p>Total Exercises : {sum}</p>
    </>
  );
};

const Part = (prop) => {
  return (
    <>
      <p>
        {prop.name} {prop.exercice}
      </p>
    </>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header title={course} />
      <Content data={course} />
      <Total total={course} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
