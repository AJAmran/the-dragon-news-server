import React from "react";
import { Container } from "react-bootstrap";

const Terms = () => {
  return (
    <Container>
      <h2>Terms and Conditions</h2>
      <p>These are the terms and conditions for using our service:</p>
      <ol>
        <li>By using our service, you agree to these terms and conditions.</li>
        <li>
          We reserve the right to modify these terms and conditions at any time.
        </li>
        <li>Your use of the service is at your own risk.</li>
        <li>
          We are not responsible for any damages or losses that may occur from
          using our service.
        </li>
        <li>
          You are responsible for maintaining the confidentiality of your
          account information.
        </li>
      </ol>
    </Container>
  );
};

export default Terms;
