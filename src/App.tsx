import React, { useState } from 'react';
import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';
import { Todo } from './todo.model';

const App: React.FunctionComponent = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoDeleteHandler = (todoId: number) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== todoId));
  }

  const todoAddHandler = (text: string) => {
    const newTodo = { id: Math.random(), text: text };

    setTodos( prevTodos => [...prevTodos, newTodo]);
  }

  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList todos={todos} onDeleteTodo={todoDeleteHandler} />
    </div>
  );
}

export default App;
