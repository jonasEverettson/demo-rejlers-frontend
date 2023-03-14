import React from "react";
import "./App.css";
import AddEmployee from "./components/employee/AddEmployee";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import EmployeeList from "./components/employee/EmployeeList";
import UpdateEmployee from "./components/employee/UpdateEmployee";
import CarList from "./components/car/CarList";
import AddCar from "./components/car/AddCar";
import UpdateCar from "./components/car/UpdateCar";
import BookingList from "./components/booking/BookingList";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Admin from "./components/admin/Admin";
import Calendar from "./components/calender/Calender";
import BookingDetails from "./components/booking/bookingDetails";
import AddBooking from "./components/booking/AddBooking";
import AvailableCarList from "./components/car/AvailableCarList";
import Login from "./components/login/login";
import AuthProvider, { useAuth } from "./components/security/AuthContext";
import Error from "./components/error/Error";
import Logout from "./components/logout/logout";
import UpdateBooking from "./components/booking/UpdateBooking";
import FinishBooking from "./components/booking/FinishBooking";

function AuthenticatedRoute({ children }) {
  const authContext = useAuth();
  if (authContext.isAuthenticated) return children;
  return <Navigate to="/" />;
}

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />}></Route>
            <Route
              path="/availableCarList"
              element={
                <AuthenticatedRoute>
                  <AvailableCarList />
                </AuthenticatedRoute>
              }
            />
            <Route
              path="/employeeList"
              element={
                <AuthenticatedRoute>
                  <EmployeeList />
                </AuthenticatedRoute>
              }
            />
            <Route
              path="/addEmployee"
              element={
                <AuthenticatedRoute>
                  <AddEmployee />
                </AuthenticatedRoute>
              }
            />
            <Route
              path="/editEmployee/:id"
              element={
                <AuthenticatedRoute>
                  <UpdateEmployee />
                </AuthenticatedRoute>
              }
            />
            <Route
              path="/carList"
              element={
                <AuthenticatedRoute>
                  <CarList />
                </AuthenticatedRoute>
              }
            />
            <Route
              path="/addCar"
              element={
                <AuthenticatedRoute>
                  <AddCar />
                </AuthenticatedRoute>
              }
            />
            <Route
              path="/editCar/:id"
              element={
                <AuthenticatedRoute>
                  <UpdateCar />
                </AuthenticatedRoute>
              }
            />
            <Route
              path="/bookingList"
              element={
                <AuthenticatedRoute>
                  <BookingList />
                </AuthenticatedRoute>
              }
            />
            <Route
              path="/calender"
              element={
                <AuthenticatedRoute>
                  <Calendar />
                </AuthenticatedRoute>
              }
            />
            <Route
              path="/admin"
              element={
                <AuthenticatedRoute>
                  <Admin />
                </AuthenticatedRoute>
              }
            />
            <Route
              path="/bookingDetails"
              element={
                <AuthenticatedRoute>
                  <BookingDetails />
                </AuthenticatedRoute>
              }
            />
            <Route
              path="/addBooking"
              element={
                <AuthenticatedRoute>
                  <AddBooking />
                </AuthenticatedRoute>
              }
            />
            <Route
              path="/finishBooking"
              element={
                <AuthenticatedRoute>
                  <FinishBooking />
                </AuthenticatedRoute>
              }
            />
            <Route
              path="/logout"
              element={
                <AuthenticatedRoute>
                  <Logout />
                </AuthenticatedRoute>
              }
            />
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
