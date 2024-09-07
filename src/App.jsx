import './components/Todo/todo.css';
import DoNew from './components/Todo/DoNew';
import DoData from './components/Todo/DoData';
const App = () => {

  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <DoNew />
      <DoData />
    </div>
  )
}

export default App
