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
    <div className="flex max-w-2xl mx-20 shadow border-b ">
      <div className="px-8 py-8">
        <h1 className="font-thin text-emerald-50 text-2xl tracking-wider mb-3 ml-32 ">
          Logga in
        </h1>
        {showErrorMessage && (
          <div className="errorMessage text-white">
            Autentisering misslyckad. Var vänlig kontrollera dina uppgifter.
          </div>
        )}
        <div className="loginForm">
          <div className="py-1 ">
            <label className="text-white px-2">Användarnamn:</label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div className="py-2 ">
            <label className="text-white px-2">Lösenord:</label>
            <input
              className="ml-10"
              type="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>

          <button
            className="rounded bg-slate-600 text-white px-2 py-2 font-semibold hover:bg-slate-400 mt-4 ml-2"
            type="button"
            name="login"
            onClick={handleSubmit}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
