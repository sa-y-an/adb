import { useState, useEffect } from "react";
import Todos from "./Todos";

const TodoList = () => {

    const [todos, setTodos] = useState(null);

    useEffect( () => {
        fetch(`http://localhost:8000/todos/`)
        .then( (res) => {
            return res.json();
        } )
        .then( (data) => {
            setTodos(data);
            // console.log(data);
        })
    }, [])


    return ( 
        <div className="content">
            { todos && <Todos todos={todos} title={"List of Todos"} />}
        </div>
     );
}
 
export default TodoList;