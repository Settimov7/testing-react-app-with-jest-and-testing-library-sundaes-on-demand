import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export const SummaryForm = () => {
  const [isTermsAndConditionsChecked, setIsTermsAndConditionsChecked] =
    useState(false);

  const checkboxLabel = (
    <span>
      I agree to <span style={{ color: "blue" }}>Terms and Conditions</span>
    </span>
  );

  const isConfirmOrderButtonDisabled = !isTermsAndConditionsChecked;

  return (
    <Form>
      <Form.Group controlId="terms-and-conditions">
        <Form.Check
          type="checkbox"
          checked={isTermsAndConditionsChecked}
          onChange={(event) =>
            setIsTermsAndConditionsChecked(event.target.checked)
          }
          label={checkboxLabel}
        ></Form.Check>
      </Form.Group>

      <Button
        variant="primary"
        type="submit"
        disabled={isConfirmOrderButtonDisabled}
      >
        Confirm Order
      </Button>
    </Form>
  );
};
