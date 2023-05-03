import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../security/AuthContext";

export default function Login() {
  const [username, setUsername] = useState("");
 

  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const navigate = useNavigate();
  const authContext = useAuth();

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  async function handleSubmit() {
    try {
      const { isAuthenticated, user } = await authContext.login(username);
      if (isAuthenticated) {
        navigate(`/home`, { state: { user } });
      } else {
        setShowErrorMessage(true);
      }
    }
    catch(error){
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
            <label className="text-white px-2">Ing.nr:</label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={handleUsernameChange}
              onKeyUp={(event) => event.key === "Enter" && handleSubmit()}
            />
          </div>
        

          <button
            className="rounded bg-slate-600 text-white px-2 py-2 font-semibold hover:bg-slate-400 mt-4 ml-2"
            type="submit"
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
