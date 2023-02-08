import React from 'react'
import Todo from './Todo'



const TodoList = ({todos}) => {

  return (
    <div>
        {todos.map(el => <Todo el={el} key={el.id}/>)}
    </div>
  )
}

export default TodoList