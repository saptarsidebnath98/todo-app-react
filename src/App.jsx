import { useEffect, useState } from "react"
import DisplayTodos from "./components/DisplayTodos";
import ControlTodos from "./components/ControlTodos";


function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("application_todos")) || []);
  const [editableId , setEditableId] = useState(null);
  const [currentFilter, setCurrentFilter] = useState("all");


  const handleInputChange = (e) => {

    setInput(e.target.value);

  }

  const handleAdd = () => {
    const verifiedInput = input.trim();
    if(verifiedInput !== ""){
      setTodos((prevTodos) => [...prevTodos, {id: crypto.randomUUID() , text: verifiedInput, isCompleted : false}]);
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
    const isConfirmed = window.confirm("Are you sure?");
    if(isConfirmed){
      setTodos(prevTodos => prevTodos.filter((item) => item.id !== id))
    }

    return;
  }

  const handleComplete = (id) => {
   
    setTodos((prevTodos) => {
     return prevTodos.map((todo) => {
      if(todo.id === id){
        return {...todo, isCompleted: !todo.isCompleted}
      }else{
        return todo
      }
     })
    })
  
  }

  const handleEdit = (id) => {
    const currentTodo = todos.find(
      todo => todo.id === id
    );
    setEditableId(currentTodo.id);
    console.log(currentTodo.text);
    setInput(currentTodo.text);
  }

  const handleSave = (id) => {
    const verifiedInput = input.trim();
    if (verifiedInput !== "") {
      setTodos((prevTodos) => {
        return prevTodos.map((todo) => {
          if (todo.id === id) {
            return { ...todo, text: verifiedInput }
          } else {
            return todo
          }
        })
      });
      setInput("");
      setEditableId(null);
    }
  }

  const handleFilterChange = (e) => {
    setCurrentFilter(e.target.value);
  }

  const filterTodos = (todos, currentFilter) => {
    if(currentFilter === "all"){
      return todos
    }else if(currentFilter === "completed"){
      return todos.filter((item) => item.isCompleted)
    }else if(currentFilter === "pending"){
      return todos.filter((item) => !item.isCompleted)
    }

    return todos;
  }

  const totalTodosCount = todos.length;
  const completedTodosCount = todos.filter((todo) => todo.isCompleted).length;
  const pendingTodosCount = todos.filter((todo) => !todo.isCompleted).length;

  const countTodoObject = {
    totalTodosCount ,
    completedTodosCount,
    pendingTodosCount
  }

  const handleClearCompleted = () => {
    setTodos((prevTodos)=> prevTodos.filter((todo) => !todo.isCompleted))
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
        <ControlTodos input={input} handleInputChange={handleInputChange} handleAdd={handleAdd} handleKeyDownToAddTodo={handleKeyDownToAddTodo} handleSave={handleSave} editableId={editableId}/>
        <DisplayTodos todos={filterTodos(todos, currentFilter)} handleDelete={handleDelete} handleComplete={handleComplete} handleEdit={handleEdit} editableId={editableId} currentFilter={currentFilter} handleFilterChange={handleFilterChange} countTodoObject={countTodoObject} handleClearCompleted={handleClearCompleted}/>
      </main>
      <footer>

      </footer>

    </div>
  )
}

export default App
