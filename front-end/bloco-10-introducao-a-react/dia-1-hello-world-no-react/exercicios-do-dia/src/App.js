import React from 'react';
import './App.css';


const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}

const tasksOfTheDay = ['arrumar cama', 'banhar', 'escovar dentes', 'tomar café', 'estudar pré trybe'];

class App extends React.Component {
  render () {
    return (
      <ul>{tasksOfTheDay.map((tarefa) => Task(tarefa))}</ul>
    );
  }
}

export default App;




