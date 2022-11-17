import React, { useRef } from 'react'
import './NewTodo.css';

// propsの型定義
type NewTodoProps = {
  onAddTodo: (todoText: string) => void;
}

const NewTodo: React.FC<NewTodoProps> = (props) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const submitFormHandler = (event: React.FormEvent) => {
    event.preventDefault();
    
    const textValue = textInputRef.current!.value;
    props.onAddTodo(textValue);
  }

  return (
    <form onSubmit={submitFormHandler}>
      <div className='form-control'>
        <label htmlFor='todo-text'>Todo Summary</label>
        <br />
        <input 
          type='text' 
          id='todo-text'
          ref={textInputRef} // useRefで参照できる
        ></input>
      </div>
      <button type='submit'>Create Todo!</button>
    </form>
  )
}

export default NewTodo