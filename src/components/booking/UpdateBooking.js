import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Booking from "./Booking";
import BookingService from "../../services/BookingService";


//this class is not in use

const UpdateBooking = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [booking, setBooking] = useState(null);
  const [car, setCar] = useState({ km: 0 });

  useEffect(() => {
    const fetchBooking = async () => {
      try {
        const result = axios.get(
          `http://localhost:8080/api/v1/listorders/${id}`
        );
        console.log(result.data);
        setBooking(result.data);
        setCar({ km: result.data.car.km });
      } catch (error) {
        console.log(error);
      }
    };
    fetchBooking();
  }, [id]);

  const handleChange = (e) => {
    const value = e.target.value;
    setCar({ ...car, [e.target.name]: value });
  };

  const updateCar = async () => {
    const updatedBooking = {
      bookingId: booking.bookingId,
      car: {
        ...booking.car,
        km: car.km,
      },
    };
    try {
      await BookingService.updateOrder(updatedBooking);
      navigate("/bookingList");
    } catch (error) {
      console.log(error);
    }
  };

  if (!booking) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex max-w-2xl mx-auto shadow border-b ">
      <div className="px-8 py-8">
        <div className="font-thin text-emerald-50 text-2xl tracking-wider">
          <h1>Avsluta bokning</h1>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-emerald-50 text-sm font-normal">
            Ny KM-ställning
          </label>
          <input
            type="number"
            name="km"
            value={car.km}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4  space-x-4 pt-4">
          <button
            onClick={updateCar}
            className="rounded bg-slate-600 text-white px-2 py-2 font-semibold hover:bg-slate-400"
          >
            Spara
          </button>
          <button
            onClick={() => navigate("/bookingList")}
            className="rounded bg-slate-600 text-white px-2 py-2 font-semibold hover:bg-slate-400"
          >
            Tillbaka
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateBooking;
