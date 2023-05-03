import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CarService from "../../services/CarService";
import Car from "./Car";

const CarList = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [cars, setCars] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await CarService.getCars();
        setCars(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const deleteCar = (e, id) => {
    e.preventDefault();
    CarService.deleteCar(id).then((res) => {
      if (cars) {
        setCars((prevElement) => {
          return prevElement.filter((car) => car.carId !== id);
        });
      }
    });
  };

  return (
    <div className="container mx-auto  my-6">
      <div className="h-12">
        <button
          onClick={() => navigate("/addCar")}
          className="rounded bg-slate-600 text-white px-6 py-2 font-semibold hover:bg-slate-400"
        >
          Lägg till bil
        </button>
      </div>
      <div className="flex shadow border-b">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Märke
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Modell
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Registreringsnummer
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                KM
              </th>
              <th className="text-right font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Val
              </th>
            </tr>
          </thead>

          {!loading && (
            <tbody className="bg-white">
              {cars.map((car) => (
                <Car car={car} deleteCar={deleteCar} key={car.carId}></Car>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default CarList;
