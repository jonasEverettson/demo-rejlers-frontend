import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../security/AuthContext";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const navigate = useNavigate();
  const authContext = useAuth();

  function handleUsernameChange(event) {
    console.log(event);
    setUsername(event.target.value);
  }

  function handlePasswordChange(event) {
    console.log(event.target.value);
    setPassword(event.target.value);
  }

  function handleSubmit() {
    if (authContext.login(username, password)) {
      navigate(`/home`);
    } else {
      setShowErrorMessage(true);
    }
  }

  return (
    <div className="login">
      <h1 className="text-white">Log in!</h1>
      {showErrorMessage && (
        <div className="errorMessage text-white">
          Authentication Failed. Please check your credentials.
        </div>
      )}
      <div className="loginForm">
        <div className="py-1 ">
          <label className="text-white px-2">Username</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className="py-2 ">
          <label className="text-white px-2">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>

        <button
          className="loginButton text-white"
          type="button"
          name="login"
          onClick={handleSubmit}
        >
          Login
        </button>
      </div>
    </div>
  );
}
