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
    <h2>{course.name}</h2>
  );
}

const Course = ({ course }) => {
  const totalExercises = course.parts.reduce((total, part) => {
    console.log('what is happening',total,part)
    return total + part.exercises
  }, 0);
  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <p>Total of {totalExercises} exercises</p>
    </div>
  );
}

export default Course;
