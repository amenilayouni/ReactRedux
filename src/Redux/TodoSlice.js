
import { createSlice } from '@reduxjs/toolkit'


const TodoSlice = createSlice ({
  name : 'todos',
  initialState: {
    todos:[{
      id:Math.random(),
      task:'Learn Express',
      isDone:false,
  }],
  filter:'All'
  } ,
  reducers:{
    AddTodos:(state,action) => {
      state.todos.push(action.payload)

    },
    DeleteAdd:(state,{type,payload}) => {
      const deleted= state.todos.filter(el=> el.id !==payload)
      state.todos=deleted

    },
    ToggleTodo:(state,action)=>{
      state.todos.map(el=> (el.id == action.payload)? el.isDone= !el.isDone : el.isDone)

    },
    FilterByDone:(state)=>{
      state.filter='Done'

    },
    FilterByUnDone:(state)=>{
      state.filter='UnDone'

    },
    FilterByAll:(state)=>{
      state.filter='All'

    }
  }


})
 


export default TodoSlice.reducer
export const {AddTodos,DeleteAdd,ToggleTodo, FilterByAll,FilterByUnDone,FilterByDone} = TodoSlice.actions