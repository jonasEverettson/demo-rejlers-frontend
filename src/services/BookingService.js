import axios from "axios";

const BOOKING_API_BASE_URL = "http://localhost:8080/api/v1/listorders";

class BookingService {
  saveOrder(booking) {
    console.log(booking);
    return axios.post("http://localhost:8080/api/v1/ordercar", booking);
  }

  getBookings() {
    return axios.get(BOOKING_API_BASE_URL);
  }
  
  getBookingsByEmployee = (employeeNumber) => { 
    return axios.get(`http://localhost:8080/api/v1/listOrdersByEmployee?employeeNumber=${employeeNumber}`);
  }



  getOrderById(id) {
    return axios.get(BOOKING_API_BASE_URL + "/" + id);
  }



  updateOrder(booking, id) {
    return axios.put("http://localhost:8080/api/v1/finishorder/" + id, booking);
  }

  getBookingDetails() {
    return axios.get("http://localhost:8080/api/v1/bookingDetails");
  }

  deleteOrder(id) {
    return axios.delete("http://localhost:8080/api/v1/deleteorder/" + id);
  }
}

export default new BookingService();
