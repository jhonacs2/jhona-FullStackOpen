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
      <Part name = {data.a.part} exercice = {data.a.exer} />
      <Part name = {data.b.part} exercice = {data.b.exer} />
      <Part name = {data.c.part} exercice = {data.c.exer} />
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
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;
  const dataCourse = {
    a: {
      part: part1,
      exer: exercises1,
    },
    b:{
      part:part2,
      exer:exercises2
    },
    c:{
      part:part3,
      exer:exercises3
    }
  };
  return (
    <div>
      <Header title={course} />
      {/* <Content part = {part1} num = {exercises1}/>
      <Content part = {part2} num = {exercises2}/>
      <Content part = {part3} num = {exercises3}/> */}
      <Content data={dataCourse} />
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
