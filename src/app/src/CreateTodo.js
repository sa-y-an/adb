import { useState } from "react";

const CreateTodo = () => {
  const [todo, setTodo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = { todo };
    console.log(JSON.stringify(newTodo))

    fetch('http://localhost:8000/todos/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTodo)
    }).then(() => {
      window.location.reload();
    })
  }


    return ( <div>
      <div>

        <form onSubmit={handleSubmit}>
          <div>
            <label for="todo">ToDo: </label>
            <input 
            type="text"
            required
            value={todo}
            onChange={(e) => setTodo(e.target.value)}  
            />
          </div>
          <div style={{"marginTop": "5px"}}>
            <button>Add Todo</button>
          </div>
        </form>
      </div>

    </div> );
}
 
export default CreateTodo;