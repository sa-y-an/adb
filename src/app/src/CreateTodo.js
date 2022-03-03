const CreateTodo = () => {
    return ( <div>
      <div>
        <form>
          <div>
            <label for="todo">ToDo: </label>
            <input type="text" />
          </div>
          <div style={{"marginTop": "5px"}}>
            <button>Add ToDo!</button>
          </div>
        </form>
      </div>

    </div> );
}
 
export default CreateTodo;