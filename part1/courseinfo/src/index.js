import React from "react";
import ReactDOM from "react-dom";

const Header = (props) => {
  return (
    <>
      <h1>{props.title}</h1>
    </>
  );
};

const Content = ({data}) => {
  console.log(data);
  return (
    <>
      <Part name = {data.part1.name} exercice = {data.part1.exercises} />
      <Part name = {data.part2.name} exercice = {data.part2.exercises} />
      <Part name = {data.part3.name} exercice = {data.part3.exercises} />
    </>
  );
};

const Total = (props) => {
  return (
    <>
      <p>Total Exercises : {props.total} </p>
    </>
  );
};

const Part = (prop) => {
  return (
    <>
      <p>{prop.name} {prop.exercice}</p>
    </>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = {
    name:'Fundamentals of React',
    exercises:10
  }
  const part2 = {
    name:'Using props to pass data',
    exercises:7
  }
  const part3 = {
    name:'Using props to pass data',
    exercises:14
  }
  return (
    <div>
      <Header title={course} />
      <Content data={{part1,part2,part3}} />
      <Total total={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
