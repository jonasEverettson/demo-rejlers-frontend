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
    const start = new Date(startDate);
    const end = new Date(endDate);

    if (start > end) {
      alert("Startdatum kan inte vara efter slutdatum");
      return;
    }

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
            <h1 className="font-thin text-emerald-50 text-2xl tracking-wider">
              Var vänlig och välj datum för din bokning.
            </h1>
            <br />
            <label className="text-emerald-50">Från: </label>
            <input
              className="appearance-none border border-gray-300 rounded-md py-2 px-4 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              type="date"
              value={startDate}
              onChange={handleChangeStartDate}
            />

            <label className="ml-2 text-emerald-50">Till: </label>
            <input
              className=" appearance-none border border-gray-300 rounded-md py-2 px-4 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />

            <button>
              <a
                onClick={handleBookedCar}
                className="rounded bg-slate-600 text-white px-2 py-2 m-2 font-semibold hover:bg-slate-400"
              >
                Boka Bil
              </a>
            </button>
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
