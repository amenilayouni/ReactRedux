import React, { useState } from 'react'

import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { DeleteAdd,ToggleTodo, } from '../Redux/TodoSlice'
      
const Todo = ({el}) => {
    let [isEdited,setIsEdited]=useState(false)
    let [updatedTask,setUpdatedTask]=useState('')
    let dispatch=useDispatch()
    const updated =()=>{
      setIsEdited(!isEdited)
    }
    
    
  return (
    <div style={{display:'flex',marginTop:'40px'}}>
      {isEdited?<input type='text' value={updatedTask} onChange={(e)=>setUpdatedTask(e.target.value)}/>: <h2 style={{width:'50px',marginRight:'10px', textDecoration:el.isDone ? 'line-through' : ''}}>{el.task}</h2>
      }

        <Button onClick={()=>dispatch(DeleteAdd(el.id))} variant="danger"> Delete</Button>
        <Button onClick={()=>dispatch(ToggleTodo(el.id))} variant="light">{el.isDone ?'Done' : 'UnDone'}</Button>
        <Button onClick={updated}variant="primary">Update</Button>
    </div>
  )
}

export default Todo