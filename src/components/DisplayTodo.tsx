import { useLocation, useNavigate } from "react-router-dom";

type TodoItem = {
  id: number;
  text: string;
  status: "pending" | "done" | "incorrect";
};

const DisplayTodo = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { todos } = location.state as { todos: TodoItem[] }; 

  return (
    <div className="p-5" style={{ maxWidth: "600px", margin: "50px auto", textAlign: "center" }}>
      <h1 className="text-2xl font-bold">Todo List</h1>
      {todos.length === 0 ? (
        <p>No todos added yet.</p>
      ) : (
        <ul className="mt-4">
          {todos.map((todo) => (
            <li key={todo.id} className="border p-2 mt-2">
              <span>{todo.text}</span>
              <span style={{ marginLeft: "10px", color: todo.status === "done" ? "green" : todo.status === "incorrect" ? "red" : "orange" }}>
                ({todo.status})
              </span>
            </li>
          ))}
        </ul>
      )}
      <button onClick={() => navigate(-1)} className="bg-blue-500 text-white px-4 py-2 mt-4 rounded">
        Back
      </button>
    </div>
  );
};

export default DisplayTodo;
