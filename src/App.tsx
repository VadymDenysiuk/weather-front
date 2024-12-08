import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import List from "./pages/List";

const App: React.FC = () => {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<Navigate replace to="/main" />} />
          <Route path="/main" element={<Home />} />
          <Route path="/list" element={<List />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
