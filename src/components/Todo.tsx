import { useState } from "react";
interface TodoItem {
  id: number;
  text: string;
  status: "pending" | "done" | "incorrect";
}

export default function Todo() {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [input, setInput] = useState<string>("");
  const addTodo = () => {
    if (input.trim() === "") return;
    setTodos([...todos, { id: Date.now(), text: input, status: "pending"  }]);
    setInput("");
  };
  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
  const toggleStatus = (id: number) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        let newStatus: "pending" | "done" | "incorrect";
        if (todo.status === "pending") {
          newStatus = "done";
        } else if (todo.status === "done") {
          newStatus = "incorrect";
        } else {
          newStatus = "pending";
        }
        return { ...todo, status: newStatus };
      }
      return todo;
    }));
  };
  return (
    <div style={{ maxWidth: "400px", margin: "50px auto", textAlign: "center" }}>
      <h1>Todo App</h1>
      <input 
        type="text" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        placeholder="Enter a todo..."
      />
      <button onClick={addTodo}>Add</button>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {todos.map(todo => (
          <li key={todo.id} style={{ display: "flex", justifyContent: "space-between", margin: "10px 0", alignItems: "center" }}>
            <span 
              style={{ 
                textDecoration: todo.status === "done" ? "line-through" : "none", 
                color: todo.status === "incorrect" ? "red" : "pink",
                cursor: "pointer" 
              }} 
              onClick={() => toggleStatus(todo.id)}
            >
              {todo.text} {todo.status === "done" ? "✅" : todo.status === "incorrect" ? "❌" : "🕓"}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>🗑</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
