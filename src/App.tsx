import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { LogIn } from "./pages/LogIn";
import { Tasks } from "./pages/Tasks";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LogIn />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
