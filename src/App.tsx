import AddTodo from "./components/AddTodo"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DisplayTodo from "./components/DisplayTodo";
function App() {
  return (
    <>
     <Router>
      <Routes>
        <Route path='/' element={<AddTodo/>}  />
        <Route path='display' element={<DisplayTodo/>}/>
      </Routes>
     </Router>
    </>
  )
}

export default App
