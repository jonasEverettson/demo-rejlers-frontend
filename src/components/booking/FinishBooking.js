import { useState } from "react";
import { useLocation } from "react-router-dom";

const FinishBooking = () => {
  const location = useLocation();
  const bookingId = location.state.bookingId;
  const car = location.state.car;

  const [km, setKm] = useState();

  const handleKmChange = (event) => {
    setKm(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      bookingId: bookingId,
      car: {
        km: km,
      },
    };

    fetch("http://localhost:8080/api/v1/finishorder", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        // redirect to confirmation page or update UI
      })
      .catch((error) => {
        console.error("Error:", error);
        // handle error and update UI
      });
  };

  return (
    <div>
      <h1 className="text-white">Avsluta Bokningen</h1>
      <p className="text-white">
        Bil: {car.make} {car.model}
      </p>
      <form onSubmit={handleSubmit}>
        <label className="text-white">
          Kilometer:
          <input
            className="text-black"
            type="number"
            value={km}
            onChange={handleKmChange}
          />
        </label>
        <button className="text-white" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FinishBooking;
