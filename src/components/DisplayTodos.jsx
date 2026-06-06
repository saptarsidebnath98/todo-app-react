
const DisplayTodos = ({ todos, handleDelete, handleComplete, handleEdit, editableId }) => {

  return (
    <section>
      <h2>Todos:</h2>
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
              <button onClick={() => handleComplete(item.id)}>{item.isCompleted ? "Mark as incomplete" : "Mark as Complete"}</button>
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
