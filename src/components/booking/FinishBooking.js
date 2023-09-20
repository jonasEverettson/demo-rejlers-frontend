import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const FinishBooking = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const bookingId = location.state.bookingId;
  const car = location.state.car;

  const [km, setKm] = useState();
  const [bookingIsFinished, setBookingIsFinished] = useState(false);

  const handleKmChange = (event) => {
    setKm(event.target.value);
  };

  useEffect(() => {
    if (bookingIsFinished) {
      const timeout = setTimeout(() => {
        navigate("/home");
      }, 4000);

      return () => clearTimeout(timeout);
    }
  }, [bookingIsFinished, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      bookingId: bookingId,
      car: {
        km: km,
      },
    };

    if(km <= car.km){
      alert("Kontrollera mätarställningen, den kan inte vara lägre eller lika som tidigare KM-ställning")
      return;
    }
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
        setBookingIsFinished(true);
      })
      .catch((error) => {
        console.error("Error:", error);
        
      });
  };

  return (
    <div>
      <div className="flex max-w-2xl mx-auto shadow border-b ">
        <div className="px-8 py-8">
          <div className="font-thin text-emerald-50 text-2xl tracking-wider">
            <h1>Avsluta Bokningen</h1>
          </div>
          <div className="items-center justify-center h-14 w-full my-4">
            <p className="text-white">
              Bil: {car.brand} {car.model} {car.registrationNumber}
              <br /> Tidigare KM-ställning: {car.km}
              km
            </p>
          </div>

          {bookingIsFinished ? (
            <p className="text-white">
              Bokningen är nu avslutad. <br /> Du navigeras nu tillbaka{" "}
            </p>
          ) : (
            <form onSubmit={handleSubmit}>
              <label className="text-white">
                Ange Ny Mätarställning:
                <input
                  type="number"
                  className="w-20 mx-2 text-black"
                  value={km}
                  onChange={handleKmChange}
                />
                km
              </label>
              <br />
              <button
                className="rounded bg-slate-600 text-white px-2 py-2 font-semibold hover:bg-slate-400 mt-3"
                type="submit"
              >
                Skicka in
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default FinishBooking;
