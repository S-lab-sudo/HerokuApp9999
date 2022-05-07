import React from "react";
import "./App.css";
import TodoList from "./Components/TodoLists/TodoList";
import NavigationBar from "./Components/NavigationBar/NavigationBar";
import GlobalClock from "./Components/GlobalClock/GlobalClock";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "./Components/ErrorPage/ErrorPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/todoLists" element={<TodoList />} />
        <Route path="/globalClock" element={<GlobalClock />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <NavigationBar></NavigationBar>
    </BrowserRouter>
  );
}

export default App;
