import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import {AddTodos} from '../Redux/TodoSlice'

const AddTodo = () => {
  let dispatch=useDispatch()
  let [todo,setTodo] = useState('')
  const Added =()=>{
    dispatch(AddTodos({id:Math.random(),task:todo, isDone:false}))
    setTodo('')
  } 
  return (
    <div>
      <Form style={{display:'flex' }}>
      <Form.Group className="mb-3" controlId="formBasicText">
       
        <Form.Control value={todo} onChange={(e)=>setTodo(e.target.value)} style={{with:'300px'}} type="text" placeholder= "Enter text" />
      </Form.Group>
      <Button onClick={Added} variant= "primary" > Add</Button>
      
      </Form>
    </div>
  )
}

export default AddTodo
