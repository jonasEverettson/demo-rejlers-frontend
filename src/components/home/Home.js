import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CarService from "../../services/CarService";
import { useAuth } from "../security/AuthContext";

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { employee, isAuthenticated} = useAuth();
  const [startDate, setStartdate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [loading, setLoading] = useState(true);
  const [cars, setCars] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await CarService.getAvailableCars();
        setCars(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const handleBookedCar = () => {
    if (!startDate || !endDate) {
      alert("Var vänlig välj start och slutdatum för bokningen");
      return;
    }
    
    const start = new Date(startDate);
    const end = new Date(endDate);
  
    if (start > end) {
      alert("Startdatum kan inte vara efter slutdatum");
      return;
    }

    const now = new Date();
    now.setHours(0, 0, 0, 0);
    if (start < now) {
      alert("Du kan inte boka med ett startdatum som redan har passerat.");
      return;
    }

    navigate("/availableCarList", { state: { startDate, endDate } });
  };

  const handleChangeStartDate = (event) => {
    setStartdate(event.target.value);
  };

  

  return (
    <div className="flex justify-center min-h-screen px-4">
    <div className="container mx-4 my-6">
      {isAuthenticated && employee && (
            <div>
              <h1 className="font-thin text-emerald-50 text-2xl tracking-wider mb-4">
                Välkommen, {employee.firstName} {employee.lastName}!
              </h1>
            </div>
          )}
      <div>
        <div className="my-6 px-2 py-2 m-1 font-semibold">
          <h1 className="font-thin text-emerald-50 text-2xl tracking-wider mb-4">
            Var vänlig och välj datum för din bokning.
          </h1>

          <div className="flex flex-col md:flex-row items-center">
            <label className="text-emerald-50 mb-1 md:mb-0">Från: </label>
            <input
              className="appearance-none border border-gray-300 rounded-md py-2 px-4 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-2 md:mb-0 md:ml-2"
              type="datetime-local"
              value={startDate}
              onChange={(e) => setStartdate(e.target.value)}             
            /> 

            <label className="ml-0 md:ml-4 text-emerald-50 mb-1 md:mb-0">Till: </label>
            <input
              className="appearance-none border border-gray-300 rounded-md py-2 px-4 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-2 md:mb-0 md:ml-2"
              type="datetime-local"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />

            <button className="md:ml-4">
              <a
                onClick={handleBookedCar}
                className="rounded bg-slate-600 text-white px-2 py-2 m-2 font-semibold hover:bg-slate-400"
              >
                Boka Bil
              </a>
            </button>
          </div>
        </div>
        <br />
        <br />

        <h2 className="font-thin text-emerald-50 text-2xl tracking-wider ml-2">
          Registrera din återkomst.
        </h2>
        <br />
        <button>
          <a
            onClick={() => navigate("/bookingList")}
            className="rounded bg-slate-600 text-white px-2 py-2 m-1 font-semibold hover:bg-slate-400 ml-2"
          >
            Avsluta Bokning
          </a>
        </button>
      </div>
    </div>
  </div>
);
};

export default Home;
