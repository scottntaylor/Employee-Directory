import React, { Component } from "react";
import Container from "../components/Container";
// import api from "../Utils/api";
import gatherEmployees from "../Utils/emloyeeObject";

class Table extends Component {

  // state = {
  //   result: [],
  //   name: "",
  //   email: "",
  //   phone: "",
  //   age: ""

  // }

 

  componentDidMount() {
    gatherEmployees();
    // this.state.result.push(results)
  };

  

  render() {
    console.log(this.state);
    return (

      <Container>
        <div className="mt-4">
                <h2>Employee List</h2> <button className="btn btn-success" type="submit">
                        Sort
              </button>
            </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Age</th>
            </tr>
          </thead>
          <tbody>
          {/* <tr>
              <th scope="row">{this.state.name}</th>
              <td>matt.johnson@gmail.com</td>
              <td>(123)456-7890</td>
              <td>25</td>
            </tr> */}
            <tr>
              <th scope="row">Matt Johnson</th>
              <td>matt.johnson@gmail.com</td>
              <td>(123)456-7890</td>
              <td>25</td>
            </tr>
            <tr>
              <th scope="row">Kyle Green</th>
              <td>kyle.green@gmail.com</td>
              <td>(234)567-8901</td>
              <td>32</td>
            </tr>
            <tr>
              <th scope="row">Lebron James</th>
              <td>theking23@nba.com</td>
              <td>(345)678-9012</td>
              <td>35</td>
            </tr>
          </tbody>
        </table>
      </Container>
    )
  };

};

export default Table;