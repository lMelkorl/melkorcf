import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";

import StepOne from "./Steps/StepOne";
import StepTwo from "./Steps/StepTwo";

import Creditcard from "../CreditCard/CreditCard";

export default function Register() {
  const user = true;

  const [step, setstep] = useState(1);

  //state for form data
  const [formData, setFormData] = useState({
    username: "",
  });

  // function for going to next step by increasing step state by 1
  const nextStep = () => {
    setstep(step + 1);
  };

  // function for going to previous step by decreasing step state by 1
  const prevStep = () => {
    setstep(step - 1);
  };

  // handling form input data by taking onchange value and updating our previous form data state
  const handleInputData = (input) => (e) => {
    // input value from the form
    const { value } = e.target;

    //updating for data state taking previous state and then adding new value to create new object
    setFormData((prevState) => ({
      ...prevState,
      [input]: value,
    }));
  };

  // javascript switch case to show different form in each step
  switch (step) {
    // case 1 to show stepOne form and passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
    case 1:
      return (
        <div className="App">
          {user ? (
            <>
              <div className="text-center">
                <h3 className="mt" style={{ marginTop: "5rem" }}>
                  You have already registered
                </h3>
                <a href="/">Back To Home</a>
              </div>
            </>
          ) : (
            <Container>
              <Row>
                <Col md={{ span: 6, offset: 3 }} className="custom-margin">
                  <StepOne
                    nextStep={nextStep}
                    handleFormData={handleInputData}
                    values={formData}
                  />
                </Col>
              </Row>
            </Container>
          )}
        </div>
      );
    // case 2 to show stepTwo form passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
    case 2:
      return (
        <div className="App">
          <Container>
            <Row>
              <Col md={{ span: 6, offset: 3 }} className="custom-margin">
                <StepTwo
                  nextStep={nextStep}
                  prevStep={prevStep}
                  handleFormData={handleInputData}
                  values={formData}
                />
              </Col>
            </Row>
          </Container>
        </div>
      );
    //veriler formdatada
    default:
      return <div className="App"></div>;
  }
}
