import './App.scss';
import Todo from './Todo';
import Website from './Website';
import { Routes, Route, Link } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Todo />} />
        <Route path="/website" element={<Website />} />
      </Routes>      
    </div>
  );
}

export default App;
