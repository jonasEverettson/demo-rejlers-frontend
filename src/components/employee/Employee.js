import React from "react";
import { useNavigate } from "react-router-dom";

const Employee = ({ employee, deleteEmployee }) => {
  const navigate = useNavigate();

  const editEmployee = (e, id) => {
    e.preventDefault();
    navigate(`/editEmployee/${id}`);
  };

  return (
    <tr key={employee.employeeId}>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{employee.firstName}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{employee.lastName}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{employee.department}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{employee.city}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{employee.employeeNumber}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{employee.phoneNumber}</div>
      </td>

      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{employee.email}</div>
      </td>
      <td className="text-right px-2 py-4 whitespace-nowrap font-medium text-sm">
        <button>
          <a
            onClick={(e, id) => editEmployee(e, employee.employeeId)}
            className="rounded bg-slate-600 text-white px-2 py-2 font-semibold hover:bg-slate-400"
          >
            Redigera
          </a>
        </button>
        <button>
          <a
            onClick={(e, id) => {
              if(window.confirm("Är du säker på att du vill ta bort den här anställda?")){
                deleteEmployee(e, employee.employeeId)}
              }}
            className="rounded bg-slate-600 text-white px-2 py-2 m-1 font-semibold hover:bg-slate-400"
          >
            Radera
          </a>
        </button>
      </td>
    </tr>
  );
};

export default Employee;
