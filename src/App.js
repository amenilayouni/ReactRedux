
import 'bootstrap/dist/css/bootstrap.min.css';
import {useSelector} from 'react-redux';
import AddTodo from './Components/AddTask';
import Filters from './Components/Filters';
import TodoList from './Components/TodoList';



function App() {
       
  let todos = useSelector(state=> state.TodoReducer.todos)
  let Filter = useSelector(state=> state.TodoReducer.Filters)
  
  return (
    <div className="App">
      <h1>todo List</h1>
      <AddTodo/>
      <TodoList todos={(Filter=='Done')? todos.Filter(el=> el.isDone==true):(Filter=='UnDone')? todos.Filter(el=> el.isDone==false): todos}/>
      <Filters/>
      
    </div>
  );
}

export default App;
