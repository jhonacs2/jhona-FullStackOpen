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
 
  return (
    <>
      <Part name={data[0].name} exercice={data[0].exercises} />
      <Part name={data[1].name} exercice={data[1].exercises} />
      <Part name={data[2].name} exercice={data[2].exercises} />
    </>
  );
};

const Total = ({total}) => {
  const sum = total[0].exercises + total[1].exercises + total[2].exercises
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
      <Content data={ parts } />
      <Total total={parts} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
