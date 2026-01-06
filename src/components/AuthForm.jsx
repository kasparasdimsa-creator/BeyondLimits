import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true); // toggle between login/signup
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [users, setUsers] = useState([]); // store signed-up users


  const navigate = useNavigate();


  const handleSubmit = (e) => {
  e.preventDefault();
  setError("");

  // Common validation
  if (!email || !password || (!isLogin && !confirmPassword)) {
    setError("PLEASE FILL IN ALL FIELDS");
    return;
  }

  // SIGN-UP mode
  if (!isLogin) {
    if (password !== confirmPassword) {
      setError("PASSWORDS DO NOT MATCH");
      return;
    }

    if (users.find(u => u.email === email)) {
      setError("USER ALREADY EXISTS");
      return;
    }

    // Add new user
    setUsers([...users, { email, password }]);
    alert("✅ Account created!");
    setIsLogin(true); // switch to login
    return; // exit after sign-up
  }

  // LOGIN mode
  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    navigate("/home"); // successful login
  } else {
    setError("INVALID EMAIL OR PASSWORD");
  }
};
 

  return (
    <div className="auth-form">
      <div className="branding">
        <img
        src="https://www.pngall.com/wp-content/uploads/2018/04/Gym-Free-Download-PNG.png"
          alt="bodybuilder"
          className="bodybuilder-image"
        />

        <h1 className="headline">
          BEYONDLIMITS: UNLOCK YOUR FULL POTENTIAL
        </h1>
      </div>

      <div className="login-container">

      <h2>{isLogin ? "Welcome Back to BeyondLimits!" : "New to BeyondLimits? Sign Up"}</h2>
      <h3>Every check-in counts. Login to keep progressing!</h3>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          
        />
        {!isLogin && (
          <input
            type="password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        )}
        {error && <p className="error">{error}</p>}
        <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>
      </form>

      <p className="toggle" onClick={() => setIsLogin(!isLogin)}>
        {isLogin
          ? "Don't have an account yet? Sign Up"
          : "Already have an account? Log In"}
      </p>
    </div>
    </div>
  );
}