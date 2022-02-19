import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { Songs } from "./components/Songs";
import { Albums } from "./components/Albums";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Navbar />}></Route> */}
        <Route path="/" element={<Albums />}></Route>
        <Route path="/home" element={<Navbar />}></Route>
        {/* <Route path="/" element={<Navbar />}></Route> */}
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/songs/:album" element={<Songs />}></Route>
      </Routes>
    </div>
  );
}

export default App;
