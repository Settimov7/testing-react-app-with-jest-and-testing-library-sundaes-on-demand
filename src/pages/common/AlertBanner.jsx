import Alert from "react-bootstrap/Alert";

const DEFAULT_MESSAGE = "An unexpected error ocured. Please try again later.";
const DEFAULT_VARIANT = "danger";

export const AlertBanner = ({
  message = DEFAULT_MESSAGE,
  variant = DEFAULT_VARIANT,
}) => {
  return (
    <Alert
      variant={variant}
      style={{ backgroundColor: "red" }}
      aria-label={message}
    >
      {message}
    </Alert>
  );
};
