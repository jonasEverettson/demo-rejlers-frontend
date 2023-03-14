import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../../services/EmployeeService";

const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    employeeId: "",
    firstName: "",
    lastName: "",
    email: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setEmployee({ ...employee, [e.target.name]: value });
  };

  const saveEmployee = (e) => {
    e.preventDefault();
    EmployeeService.saveEmployee(employee)
      .then((response) => {
        console.log(response);
        navigate("/employeeList");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const reset = (e) => {
    e.preventDefault();
    setEmployee({
      employeeId: "",
      firstName: "",
      lastName: "",
      department: "",
      city: "",
      employeeNumber: "",
      phoneNumber: "",
      email: "",
    });
  };

  return (
    <div className="flex max-w-2xl mx-auto shadow border-b ">
      <div className="px-8 py-8">
        <div className="font-thin text-emerald-50 text-2xl tracking-wider">
          <h1>Lägg till anställd</h1>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-emerald-50 text-sm font-normal">
            Förnamn
          </label>
          <input
            type="text"
            name="firstName"
            value={employee.firstName}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-emerald-50 text-sm font-normal">
            Efternamn
          </label>
          <input
            type="text"
            name="lastName"
            value={employee.lastName}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-emerald-50 text-sm font-normal">
            Avdelning
          </label>
          <input
            type="text"
            name="department"
            value={employee.department}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-emerald-50 text-sm font-normal">
            Stad
          </label>
          <input
            type="text"
            name="city"
            value={employee.city}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-emerald-50 text-sm font-normal">
            Anställningsnummer
          </label>
          <input
            type="text"
            name="employeeNumber"
            value={employee.employeeNumber}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-emerald-50 text-sm font-normal">
            Mobil
          </label>
          <input
            type="text"
            name="phoneNumber"
            value={employee.phoneNumber}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-emerald-50 text-sm font-normal">
            Email
          </label>
          <input
            type="text"
            name="email"
            value={employee.email}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4  space-x-4 pt-4">
          <button
            onClick={saveEmployee}
            className="rounded bg-slate-600 text-white px-2 py-2 font-semibold hover:bg-slate-400"
          >
            Spara
          </button>
          <button
            onClick={reset}
            className="rounded bg-slate-600 text-white px-2 py-2 font-semibold hover:bg-slate-400"
          >
            Rensa
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
