import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);


export default function AuthProvider({ children }) {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [employee, setEmployee] = useState(null);
  const [employeeNumber, setEmployeeNumber] = useState(null);

  async function login(employeeNumber) {
    const response = await fetch(`http://localhost:8080/api/v1/login?employeeNumber=${employeeNumber}`);
    if (response.status === 200) {
      const employeeData = await response.json();
      setAuthenticated(true);
      setEmployeeNumber(employeeNumber);
      setEmployee(employeeData);
      return { isAuthenticated: true, employee: employeeData };
    } else {
      setAuthenticated(false);
      const error = new Error("Autentisering misslyckad")
      error.status = response.status;
      throw error;
    }
  }

  function logout() {
    setAuthenticated(false);
    setEmployeeNumber(null);
    setEmployee(null);
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, employee }}>
      {children}
    </AuthContext.Provider>
  );
}
