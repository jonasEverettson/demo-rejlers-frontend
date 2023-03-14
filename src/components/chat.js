import React, { useState, useEffect } from "react";

function MyComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/api/v1/employees")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  return <div>{data ? JSON.stringify(data) : "Loading..."}</div>;
}
