import React from "react";
import logo from "./logo.svg";
// import { Counter } from "./features/counter/Counter";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import AddEdit from "./pages/AddEdit/AddEdit";
import Info from "./pages/Info/Info";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/addContact' element={<AddEdit />} />
          <Route path='/editContact/:id' element={<AddEdit />} />
          <Route path='/info/:id' element={<Info />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
