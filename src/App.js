import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './components/login';
import Signup from './components/signup';
import Header from './components/header';
import TodoList from './components/todoList';
import EditItem from './components/Edit';



function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route element={<Login />} path="/login" />
          <Route element={<Signup />} path="/signup" />
          <Route element={<TodoList />} path="/todolist" />
          <Route element={<EditItem />} path="/todolist/edit/:id" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
