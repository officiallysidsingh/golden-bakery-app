import React from "react";
import { Route, Routes } from "react-router-dom";

// Custom Pages
import Layout from "./Layout";
import Home from "./pages/Home.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
