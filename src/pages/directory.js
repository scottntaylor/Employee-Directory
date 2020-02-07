import React from "react";
import Container from "../components/Container";
import Col from "../components/Col";
import Row from "../components/Row";
// import Navbar from "../components/Navbar";

const Directory = () => {
    const handleSubmit = e => {
        e.preventDefault();
    };
    return (
        <div>
            {/* <Navbar/> */}
            <div className="mt-4">
                <h2>Add Employee</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <Container className="mt-3 px-5">
                    <Row className="form-group">
                        <Col size="12">
                            <input className="form-control" type="text" placeholder="First Name" name="firstname" />
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Col size="12">
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Last Name"
                                name="lastname"
                            />
                        </Col>
                    </Row>
                    <button className="btn btn-success" type="submit">
                        Submit
              </button>
                </Container>
                
            </form>
        </div>
    );
}
export default Directory;