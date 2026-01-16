import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Harshita from "./components/Harshita";
import Ishika from "./components/Ishika";
import Jatin from "./components/jatin/WeatherApi"
import QuizApp from "./components/Quiz";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ishika" element={<Ishika />} />
        <Route path="/jatin" element={<Jatin/>} />
        <Route path="/harshita" element={<Harshita />} />
        <Route path="/disha" element={<QuizApp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
