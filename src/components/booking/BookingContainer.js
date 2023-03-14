import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Booking from "./Booking";
import BookingService from "../../services/BookingService";

const BookingContainer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [booking, setBooking] = useState(null);

  useEffect(() => {
    const fetchBooking = async () => {
      try {
        const result = axios.get(
          `http://localhost:8080/api/v1/listorders/${id}`
        );
        console.log(result.data);
        setBooking(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBooking();
  }, [id]);

  const updateBooking = async (e, bookingId) => {
    e.preventDefault();
    try {
      // Call BookingService to update the booking
      await BookingService.updateBooking(bookingId);
      navigate("/bookingList");
    } catch (error) {
      console.log(error);
    }
  };

  if (!booking) {
    return <div>Loading...</div>;
  }

  return <Booking booking={booking} updateBooking={updateBooking} />;
};

export default BookingContainer;
