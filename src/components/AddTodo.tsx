import { useState } from "react";
import { BUTTON_TEXTS } from "./constant";
import { useNavigate } from "react-router-dom";

type TodoItem = {
  id: number;
  text: string;
  status: "pending" | "done" | "incorrect";
};

export default function AddTodo() {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [input, setInput] = useState<string>("");
  const navigate = useNavigate();

  const addTodo = () => {
    if (input.trim() === "") return;
    setTodos([...todos, { id: Date.now(), text: input, status: "pending" }]);
    setInput("");
  };

  const handleNavigate = () => {
    navigate('/display', { state: { todos } }); // ✅ Passing as "todos"
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto", textAlign: "center" }}>
      <h1>{BUTTON_TEXTS.ADD_TODO}</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a todo..."
        style={{ padding: "8px", width: "80%", marginBottom: "10px" }}
      />
      <br />
      <button onClick={addTodo}>{BUTTON_TEXTS.ADD}</button>
      <br /><br />
      <button onClick={handleNavigate}>{BUTTON_TEXTS.VIEW}</button>
    </div>
  );
}
    