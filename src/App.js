import './App.css';
import Login from './component/Login';
import Masuk from './component/Masuk';
import Signup from './component/Signup';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="masuk" element={<Masuk />} />
    </Routes>
  );
}

export default App;
