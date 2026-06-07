
const DisplayTodos = ({ todos, handleDelete, handleComplete, handleEdit, editableId, handleFilterChange, currentFilter }) => {



  return (
    <section>
      <h2>Todos:</h2>
      <div>
        <label htmlFor="filterTodo">Filter Todos by Status:</label>
        <select id="filterTodo" value={currentFilter} onChange={handleFilterChange}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
        </select>
      </div>
      {todos.length === 0 && <div>No todos to show...</div>}
      <ul>
        {todos.length > 0 && todos.map((item) => {
          const todoStyle = {
            textDecoration: item.isCompleted
              ? "line-through"
              : "none"
          };
          return (
            <li key={item.id}>
              <span >{item.isCompleted ? "✅" : "❌"}</span>
              <span style={todoStyle}>{item.text}</span>
              <button onClick={() => handleComplete(item.id)}>{item.isCompleted ? "Mark as Pending⌛" : "Mark as Completed✔️"}</button>
              <button onClick={() => handleEdit(item.id)} disabled={editableId !== null}>✏️</button>
              <button onClick={() => handleDelete(item.id)}>🗑️</button>
            </li>
          )

        })}
      </ul>
    </section>
  )
}

export default DisplayTodos
