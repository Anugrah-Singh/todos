import React, { useState } from "react";
import { useTodo } from "../contexts";

function TodoForm() {
    
    const [todo, setTodo] = useState("")
    //this component is a form so it adds items in todos
    //now addTodo ki functionality is in App.jsx so check that.... done? so we have injected the add functionality to addTodo in App.jsx
    //now we want that functionality here. We can get that from context check that(look at the useTodo variable coz useContext has given
    // all the context to that useTodo variable)... done? now we just have to get useTodo to get any of that functionality

    const {addTodo} = useTodo()
    //we are creating a method to spread the todo that we are gonna pass in addTodo function

    const add = (e) => {
        e.preventDefault()

        if(!todo) return

        //since we are spreading the object in addTodo method (look App.jsx), so, we'll pass an object{} here also
        addTodo({ todo, completed: false})
        //if statement v todo leke aaya hai so we have to clear that field so here we are passing  setTodo("")
        setTodo("")
    }

    return (
        //it is a form so it'll submit so onSubmit call the method (add)
        <form onSubmit={add}  className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}//isko wiring bolte hai coz we are wiring it with state
                onChange={(e) => setTodo(e.target.value)}
            />
            {/* Add button is type submit so it'll automatically submit we don't need to call ay functionality */}
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;