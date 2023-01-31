import { useState } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import "./App.css";
import { Paper, Box } from "@mui/material";

function App() {
  const [todos, setTodos] = useState([]);
  console.log(todos);

  const onComplete = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === Number(id)
          ? { ...todo, completed: !todo.completed }
          : { ...todo };
      })
    );
 
    todos.map((todo) => {
      return todo.id === Number(id)
        ? { ...todo, completed: true }
        : { ...todo };
    });
  };
  const onDeleteItem = (id) => {
    setTodos([...todos].filter((todo) => todo.id !== id));
  };

  const addTodo = (newTodo) => {
    if (todos.length < 10) {
      let newItem = { id: +new Date(), task: newTodo, completed: false };
      setTodos([...todos, newItem]);
    }
  };

  return (
    <Box className="App">
      <Paper
        elevation={11}
        className="paper"
        sx={{ backgroundColor: "#F7EABE", borderRadius: "30px" }}
      >
        <h2>my todo list</h2>
        <hr className="horizontal" />
        <hr className="vertical" />
        <div className="yellow-pad"></div>
        <TodoForm addTodo={addTodo} />
        <TodoList
          todos={todos}
          onComplete={onComplete}
          onDeleteItem={onDeleteItem}
        />
      </Paper>
    </Box>
  );
}

export default App;
