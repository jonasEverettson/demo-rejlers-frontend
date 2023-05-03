import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import BookingService from "../../services/BookingService";
import { useAuth } from "../security/AuthContext";

const AddBooking = () => {
  const location = useLocation();
  const { employee } = useAuth();

  const [message, setMessage] = useState("");

  /* const search = new URLSearchParams(location.search);
  const id = search.get('id'); 
  console.log('id: ',id);
   const dates = location.state && location.state.dates; 
   console.log('dates ', dates);  */

  const [booking, setBooking] = useState({
    dateFrom: location.state.startDate,
    dateTo: location.state.endDate,
    destination: "",
    jobNumber: "",
    activity: "",
    employee: null,
    car: location.state.car
    
  });

  const navigate = useNavigate();

  const saveBooking = (e) => {
    e.preventDefault();
    if (!booking.destination) {
      setMessage("* Var vänlig fyll i destinationen");
      return;
    }
    if (!booking.jobNumber) {
      setMessage("* Var vänlig fyll i uppdragsnummer");
      return;
    }

    if (!booking.activity) {
      setMessage("* Var vänlig fyll i aktivitetsnummer");
      return;
    }
    BookingService.saveOrder(booking)
      .then((response) => {
        console.log(response);
        console.log(response.data)
        navigate("/bookingList");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    setBooking(prevBooking => ({
      ...prevBooking,
      employee: employee
    }))
  }, [employee])

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setBooking((prevBooking) => ({
      ...prevBooking,
      [name] : value
    }));
  };

  return (
    <div className="flex max-w-2xl mx-auto shadow border-b ">
      <div className="px-8 py-8">
        <div className="font-thin text-emerald-50 text-2xl tracking-wider">
          <h1>Lägg till Order</h1>
        </div>

        <div
          className="items-center justify-center h-14 w-full my-4"
          style={{ display: "flex", alignItems: "center", gap: "8px" }}
        >
          <div
            style={{ display: "flex", flexDirection: "column", width: "100%" }}
          >
            <label className="block text-emerald-50 text-sm font-normal">
              Destination
            </label>
            <input
              type="text"
              name="destination"
              value={booking.destination}
              onChange={(e) => handleChange(e)}
              className="h-10 w-96 border mt-2 px-2 py-2"
            ></input>
          </div>
          {message && <div className="text-emerald-50  ">{message}</div>}
        </div>

        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-emerald-50 text-sm font-normal">
            Uppdragsnummer
          </label>
          <input
            type="text"
            name="jobNumber"
            value={booking.jobNumber}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>

        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-emerald-50 text-sm font-normal">
            Aktivitet
          </label>
          <input
            type="text"
            name="activity"
            value={booking.activity}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4  space-x-4 pt-4">
          <button
            onClick={saveBooking}
            className="rounded bg-slate-600 text-white px-2 py-2 font-semibold hover:bg-slate-400"
          >
            Spara
          </button>
          <button
            onClick={() => navigate("/Home")}
            className="rounded bg-slate-600 text-white px-2 py-2 font-semibold hover:bg-slate-400"
          >
            Tillbaka
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddBooking;
