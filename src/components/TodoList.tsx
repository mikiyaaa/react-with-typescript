import React from 'react'
import { NumberLiteralType } from 'typescript'

// propsの型定義
interface TodoListProps {
  todos: { 
    id: number, 
    text: string,
  }[],
  onDeleteTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = (props) => {

  return (
    <ul>
        {props.todos.map((todo, index) => {
            return (
                <li key={index}>
                  <span>{todo.text}</span>
                  <button onClick={props.onDeleteTodo.bind(null, todo.id)}>delete</button>  
                </li>
            )
        })}
    </ul>
  )
}

export default TodoList