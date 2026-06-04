
const ControlTodos = ({input, handleInputChange, handleAdd, handleKeyDownToAddTodo}) => {
    return (
        <section>
            <input type="text" placeholder="type your todo..." value={input} onChange={handleInputChange} onKeyDown={handleKeyDownToAddTodo}/>
            <button onClick={handleAdd}>ADD</button>
        </section>
    )
}

export default ControlTodos
