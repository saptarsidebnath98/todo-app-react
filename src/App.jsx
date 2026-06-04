import { useEffect, useState } from "react"
import DisplayTodos from "./components/DisplayTodos";
import ControlTodos from "./components/ControlTodos";


function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("application_todos")) || []);

  const handleInputChange = (e) => {

    setInput(e.target.value);

  }

  const handleAdd = () => {
    const verifiedInput = input.trim();
    if(verifiedInput !== ""){
      setTodos((prevTodos) => [...prevTodos, {id: crypto.randomUUID() , text: verifiedInput}]);
      setInput("");
    }

    return;
  }

  const handleKeyDownToAddTodo = (e) =>{
    if(e.key === "Enter"){
      handleAdd();
    }
  }

  const handleDelete = (id) => {
    const copyTodos = [...todos];
    const updatedTodos = copyTodos.filter((item) => item.id !== id);
    setTodos(updatedTodos);
  }


useEffect(() => {
  localStorage.setItem("application_todos", JSON.stringify(todos));
}, [todos])

  return (
    <div>
      <header>
        <h1>Todo App</h1>
      </header>
      <main>
        <ControlTodos input={input} handleInputChange={handleInputChange} handleAdd={handleAdd} handleKeyDownToAddTodo={handleKeyDownToAddTodo}/>
        <DisplayTodos todos={todos} handleDelete={handleDelete}/>
      </main>
      <footer>

      </footer>

    </div>
  )
}

export default App
