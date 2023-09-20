import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/");
      window.location.reload();
    }, 2000);

    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <div className="logout">
      <h1 className="text-white font-medium tracking-wider py-3 px-6 text-center">
        Du loggas nu ut! 
      </h1>
    </div>
  );
}
