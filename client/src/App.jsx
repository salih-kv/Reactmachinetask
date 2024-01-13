import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Layout from "./app/Layout";
import Dashboard from "./app/dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<>Not Found!</>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;