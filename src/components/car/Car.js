import React from "react";
import { useNavigate } from "react-router-dom";

const Car = ({ car, deleteCar }) => {
  const navigate = useNavigate();

  const editCar = (e, id) => {
    e.preventDefault();
    console.log(id)
    navigate(`/editCar/${id}`);
  
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
            onClick={(e, id) => editCar(e, car.carId)}
            className="rounded bg-slate-600 text-white px-2 py-2 font-semibold hover:bg-slate-400"
          >
            Ändra
          </a>
        </button>
        <button>
          <a
            onClick={(e, id) =>{
              if(window.confirm("Är du säker på att du vill ta bort den här bilen?")){
                deleteCar(e, car.carId);
              } 
            }}
            className="rounded bg-slate-600 text-white px-2 py-2 m-1 font-semibold hover:bg-slate-400"
          >
            Ta bort
          </a>
        </button>
      </td>
    </tr>
  );
};

export default Car;
