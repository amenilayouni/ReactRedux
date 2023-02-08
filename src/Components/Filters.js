import React from 'react'
import {Button  } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { FilterByAll, FilterByDone, FilterByUnDone } from '../Redux/TodoSlice';

const Filters = () => {
  let dispatch=useDispatch()
  return (
    <div style={{width:'50px',marginRight:'10px',display:'flex',marginTop:'40px'}}>
      <Button onClick={()=>dispatch(FilterByAll())} variant="light">All</Button>
       <Button onClick={()=>dispatch(FilterByDone())} variant="success">Done</Button>
       <Button onClick={()=>dispatch(FilterByUnDone())} variant="danger">UnDone</Button>
    </div>
  )
}

export default Filters