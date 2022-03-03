const Todos = ({todos,title}) => {
    console.log(todos)

    return ( <div>
        <h2>
            {title}
        </h2>
        <div>
            <div>
                {   todos.map( (todo) => (
                        <p key = {todo._id}>
                            {todo.todo}
                        </p>
                 ))
                }
            </div>
        </div>
    </div> );
}
 
export default Todos;<div>
</div>