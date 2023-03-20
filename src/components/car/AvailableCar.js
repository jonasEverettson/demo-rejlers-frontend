import React, { useState } from "react";
import { createSearchParams, useNavigate, useLocation } from "react-router-dom";
import BookingService from "../../services/BookingService";

const AvailableCar = ({ car }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const startDate = location.state.startDate;
  const endDate = location.state.endDate;
  const [cars, setCars] = useState();

  const bookCar = (e, id) => {
    navigate(`/addBooking`, { state: { car, startDate, endDate } });
  };

  return (
    <tr key={car.carId}>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{car.brand}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{car.model}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap uppercase">
        <div className="text-sm text-gray-500">{car.registrationNumber}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{car.km}</div>
      </td>
      <td className="text-right px-2 py-4 whitespace-nowrap font-medium text-sm">
        <button>
          <a
            onClick={(e, id) => bookCar(e, car)}
            className="rounded bg-slate-600 text-white px-2 py-2 font-semibold hover:bg-slate-400"
          >
            Boka
          </a>
        </button>
      </td>
    </tr>
  );
};

export default AvailableCar;
