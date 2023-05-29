import { useNavigate, useParams } from "react-router-dom";
import "./Booking.css";

const OtherBookings = ({ booking, deleteBooking }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const updateBooking = (e, id, car) => {
    e.preventDefault();
    console.log(booking.bookingId);
    navigate("/finishBooking", { state: { bookingId: id, car: car } });
  };
  
  
  // För att sålla ut alla gamla bokningar i "Övriga kommande bokningar"
  // visar bokningar som är 5 dagar gamla sen syns den ej på listan
  // dagar / timmar / minuter / sekunder / millisekunder
    

    const currentDate = new Date();
    const currentDateMinus5Days = new Date(currentDate.getTime() -5 * 24 * 60 * 60 * 1000);

    const dateTo = new Date(booking.dateTo);
    if (dateTo < currentDateMinus5Days) {
        return null;
    } 

    return (
    <tr key={booking.bookingId}>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{booking.dateFrom}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{booking.dateTo}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">
          {booking.employee.firstName}
        </div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{booking.employee.lastName}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap uppercase">
        <div className="text-sm text-gray-500">
          {booking.car.registrationNumber}
        </div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{booking.destination}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{booking.employee.email}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{booking.employee.phoneNumber}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">
          {booking.active ? "Ja" : "Nej"}
        </div>
      </td>
    </tr>
  );
};

export default OtherBookings;
