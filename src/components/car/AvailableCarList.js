import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AvailableCar from "./AvailableCar";

const AvailableCarList = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const startDate = location.state.startDate;
  const endDate = location.state.endDate;

  const [loading, setLoading] = useState(true);
  const [cars, setCars] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "http://localhost:8080/api/v1/availablecars",
          {
            params: {
              dateFrom: startDate,
              dateTo: endDate,
            },
          }
        );
        setCars(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };

    fetchData();
  }, [startDate, endDate]);

  return (
    <div className="container mx-auto my-6">
      <div className="h-12"></div>
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
                Actions
              </th>
            </tr>
          </thead>

          {!loading && (
            <tbody className="bg-white">
              {cars && cars.length > 0 ? (
                cars.map((car) => (
                  <AvailableCar
                    car={car}
                    key={car.carId}
                    startDate={startDate}
                    endDate={endDate}
                  />
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center py-4 ">
                    Tyvärr, Alla bilar är bokade under den valda perioden.{" "}
                    <br />
                    Här är numret till{" "}
                    <a href="https://hyrbilarikarlstad.se/">
                      {" "}
                      <u>hyrbilar i Karlstad</u>
                    </a>
                    : 054-21 00 00
                    <br />
                  </td>
                </tr>
              )}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default AvailableCarList;
