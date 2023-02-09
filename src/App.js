import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from './components/login';
import Signup from './components/signup';
import Header from './components/header';
import TodoList from './components/todoList';
import EditItem from './components/Edit';
import UserAuth from './userAuth';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route element={<Navigate to={"/todolist"} />} path="/" />
          <Route element={<Login />} path="/login" />
          <Route element={<Signup />} path="/signup" />
          <Route element={<UserAuth>
            <TodoList/>
          </UserAuth>} path="/todolist" />
          <Route element={<EditItem />} path="/todolist/edit/:id" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
