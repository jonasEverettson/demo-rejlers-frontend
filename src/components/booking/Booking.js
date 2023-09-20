import { useNavigate, useParams } from "react-router-dom";
import "./Booking.css";

const Booking = ({ booking, deleteBooking }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const updateBooking = (e, id, car) => {
    e.preventDefault();
    console.log(booking.bookingId);
    navigate("/finishBooking", { state: { bookingId: id, car: car } });
  };


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
        <div className="text-sm text-gray-500">{booking.jobNumber}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{booking.activity}</div>
      </td>

      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">
          {booking.active ? "Ja" : "Nej"}
        </div>
      </td>
      <td className="text-right px-2 py-4 whitespace-nowrap font-medium text-sm">
        {booking.active ? (
          <>
            <button>
              <a
                onClick={(e, id) =>
                  updateBooking(e, booking.bookingId, booking.car)
                }
                className="rounded bg-slate-600 text-white px-2 py-2 m-1 font-semibold hover:bg-slate-400"
              >
                Avsluta bokning
              </a>
            </button>

            <button>
              <a
                onClick={(e, id) => {
                  if (
                    window.confirm(
                      "Är du säker på att du vill ta bort den här bokningen?"
                    )
                  ) {
                    deleteBooking(e, booking.bookingId);
                  }
                }}
                className="rounded bg-slate-600 text-white px-2 py-2 m-1 font-semibold hover:bg-slate-400"
              >
                Ta Bort
              </a>
            </button>
          </>
        ) : null}
      </td>
    </tr>
  );
};

export default Booking;
