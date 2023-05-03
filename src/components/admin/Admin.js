import React from "react";
import { useNavigate } from "react-router-dom";


const Admin = () => {
  const navigate = useNavigate();



return (
  <div className="container mx-auto my-6 ">
      <div className="h-12">
    <button>
    <a
      onClick={() => navigate("/carList")}
      className="rounded bg-slate-600 text-white px-2 py-2 font-semibold hover:bg-slate-400"
    >
      Till Bilar
    </a>
  </button>
  <button>
    <a
      onClick={() => navigate("/employeeList")}
      className="rounded bg-slate-600 text-white px-2 py-2 m-1 font-semibold hover:bg-slate-400"
    >
      Till Anställda
    </a>
  </button>
  </div>
  
</div>
)
}

export default Admin;