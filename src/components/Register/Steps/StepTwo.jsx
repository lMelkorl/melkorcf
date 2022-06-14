import React, { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";
import validator from "validator";
import Creditcard from "../../CreditCard/CreditCard";

// creating functional component ans getting props from app.js and destucturing them
const StepTwo = ({ nextStep, handleFormData, prevStep, values }) => {
  //creating error state for validation
  const [error, setError] = useState(false);

  // after form submit validating the form data using validator
  const submitFormData = (e) => {
    e.preventDefault();

    // checking if value of first name and last name is empty show error else take to next step
    if (validator.isEmpty(values.age) || validator.isEmpty(values.email)) {
      setError(true);
    } else {
      nextStep();
    }
  };
  return (
    <>
      <Form onSubmit={submitFormData}>
        <Creditcard values={values} />

        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <Button variant="primary" onClick={prevStep}>
            ← Previous
          </Button>
        </div>
      </Form>
    </>
  );
};

export default StepTwo;
