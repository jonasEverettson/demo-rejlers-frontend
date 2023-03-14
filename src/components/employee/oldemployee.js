import React, { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/system";
import { Paper, Button } from "@mui/material";

export default function Employee() {
  const paperStyle = { padding: "50px 20px", width: 600, margin: "20px auto" };
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [department, setDepartment] = useState("");
  const [city, setCity] = useState("");
  const [employeeNumber, setEmployeeNumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    const employee = {
      firstName,
      lastName,
      department,
      city,
      employeeNumber,
      phoneNumber,
      email,
    };
    console.log(employee);
    fetch("http://localhost:8080/api/v1/addemployee", {
      mode: "no-cors",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(employee),
    }).then(() => console.log("New Employee added"));
  };

  return (
    <Container>
      <Paper elevation={3} style={paperStyle}>
        <h1 style={{ color: "blue" }}>
          <u>Add Employee</u>
        </h1>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="Förnamn"
            variant="outlined"
            fullWidth
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Efternamn"
            variant="outlined"
            fullWidth
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Avdelning"
            variant="outlined"
            fullWidth
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Stad"
            variant="outlined"
            fullWidth
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Anställningsnummer"
            variant="outlined"
            fullWidth
            value={employeeNumber}
            onChange={(e) => setEmployeeNumber(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Mobil"
            variant="outlined"
            fullWidth
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Button variant="contained" onClick={handleClick}>
            Submit
          </Button>
        </Box>
        {firstName}
        {lastName}
        {department}
      </Paper>
    </Container>
  );
}
