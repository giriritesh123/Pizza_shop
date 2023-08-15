import React from "react";
import { Container, Row, Col, Table, Image } from "react-bootstrap";
import { FiPhoneCall } from "react-icons/fi";
import { ImMobile } from "react-icons/im";
import { AiOutlineMail } from "react-icons/ai";
const Contact = () => {
  return (
    <>
      <Container style={{ marginTop: "50px" }}>
        <Row>
          <Col md={6}>
            <h1>GIRI's Pizza Shop</h1>
            <p>
            Welcome to GIRI's Pizza Shop, where passion for pizza meets exceptional service. We value your feedback, inquiries, and the opportunity to connect with our cherished customers.
Have a question about our mouthwatering menu? Need assistance with placing an order? Our dedicated customer support team is here to assist you every step of the way. Whether you're craving our signature Margherita pizza or seeking details about our specialty gourmet creations, we're just a message or a call away.
At GIRI's, we believe in building lasting relationships. Your thoughts and suggestions matter to us – they help us continually elevate your dining experience. Reach out to us to share your feedback, rave about your recent pizza delight, or even to discuss custom orders for your special events.
Getting in touch is easy. Feel free to drop by our brick-and-mortar location, give us a ring at our customer hotline, or use the convenient online form on this page. No matter how you choose to connect, expect a warm and prompt response from our team.
Thank you for choosing GIRI's Pizza Shop. We look forward to hearing from you and being a part of your pizza journey. Your satisfaction is our success, and we're committed to ensuring every slice brings a smile to your face.
            </p>

            <Table striped bordered hover className="text-center">
              <thead>
                <tr>
                  <th className="bg-warning text-center" colSpan={3}>
                    --- Contact Details ---
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <FiPhoneCall />
                  </td>
                  <td>Phone</td>
                  <td>0123-456789</td>
                </tr>
                <tr>
                  <td>
                    <ImMobile />
                  </td>
                  <td>Call</td>
                  <td>1234567890</td>
                </tr>
                <tr>
                  <td>
                    <AiOutlineMail />
                  </td>
                  <td>Email</td>
                  <td>Help@urdomain.com</td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col md={6}>
            <Image
              src="images/farmhouse.jpg"
              style={{ width: "100%", height: "100%" }}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
