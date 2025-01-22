import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Form, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import logo from './../assests/logo_1.png';

function ContactUs() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
    attachment: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("number", formData.number);
    formDataToSend.append("message", formData.message);
    if (formData.attachment) {
      formDataToSend.append("attachment", formData.attachment);
    }

    try {
      const response = await fetch('https://manufac-yo58.onrender.com/send-email', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        alert('Your enquiry has been sent successfully!');
        // Reset the form
        setFormData({
          name: "",
          email: "",
          number: "",
          message: "",
          attachment: null,
        });
      } else {
        alert('Failed to send enquiry. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send enquiry. Please try again.');
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div>
        <div className="contact-page">
          <div className="overlay"></div>
          <div className="content-wrapper1">
            <h1>Contact Us</h1>
          </div>
        </div>
      </div>
      <Container
        fluid
        className="p-5"
        style={{
          backgroundColor: "#2C3E50",
          color: "white",
          marginTop: "100px",
        }}
      >
        <Row>
          {/* First Flexbox: Content */}
          <Col md={6}>
            <h2>We&apos;re Here to Help Contact Us</h2>
            <h5 className="text-warning mb-3">Get In Touch</h5>

            <Row className="mb-4">
            <Col md={3} className="mb-4">
            <h5>Get in Touch</h5>
            <p className="d-flex align-items-start gap-2">
              <i className="fa-solid fa-location-dot mt-3 fa-xl" style={{ color: "#F39C12" }}></i> No. 880 , Rajiv
              Gandhi Nagar, Bangalore 560097,India
            </p>
            <p className="d-flex align-items-start gap-2">
              <i className="fa-solid fa-location-dot mt-3 fa-xl" style={{ color: "#F39C12" }}></i> 15728,Lorain Ave, Unit #170 , Cleveland , OH 44111 , USA
            </p>
            <p className="d-flex align-items-center gap-2">
              <i className="bi bi-envelope-fill" style={{ color: "#F39C12" }}></i>
              sales@preciseaxis.com
            </p>
            <p className="d-flex align-items-center gap-2">
              <i className="bi bi-envelope-fill" style={{ color: "#F39C12" }}></i>
              preciseaxis@gmail.com
            </p>
            <p className="d-flex align-items-center gap-2">
              <i className="bi bi-telephone-fill" style={{ color: "#F39C12" }}></i>
              (+91) 8951960110  <br /> +1 216 800-7148
            </p>
          </Col>

              <Col md={12} className="mb-3">
                <Card className="bg-dark text-white p-3">
                  <Card.Body className="d-flex align-items-center">
                    <div className="me-3">
                      <i
                        className="bi bi-geo-alt-fill"
                        style={{ fontSize: "1.5rem", color: "#F39C12" }}
                      ></i>
                    </div>
                    <div>
                      <Card.Title>Location</Card.Title>
                      <Card.Text>
                        <span className="fw-bold"> India Address - </span> No. 880 , Rajiv Gandhi Nagar, Bangalore 560097,India
                      </Card.Text>
                      <Card.Text>
                        <span className="fw-bold"> USA Address - </span> 15728,Lorain Ave, Unit #170 , Cleveland , OH 44111 , USA
                      </Card.Text>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>

          {/* Second Flexbox: Form */}
          <Col md={6} className="d-flex align-items-center justify-content-center">
            <Form onSubmit={handleSubmit} className="p-4 shadow-sm rounded" style={{ backgroundColor: "white", color: "black" }}>
              <Row>
                <h1 className="text-center mb-4">Enquiry Form</h1>
                <Col md={6} className="mb-3">
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Col>
                <Col md={12} className="mb-3">
                  <Form.Control
                    type="number"
                    name="number"
                    placeholder="Your Phone Number"
                    value={formData.number}
                    onChange={handleChange}
                    required
                  />
                </Col>
                <Col md={12} className="mb-3">
                  <Form.Control
                    as="textarea"
                    name="message"
                    rows={4}
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </Col>
                <Col md={12} className="mb-3">
                  <Form.Control
                    type="file"
                    name="attachment"
                    onChange={handleChange}
                    accept=".pdf,.jpg,.jpeg,.png" // Allow only PDF and image files
                  />
                </Col>
                <Col md={12}>
                  <Button variant="dark" type="submit" className="w-100">
                    Submit Enquiry
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>

      {/* Footer Section */}
      <div style={{ paddingBottom: "60px" }}></div>
      <footer className="pt-5" style={{ backgroundColor: "#721213", color: "white" }}>
        <Container>
          <Row>
            <Col md={3} className="mb-4">
              <div className="mb-3">
                <img src={logo} alt="Machinerex" style={{ maxWidth: "100%" }} />
              </div>
              <p>
                Founded by engineers with over two decades of expertise in
                manufacturing and supply chain management, PreciseAxis is a trusted name in engineering excellence
              </p>
            </Col>

            <Col md={3} className="mb-4">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="/" className="text-white">
                    <i className="bi bi-chevron-right"></i>Home
                  </a>
                </li>
                <li>
                  <a href="/AboutUs" className="text-white">
                    <i className="bi bi-chevron-right"></i>About Us
                  </a>
                </li>
                <li>
                  <a href="/capability" className="text-white">
                    <i className="bi bi-chevron-right"></i>Capabilities
                  </a>
                </li>
                <li>
                  <a href="/equipment" className="text-white">
                    <i className="bi bi-chevron-right"></i>Product Gallery
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-white">
                    <i className="bi bi-chevron-right"></i>Contact Us
                  </a>
                </li>
              </ul>
            </Col>

            <Col md={3} className="mb-4">
              <h5>Our Capabilities</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="/capability" className="text-white">
                    <i className="bi bi-chevron-right"></i>Customized Cutting Tools & Machinery Consumables
                  </a>
                </li>
                <li>
                  <a href="/capability" className="text-white">
                    <i className="bi bi-chevron-right"></i>CAD/CAM Engineering Services
                  </a>
                </li>
                <li>
                  <a href="/capability" className="text-white">
                    <i className="bi bi-chevron-right"></i>Precision Manufactured Components
                  </a>
                </li>
              </ul>
            </Col>

            <Col md={3} className="mb-4">
              <h5>Get in Touch</h5>
              <p className="d-flex align-items-start gap-2">
                <i className="fa-solid fa-location-dot mt-3 fa-xl" style={{ color: "#F39C12" }}></i> No. 880 , Rajiv
                Gandhi Nagar, Bangalore 560097,India
              </p>
              <p className="d-flex align-items-start gap-2">
                <i className="fa-solid fa-location-dot mt-3 fa-xl" style={{ color: "#F39C12" }}></i> 15728,Lorain Ave, Unit #170 , Cleveland , OH 44111 , USA
              </p>
              <p className="d-flex align-items-center gap-2">
                <i className="bi bi-envelope-fill" style={{ color: "#F39C12" }}></i>
                sales@preciseaxis.com
              </p>
              <p className="d-flex align-items-center gap-2">
                <i className="bi bi-telephone-fill" style={{ color: "#F39C12" }}></i>
                (+91) 8951960110  <br /> +1 216 800-7148
              </p>
            </Col>
          </Row>

          <Row className="pt-3 border-top" style={{ borderColor: "#F39C12" }}>
            <Col md={12} className="d-flex justify-content-center align-items-center">
              <p className="mb-0">
                &copy; 2024 All Rights Reserved | Design by ParNets
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default ContactUs;