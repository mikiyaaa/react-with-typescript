import React from 'react';
import TodoList from './components/TodoList';


const App: React.FunctionComponent = () => {
  const todos = [
    {id: 1, text: 'React & TypeScript'},
    {id: 2, text: 'TodoList Application'}
  ];

  return (
    <div className="App">
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
