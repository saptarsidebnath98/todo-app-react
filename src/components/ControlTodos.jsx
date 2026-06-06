
const ControlTodos = ({input, handleInputChange, handleAdd, handleKeyDownToAddTodo, editableId, handleSave}) => {
    return (
        <section>
            <input type="text" placeholder="type your todo..." value={input} onChange={handleInputChange} onKeyDown={handleKeyDownToAddTodo}/>
            {editableId ? <button onClick={() => handleSave(editableId)}>Save</button> : <button onClick={handleAdd}>ADD</button>}
            
            
        </section>
    )
}

export default ControlTodos
