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
  console.log(data.parts[0].exercises)
  return (
    <>
      <Part name={data.parts[0].name} exercice={data.parts[0].exercises} />
      <Part name={data.parts[1].name} exercice={data.parts[1].exercises} />
      <Part name={data.parts[2].name} exercice={data.parts[2].exercises} />
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
      <p>
        {prop.name} {prop.exercice}
      </p>
    </>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  
  return (
    <div>
      <Header title={course} />
      <Content data={{ parts }} />
      <Total total={parts[0].exercises + parts[1].exercises + parts[2].exercises } />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
