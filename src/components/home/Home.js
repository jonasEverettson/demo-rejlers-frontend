import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CarService from "../../services/CarService";

const Home = () => {
  const navigate = useNavigate();
  const [startDate, setStartdate] = useState();
  const [endDate, setEndDate] = useState();

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
    if (!startDate && !endDate) {
      alert("Var vänlig välj start och slutdatum för bokningen");
      return;
    }
    console.log(startDate, endDate);
    navigate("/availableCarList", { state: { startDate, endDate } });
  };

  const handleChangeStartDate = (event) => {
    setStartdate(event.target.value);
  };

  return (
    <div className="flex justify-center items-center ">
      <div className="container mx-6 my-6 ml-30">
        <div className="h-12">
          <div className="my-6 px-2 py-2 m-1 font-semibold">
            <input
              type="date"
              value={startDate}
              onChange={handleChangeStartDate}
            />
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
          <button>
            <a
              onClick={handleBookedCar}
              className="rounded bg-slate-600 text-white px-2 py-2 m-2 font-semibold hover:bg-slate-400"
            >
              Boka Bil
            </a>
          </button>
          <button>
            <a
              onClick={() => navigate("/bookingList")}
              className="rounded bg-slate-600 text-white px-2 py-2 m-1 font-semibold hover:bg-slate-400"
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
