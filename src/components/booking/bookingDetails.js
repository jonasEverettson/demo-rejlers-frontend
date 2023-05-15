import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BookingService from "../../services/BookingService";
import Booking from "./Booking";
import Pagination from "./Pagination";

const BookingDetails = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [booking, setBookings] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

    // Sorterar upp tabellen efter Datum Från
  const sortBookingsByDateFrom = (bookings) => {
    return bookings
      ? bookings.sort((a, b) => {
          return new Date(a.dateFrom) - new Date(b.dateFrom);
        })
      : [];
  };
  const sortedBookings = sortBookingsByDateFrom(booking);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await BookingService.getBookings();
        setBookings(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const deleteBooking = (e, id) => {
    e.preventDefault();
    BookingService.deleteOrder(id).then((res) => {
      if (booking) {
        setBookings((prevElement) => {
          return prevElement.filter((booking) => booking.bookingId !== id);
        });
      }
    });
  };

    const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  const totalPages = Math.ceil(sortedBookings.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentBookings = sortedBookings.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="container mx-auto  my-6">
      <div className="h-12"></div>
      <div className="flex shadow border-b">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Datum från
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Datum till
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Förnamn
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Efternamn
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Reg.nr
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Destination
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                uppdragsnr
              </th>      
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                aktivitet
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Telefon
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                ING.nr
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Aktiv
              </th>
              <th className="text-right font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Val
              </th>
            </tr>
          </thead>

          {!loading && (
            <tbody className="bg-white">
              {booking.map((booking) => (
                <Booking
                  booking={booking}
                  deleteBooking={deleteBooking}
                  key={booking.bookingId}
                ></Booking>
              ))}
            </tbody>
          )}
          <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
        </table>
      </div>
    </div>
  );
};

export default BookingDetails;
