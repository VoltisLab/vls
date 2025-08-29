import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GamesPage from "./components/GamesPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GamesPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;