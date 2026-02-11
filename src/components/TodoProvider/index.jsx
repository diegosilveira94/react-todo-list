import { useEffect, useState } from "react";
import TodoContext from "./TodoContext";

const TODOS = "todos";

export function TodoProvider({ children }) {
  const savedTodos = localStorage.getItem(TODOS);

  const [todos, setTodos] = useState(savedTodos ? JSON.parse(savedTodos) : []);

  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    localStorage.setItem(TODOS, JSON.stringify(todos));
  }, [todos]);

  const [selectedTodo, setSelectedTodo] = useState(null);

  const openFormTodoDialog = (todo) => {
    if (todo) {
      setSelectedTodo(todo);
    }
    setShowDialog(true);
  };

  const closeFormTodoDialog = () => {
    setShowDialog(false);
    setSelectedTodo(null);
  };

  const addTodo = (formData) => {
    const description = formData.get("description");
    setTodos((prevState) => {
      const todo = {
        id: prevState.length + 1,
        description,
        completed: false,
        createdAt: new Date().toISOString(),
      };
      return [...prevState, todo];
    });
  };

  // const uploadTodo = (formData) => {
  //   const description = formData.get("description");
  //   selectedTodo.description = description;
  //   setTodos((prevState) => {
  //     const todo = {
  //       ...selectedTodo,
  //       description,
  //     };
  //     return [...prevState, todo];
  //   });
  // };

  const uploadTodo = (formData) => {
    setTodos((prevState) => {
      return prevState.map((t) => {
        if (t.id == selectedTodo.id) {
          return {
            ...t,
            description: formData.get("description"),
          };
        }
        return t;
      });
    });
  };

  const toggleTodoCompleted = (todo) => {
    setTodos((prevState) => {
      return prevState.map((t) => {
        if (t.id == todo.id) {
          return {
            ...t,
            completed: !t.completed,
          };
        }
        return t;
      });
    });
  };

  const deleteTodo = (todo) => {
    setTodos((prevState) => {
      return prevState.filter((t) => t.id != todo.id);
    });
  };

  return (
    <TodoContext
      value={{
        todos,
        addTodo,
        uploadTodo,
        toggleTodoCompleted,
        deleteTodo,
        showDialog,
        openFormTodoDialog,
        closeFormTodoDialog,
        selectedTodo,
      }}
    >
      {children}
    </TodoContext>
  );
}
