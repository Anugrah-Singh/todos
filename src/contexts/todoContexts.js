import { createContext, useContext } from "react";


export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Todo msg",
            completed: false
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    ToggleComplete: (id) => {},
});

export const useTodo = () => {
    return(
        useContext(TodoContext) //whenever you use useContext you'll have to give it a context (TodoContext)
    )
}

export const TodoProvider = TodoContext.Provider