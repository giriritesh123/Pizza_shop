import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Policy = () => {
  return (
    <>
      <Container style={{ marginTop: "50px" }}>
        <h1>Terms and policy</h1>
        <Row>
          <Col md={10}>
            <h6>
            Ordering and Delivery
            </h6>
            <p>
            By placing an order with GIRI's Pizza Shop, you agree to the terms of payment and delivery. 
            We strive to provide accurate delivery estimates,
             but please note that circumstances beyond our control might affect delivery times
            </p>
            <h6>
            Quality Assurance
            </h6>
            <p>
            We take pride in the quality of our pizzas. If you're unsatisfied with your order, please notify us within 30 minutes of delivery for a resolution. 
            We reserve the right to refuse refunds or replacements if the complaint is not reported promptly.
            </p>
            <h6>
            Allergies and Dietary Restrictions
            </h6>
            <p>
            While we accommodate dietary preferences, please be aware that our kitchen handles various ingredients. It's your 
            responsibility to inform us of any allergies or dietary restrictions when placing your order.
            </p>
            <h6>
            Intellectual Property:
            </h6>
            <p>
            The content, including images and text, on the GIRI's Pizza Shop website and social
             media platforms is our intellectual property and may not be used without permission.
            </p>
            
            <h6>
              Privacy Policy
            </h6>
            <p>
            GIRI's Pizza Shop reserves the right to update or modify this Privacy Policy at any time. Any changes will be posted on our website.

By using our services, you agree to the terms outlined in this Privacy Policy. If you have any questions or concerns regarding your privacy or data security, please don't hesitate to contact our customer support. Your trust is of utmost importance to us,
 and we are dedicated to ensuring your information remains secure and confidential.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Policy;
