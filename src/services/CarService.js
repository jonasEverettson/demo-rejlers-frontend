import axios from "axios";

const CAR_API_BASE_URL = "http://localhost:8080/api/v1/cars";

class CarService {
  saveCar(car) {
    return axios.post("http://localhost:8080/api/v1/savecar", car);
  }

  getCars() {
    return axios.get(CAR_API_BASE_URL);
  }

  deleteCar(id) {
    return axios.delete(CAR_API_BASE_URL + "/" + id);
  }

  getCarById(id) {
    return axios.get(CAR_API_BASE_URL + "/" + id);
  }

  updateCar(car, id) {
    return axios.put("http://localhost:8080/api/v1/editcar/" + id, car);
  }

  getAvailableCars() {
    return axios.get("http://localhost:8080/api/v1/availablecars");
  }
}

export default new CarService();
