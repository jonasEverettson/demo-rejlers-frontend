import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CarService from "../../services/CarService";

const AddCar = () => {
  const [car, setCar] = useState({
    carId: "",
    model: "",
    brand: "",
    registrationNumber: "",
    km: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setCar({ ...car, [e.target.name]: value });
  };

  const saveCar = (e) => {
    e.preventDefault();
    CarService.saveCar(car)
      .then((response) => {
        console.log(response);
        navigate("/carList");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const reset = (e) => {
    e.preventDefault();
    setCar({
      carId: "",
      model: "",
      brand: "",
      registrationNumber: "",
      km: "",
    });
  };

  return (
    <div className="flex max-w-2xl mx-auto shadow border-b ">
      <div className="px-8 py-8">
        <div className="font-thin text-emerald-50 text-2xl tracking-wider">
          <h1>Lägg till bil</h1>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-emerald-50 text-sm font-normal">
            Märke
          </label>
          <input
            type="text"
            name="brand"
            value={car.brand}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-emerald-50 text-sm font-normal">
            Modell
          </label>
          <input
            type="text"
            name="model"
            value={car.model}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-emerald-50 text-sm font-normal">
            Registreringsnummer
          </label>
          <input
            type="text"
            name="registrationNumber"
            value={car.registrationNumber}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-emerald-50 text-sm font-normal">
            Km
          </label>
          <input
            type="text"
            name="km"
            value={car.km}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4  space-x-4 pt-4">
          <button
            onClick={saveCar}
            className="rounded bg-slate-600 text-white px-2 py-2 font-semibold hover:bg-slate-400"
          >
            Spara
          </button>
          <button
            onClick={() => navigate("/carList")}
            className="rounded bg-slate-600 text-white px-2 py-2 font-semibold hover:bg-slate-400"
          >
            Tillbaka
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCar;
