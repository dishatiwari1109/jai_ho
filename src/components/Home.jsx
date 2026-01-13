import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome 👋</h1>
      <p className="home-subtitle">Select a profile</p>

      <div className="card-container">
        <Link to="/ishika" className="card">Ishika</Link>
        <Link to="/jatin" className="card">Jatin</Link>
        <Link to="/harshita" className="card">Harshita</Link>
        <Link to="/disha" className="card">Disha</Link>
      </div>
    </div>
  );
}

export default Home;
