import './App.css';
import TodoList from './TodoList';
import CreateTodo from './CreateTodo';

export function App() {
  return (
    <div className="App">      
      <TodoList/>
      <CreateTodo/>
    </div>
  );
}

export default App;
