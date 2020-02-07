import React, { Component } from "react";
import Container from "../components/Container";
import api from "../Utils/api";

class Table extends Component {

  state = {
    result: {}
  }


  componentDidMount() {
  this.gatherEmployees();
  };

  gatherEmployees() {
  api.search()
    .then(res => console.log(res.data))
    // .then(res => this.setState({ result: res.data }))
    .catch(err => console.log(err));
    
  // console.log(this.state.result);
  };

  render() {
    return (
    <Container>
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
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </Container>
    )
  };

};

export default Table;