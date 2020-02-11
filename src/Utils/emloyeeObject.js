import api from "../Utils/api";

import { Component } from "react";


function gatherEmployees() {
    return new Promise((resolve, reject) => {
        api.search()
            .then((res) => {
                const users = res.data.results;
                const results = users.map((user) => {
                    return {
                        firstname: user.name.first,
                        lastname: user.name.last,
                        email: user.email,
                        phone: user.phone,
                    };
                });
                resolve(results);
                // displayData();
                console.log(results);
            }).catch(err => reject(err))
        // .then(this.setState({ result: results }))
        // .catch(err => reject(err));
        //   .then(res => console.log(res.data.results[2]))





    });
};

class employeeObject extends Component {
    constructor(props) {
        super(props);
        this.state = {

            name: "",
            email: "",
            phone: "",
            age: ""

        }
        // displayData(results) {
        //     this.setState({
        //         name: results.firstname + results.lastname,
        //         email: results.email,
        //         phone: results.phone,
        //         age: results.age
        //     });
        //     console.log(this.state);
        // };
    }
    
};

export default gatherEmployees;