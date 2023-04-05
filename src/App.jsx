import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { createTodo, deleteTodo, editTodo } from './Redux/Reducer';
import { useRef } from 'react';

function App() {
  const dispatch = useDispatch();
  const form = useRef()
  const listOfTodos = useSelector((state) => state.todoApp.todo);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createTodo(e.target.input.value))
    e.target.input.value = ""
  }
  const handleEdit = (e) => {
    e.preventDefault();
    if (e.target.inputDisabled.disabled) {
      e.target.inputDisabled.disabled = false;

    } else {
      dispatch(editTodo({ text: e.target.inputDisabled.value, id: e.target.inputDisabled.id }))
      text: e.target.inputDisabled.value = ""
    }
  }

  return (
    <div className="App">
      <div className='container'>
        {listOfTodos ? (listOfTodos.map(e => {
          return <div className='todos' key={e.id}>
            <p>{e.text}</p>

            <form onSubmit={handleEdit}>
              <input id={e.id} name='inputDisabled' disabled={true}></input>
              <button type='submit'>Edit</button>
            </form>

            <button onClick={() => dispatch(deleteTodo({ id: e.id }))}>x</button>
          </div>
        })) : ""}
      </div>
      <div className='actions'>
        <form onSubmit={handleSubmit}>
          <input name='input' placeholder='Add-Todo'></input>
          <button type='submit'>Crear tarea</button>
        </form>
      </div>
    </div>
  )
}

export default App
