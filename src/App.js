import React,{useState} from 'react'
import InputBox from './Components/InputBox'
import TodoList from './Components/TodoList';
import './App.css'

function App() {
  const [todoList, setTodoList] = useState([]);

  let addList = (InputText) => {
    if(InputText !== '') {
      setTodoList([...todoList,InputText]);
    }
  }

  const deleteListItem = (key) => {
    let newTodoList = [...todoList];
    newTodoList.splice(key, 1);
    setTodoList([...newTodoList]);
  }
  return (
    <div className='todo-app-container'>
      <div className='main-container'>
      <InputBox addList={addList}/>
      <h2>Tasks to do...</h2>
      <hr />
      <div className='list-container'>
        {todoList.map((listItem, i) => {
          return (
            <TodoList deleteItem={deleteListItem} index={i} key={i} item={listItem} />
          )
        })}
      </div>
    </div>
  </div>
  )
}

export default App