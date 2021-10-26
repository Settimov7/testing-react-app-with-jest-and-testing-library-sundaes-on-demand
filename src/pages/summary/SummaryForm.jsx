import React, { useState } from "react";
import { Form, Button, Popover, OverlayTrigger } from "react-bootstrap";

export const SummaryForm = () => {
  const [isTermsAndConditionsChecked, setIsTermsAndConditionsChecked] =
    useState(false);

  const popover = (
    <Popover id="popover-basic">
      <Popover.Body>No ice cream will actually be delivered</Popover.Body>
    </Popover>
  );

  const checkboxLabel = (
    <span>
      I agree to
      <OverlayTrigger placement="right" overlay={popover}>
        <span style={{ color: "blue" }}>Terms and Conditions</span>
      </OverlayTrigger>
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
