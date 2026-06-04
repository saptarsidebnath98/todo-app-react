
const DisplayTodos = ({todos, handleDelete}) => {
  return (
    <section>
          <h2>Todos:</h2>
          <ul>
            {todos.length > 0 && todos.map((item) => {
              return(
                <li key={item.id}>
                  <span>{item.text}</span>
                  <button onClick={() => handleDelete(item.id)}>Delete</button>
                  </li>
              )
              
            })}
          </ul>
        </section>
  )
}

export default DisplayTodos
