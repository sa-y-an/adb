import { useState } from "react";

const CreateTodo = () => {
  const [todo, setTodo] = useState('');
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);


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
    .catch(err => {
      // auto catches network / connection error
      setIsPending(false);
      setError(err.message);
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
            { !isPending && <button>Add Todo</button>}
            { isPending && <button disabled>Adding Todo ...</button>}
            { error && <div>{ error }</div> }
          </div>
        </form>
      </div>

    </div> );
}
 
export default CreateTodo;