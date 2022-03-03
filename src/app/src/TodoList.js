import { useState, useEffect } from "react";
import Todos from "./Todos";

const TodoList = () => {

    const [todos, setTodos] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        setTimeout(() => {
          fetch('http://localhost:8000/todos/')
          .then(res => {
            if (!res.ok) { // error coming back from server
              throw Error('could not fetch the data for that resource');
            } 
            return res.json();
          })
          .then(data => {
            setIsPending(false);
            setTodos(data);
            setError(null);
          })
          .catch(err => {
            // auto catches network / connection error
            setIsPending(false);
            setError(err.message);
          })
        }, 0);
      }, [])
    


    return ( 
        <div className="content">
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> }
            { todos && <Todos todos={todos} title={"List of Todos"} />}
        </div>
     );
}
 
export default TodoList;