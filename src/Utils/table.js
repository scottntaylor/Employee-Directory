import React, { Component } from "react";
import Container from "../components/Container";
// import api from "../Utils/api";
// import GatherEmployees from "../Utils/emloyeeObject";
import api from "./api";

class Table extends Component {

  state = {
    results: []
  }



  componentDidMount() {
    api.search()
      .then(res => {
        console.log(res);
        this.setState({
          results: res.data.results
        })
      })
      .catch(err => console.log(err))
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
           

            {this.state.results.map(result =>(
              <tr>
              <th scope="row">{result.name.first + " " + result.name.last}</th>
              <td>{result.email}</td>
              <td>{result.phone}</td>
              <td>{result.dob.age}</td>
            </tr>
            ))}
            
          </tbody>
        </table>
      </Container>
    )
  };

};

export default Table;