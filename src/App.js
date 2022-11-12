import './App.css';
import { useDispatch, useSelector } from 'react-redux'; 
import { useState } from 'react';
import { todoActionTypes } from './store/actionTypes/todoActionTypes';

// ***redux***
// npm install redux react-redux

// state: nơi chưa biến
// view: components
// action: set state

function App() {
  
  const todosState = useSelector(state => state.todos);
 
  // console.log(todos)
  const dispatch = useDispatch();
  const [todoValue, setTodoValue] = useState('');

  const handleAddTodo = () => {
    if(!todoValue) return;
    // state cua store chi co the thay the bang dispatch
    dispatch({
      type: todoActionTypes.ADD_TODO,
      payload: todoValue
    })
  }


  // POST REDUCER
  // Get post from API
  // Luu post vao producer
  // Show post len
  return (
    <div className="App">
      <button onClick={() => {
        dispatch({
          type: 'TEST'
        })
      }}>Test Btn</button><br />

      <input value={todoValue} onChange={(e) => setTodoValue(e.target.value)} />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {
          todosState.todos.map((item) => {
            return <li key={item}>{item}</li>
          })
        }
      </ul>
    </div>
  );
}

export default App;
