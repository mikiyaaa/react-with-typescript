import React from 'react'
import { NumberLiteralType } from 'typescript'

// propsの型定義
interface TodoListProps {
  todos: { 
    id: number, 
    text: string 
  }[]
}

const TodoList: React.FC<TodoListProps> = (props) => {

  return (
    <ul>
        {props.todos.map((todo, index) => {
            return (
                <li key={index}>{todo.id}: {todo.text}</li>
            )
        })}
    </ul>
  )
}

export default TodoList