const Todos = ({todos,title}) => {
    console.log(todos)

    return ( <div>
        <h2>
            {title}
        </h2>
        <div>
            <ul>
                {
                    todos.map( (todo) => {
                        <li>
                            {todo.todo}
                        </li>
                    } )
                }
            </ul>
        </div>
    </div> );
}
 
export default Todos;<div>
</div>