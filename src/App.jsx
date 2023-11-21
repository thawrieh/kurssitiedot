import React from 'react';

const Part = ({ part }) => {
  return (
    <p>
      {part.name} - {part.exercises} exercises
    </p>
  );
}

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map(part => (
        <Part key={part.id} part={part} />
      ))}
    </div>
  );
}

const Header = ({ course }) => {
  return (
    <h1>{course.name}</h1>
  );
}

const Course = ({ course }) => {
  const totalExercises = course.parts.reduce((total, part) => total + part.exercises, 0);

  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <p>Total of {totalExercises} exercises</p>
    </div>
  );
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

export default App;
