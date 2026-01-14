import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Harshita from "./components/Harshita";
import Ishika from "./components/Ishika";
import Jatin from "./components/jatin/WeatherApi"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ishika" element={<Ishika />} />
        <Route path="/jatin" element={<Jatin/>} />
        <Route path="/harshita" element={<Harshita />} />
        <Route path="/disha" element={<h2>Disha Page</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
