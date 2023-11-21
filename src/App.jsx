import React from 'react';

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

  const totalExercises = course.parts.reduce((total, part) => {
    console.log('what is happening',total,part)
    return total + part.exercises
  }, 0);

  return (
    <div>
      <h1>{course.name}</h1>
      {course.parts.map(part => (
        <p key={part.id}>
          {part.name} - {part.exercises} exercises
        </p>
      ))}
      <p>Total of {totalExercises} exercises</p>
    </div>
  )
}

export default App;
