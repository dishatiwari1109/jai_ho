import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ishika" element={<h2>Ishika Page</h2>} />
        <Route path="/jatin" element={<h2>Jatin Page</h2>} />
        <Route path="/harshita" element={<h2>Harshita Page</h2>} />
        <Route path="/disha" element={<h2>Disha Page</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
