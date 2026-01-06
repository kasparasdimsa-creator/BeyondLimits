// App.jsx
import "./styles/login.css";
import { Routes, Route } from "react-router-dom";
import AuthForm from "./components/authform.jsx";
import Home from "./components/Home.jsx";
import Profile from "./components/Profile.jsx";
import Workouts from "./components/Workouts.jsx";
import Progress from "./components/Progress.jsx";  
import Help from "./components/Help.jsx";
import About from "./components/About.jsx";

export default function App() {
  return (
    <Routes>
      {/* Login / Signup page */}
      <Route path="/authform" element={<AuthForm />} />

      {/* Home page */}
      <Route path="/home" element={<Home />} />

      {/* Profile page */}
      <Route path="/profile" element={<Profile />} />

      {/* Workouts page */}
      <Route path="/workouts" element={<Workouts />} />

      {/* ✅ Progress page */}
      <Route path="/progress" element={<Progress />} />

      {/* Help page */}
      <Route path="/help" element={<Help />} />

      <Route path="/about" element={<About />} />
    </Routes>
  );
}
