import React, { useEffect, useState } from "react"
import { TodoProvider } from "./contexts"
import { TodoForms, TodoItems } from "./components"
function App() {

  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev])
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const ToggleComplete = (id) => {
    // console.log(id)
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo)))
  }

  //we'll call useEffect hook to get all the valuse from localStorage
  //we are using this useEffect for getting the elements when app loads
  useEffect(() => {
    //JSON.parse iss liye kiya coz all the values from local storaage string format me store hoti hai so we have to convert them in JSON
    const todos = JSON.parse(localStorage.getItem("todos")) //todos is the key coz to get items we need their keys

    if(todos && todos.length > 0){ //we are checking condition if todos is there or not and todos ki length 0 se badi hai ya nhi
    //  coz at the end of the day wo ek array hi toh hai

    setTodos(todos)

    }
  }, [])
  //you can also y=use multiple useEffect
  //we are using this useEffect to add items in local storage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos)) // again we have to convert array to string coz localstorage only takes string
    //so we are using JSON.stringigy to convert it
  }, [todos])
  

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, ToggleComplete}}>  
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
              {/* Todo form goes here */} 
              <TodoForms/>
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/* look at todos in TodoProvider above hamne saare todos to le liye hai ek array me new we have to run a loop to access each
            item in todos array jaha pe har ek item is a single todo  */}
              {/*Loop and Add TodoItem here */}
              {todos.map((todo) => (
                <div key={todo.id}
                className="w-full">
                  <TodoItems todo = {todo}/>
                </div>
              ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
