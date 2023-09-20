import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BookingService from "../../services/BookingService";
import Pagination from "./Pagination";
import OtherBookings from "./OtherBookings";

const BookingDetails = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [booking, setBookings] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

    // Sorterar upp tabellen efter Datum Från
  const sortBookingsByDateFrom = (bookings) => {

    if(!bookings){
      return []; // skapar en tom array ifall det inte finns någon bokning lagd
    }

    const formattedBookings = bookings.map((booking) => {
      return {
        ...booking,
        dateFrom: new Date(booking.dateFrom).toLocaleString([], { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' }),
        dateTo: new Date(booking.dateTo).toLocaleString([], { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' }),
      }
    })
    
    return formattedBookings
      ? formattedBookings.sort((a, b) => {
          return new Date(b.dateFrom) - new Date(a.dateFrom);
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
                Email
              </th>      
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Telefon
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Aktiv
              </th>
            </tr>
          </thead>

          {!loading && (
            <tbody className="bg-white">
              {currentBookings.map((booking) => (
                <OtherBookings
                  booking={booking}
                  key={booking.bookingId}
                ></OtherBookings>
              ))}
            </tbody>
          )}
          </table>
          </div>
          <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
      </div>
  
  );
};

export default BookingDetails;
