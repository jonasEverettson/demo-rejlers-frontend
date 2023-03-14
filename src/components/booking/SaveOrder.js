import { render } from "@testing-library/react";

saveOrder = (booking) => {
  axios.post('http://localhost:8080/api/v1/ordercar', booking)
    .then(response => {
      
      this.setState({ booking: response.data });
    })
    .catch(error => {
  
      console.error(error);
    });
};

  return (
    <form onSubmit={this.handleSubmit}>
      <input type="text" name="carId" value={this.state.carId} onChange={this.handleInputChange} />
      <input type="text" name="employeeId" value={this.state.employeeId} onChange={this.handleInputChange} />
      <button type="submit">Save Order</button>
    </form>
  );
