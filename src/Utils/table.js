import React, { Component } from "react";
import Container from "../components/Container";
import api from "../Utils/api";

class Table extends Component {

  state = {
    result: []
  }


  componentDidMount() {
    this.gatherEmployees();
  };

  gatherEmployees() {
    return new Promise((resolve, reject) => {
      api.search()
        .then((res) => {
          const users = res.data.results;
          const results = users.map((user) => {
            return {
              firstname: user.name.first + user.lastname,
              email: user.email,
              image: user.phone,
            };
          });
          resolve(results);
        }).catch(err => reject(err));
      //   .then(res => console.log(res.data.results[2]))
      //   // .then(res => this.setState({ result: res.data.results }))


      // // (console.log(this.state));
      });
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
              <td>Matt</td>
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