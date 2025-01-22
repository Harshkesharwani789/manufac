import React, { useEffect } from "react";
import "../css/About.css";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  Carousel,
  Form,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import icon from "../assests/Aluminium & Zinc die casting parts/aluminium-die-casting-parts-500x500.webp";
import icon2 from "../assests/Brass components/aluminium-cylindrical-sleeve-2-500x500.webp";
import icon3 from "../assests/cat-1/gears-jpg-500x500.webp";
import interior from "../assests/interior.jpg";
import expert1 from "../assests/expert-01.png";
import expert2 from "../assests/expert-02.png";
import expert3 from "../assests/expert-03.png";
import expert4 from "../assests/expert-04.png";
import commercial from "../assests/commercial-01.jpg";
import commercial1 from "../assests/commercial-02.webp";
import mission from "./../assests/mission.webp";
import logo from './../assests/logo_1.png';

import alumunium8 from "../assests/Aluminium & Zinc die casting parts/aluminum-metal-castings-500x500.webp";
import brass4 from "./../assests/Brass components/brass-precision-parts-500x500.webp";
import vision from './../assests/img5.jpeg';

const AboutPage = () => {
  const navigate = useNavigate();

  // const handleMoreAboutClick = () => {
  //   navigate("/aboutus");
  // };


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  const experts = [
    {
      name: "Tom Holland",
      title: "CEO & Founder",
      image: expert1,
      facebook: "#",
      instagram: "#",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Zendaya",
      title: "CEO & Founder",
      image: expert2,
      facebook: "#",
      instagram: "#",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Tobey Maguire",
      title: "CEO & Founder",
      image: expert3,
      facebook: "#",
      instagram: "#",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Marisa Tomei",
      title: "CEO & Founder",
      image: expert4,
      facebook: "#",
      instagram: "#",
      linkedin: "#",
      twitter: "#",
    },
  ];

  return (
    <div className="about-page-container" style={{ paddingTop: "10px" }}>
      {/* Adjust top padding */}
      <div className="about-page">
        {/* Navbar */}

        {/* Content below Navbar */}
        <div className="content-wrapper">
          <h1>About Us</h1>

        </div>
      </div>
      <div className="container" style={{ padding: "25px" }}>
        <div className="row justify-content-center align-items-center">
          <div className="col-md-6">
            {/* <div className="row">
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-12 mb-2 mt-3">
                    <img src={icon} alt="" className="xxxx" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 mt-3">
                    <img src={icon2} alt="" className="xxxx" />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <img src={icon3} alt="" className="xxxx1" />
              </div>
            </div> */}
            <Col md={12}>
              <Row>
                <Col md={6}>
                  <Row>
                    <Col md={12} className="mb-2 mt-3">
                      <img
                        src={alumunium8}
                        alt=""
                        className="xxxx"
                        style={{ width: "100%", borderRadius: "14px" }}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col md={12} className="mt-3">
                      <img
                        src={icon2}
                        alt=""
                        className="xxxx"
                        style={{ width: "100%", borderRadius: "14px" }}
                      />
                    </Col>
                  </Row>
                </Col>
                <Col md={6}>
                  <Row>
                    <Col md={12} className="mb-2 mt-3">
                      <img
                        src={brass4}
                        alt=""
                        className="xxxx1"
                        style={{ width: "100%", borderRadius: "14px" }}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col md={12} className="mt-3">
                      <img
                        src={icon3}
                        alt=""
                        className="xxxx1"
                        style={{ width: "100%", borderRadius: "14px" }}
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </div>

          <div className="col-md-6">
            <Container className="about-us-container py-5">
              <Row>
                <Col lg={12} className="text-center">

                  <p className="welcome-text text-warning text-center">About Us</p>
                  <h2 className="main-heading">
                    Trusted Partner for Precision Components Manufacturing
                  </h2>
                </Col>
              </Row>

              <Row className="text-center my-4">
                <Col lg={4} md={12}>
                  <div className="d-inline-block">
                    <span className="badge bg-warning text-dark">
                      Precision Components
                    </span>
                  </div>
                </Col>
                <Col lg={4} md={12}>
                  <div className="d-inline-block">
                    <span className="badge bg-warning text-dark">
                      Competitive Pricing
                    </span>
                  </div>
                </Col>
                <Col lg={4} md={15}>
                  <div className="d-inline-block">
                    <span className="badge bg-warning text-dark">
                      Experts Support
                    </span>
                  </div>
                </Col>
              </Row>

              <Row className="leadership">
                <Col lg={12}>
                  <p>
                    Founded by engineers with over two decades of expertise in
                    manufacturing and supply chain management, PreciseAxis is a trusted name in engineering excellence. Our core
                    strengths lie in:
                  </p>
                  <ul>
                    <li>
                      <span className="fs-5 fw-bolder">
                        Vendor Development & Management:
                      </span>{" "}
                      Forging strategic partnerships and nurturing vendor
                      relationships.
                    </li>
                    <li>
                      <span className="fs-5 fw-bolder">
                        Operational Efficiency:
                      </span>{" "}
                      Optimizing supply chain processes to reduce costs and
                      improve performance.
                    </li>
                    <li>
                      <span className="fs-5 fw-bolder">
                        Industry Expertise:
                      </span>{" "}
                      Serving diverse sectors like cutting tools, precision
                      components, sheet metal, cold and hot forging, powder
                      metallurgy, and consumable industries, including defense,
                      medical, and machinery spare parts.
                    </li>
                  </ul>
                  <p>
                    With a clear strategy and ethical business practices, we
                    drive sustainable growth and operational excellence.
                  </p>
                </Col>
              </Row>
              <hr className="my-4" />
            </Container>
          </div>

          <div>
            <Container className="about-us-container py-5">
              <Row>

                <p className="welcome-text text-warning text-center">About Us</p>
                <h2 className="main-heading text-center">
                  At PreciseAxis, leadership is defined by:
                </h2>
                <div className="leadership">
                  <p>•
                    <span className="fw-bolder fs-5">Visionary Strategy:</span>{" "}
                    Driving growth through well-defined enterprise strategies.
                  </p>
                  <p>•
                    <span className="fw-bolder fs-5">
                      Agility & Scalability:
                    </span>
                    Ensuring swift scalability with multiple supply chain
                    strategies for 10x efficiency.
                  </p>
                  <p>
                    •{" "}
                    <span className="fw-bolder fs-5">
                      Global Supplier Network:
                    </span>{" "}
                    Collaborating with a network of world-class suppliers,
                    delivering reliable solutions across industries.
                  </p>
                  <p>
                    •{" "}
                    <span className="fw-bolder fs-5">
                      Commitment to Integrity:
                    </span>{" "}
                    Upholding ethical practices and contributing to the
                    communities we serve.
                  </p>
                </div>
              </Row>
            </Container>
          </div>
        </div>
      </div>
      <div style={{ fontFamily: "'Arial', sans-serif" }}>
        {/* <Container className="my-5">
          <Row className="align-items-center mb-5">
            <Col md={6}>
              <img
                src={interior}
                alt="Interior Design"
                className="img-fluid rounded"
                style={{
                  border: "none",
                  borderRadius: "8px",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                }}
              />
            </Col>
            <Col md={6}>
              <h3 style={{ fontWeight: "bold", fontSize: "2rem" }}>
                Founded in 1997, Dhavanesha Interiors...
              </h3>
              <p style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
                We've distilled 28 years of industry wisdom into crafting your
                perfect home. From humble beginnings to becoming a leader in
                design and craftsmanship, our journey has been marked by a
                dedication to quality and customer satisfaction. As a
                third-generation family business, we have inherited a legacy of
                passion and expertise in transforming spaces.
              </p>
            </Col>
          </Row>

          <h2 className="text-center mb-4 display-6 pt-3" style={{ fontWeight: "bold", fontSize: "2.5rem" }}>
            What Sets Us Apart
          </h2>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
            At PreciseAxis Pvt Ltd, we take pride in our distinct strengths that make us a trusted partner for engineering and manufacturing solutions:
          </p>

          <Row className="justify-content-center">
            <Col xs={12} md={4} className="mb-3">
              <Card className="text-center border-0">
                <Card.Body>
                  <div className="mb-3">
                    <i
                      className="fas fa-trophy"
                      style={{ fontSize: "2.5rem", color: "#f0c14b" }}
                    ></i>
                  </div>
                  <Card.Title style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
                    Legacy of Excellence
                  </Card.Title>
                  <Card.Text style={{ fontSize: "1rem" }}>
                    With over two decades of experience, we have honed our skills
                    in creating bespoke interiors that merge functionality with
                    aesthetic appeal.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={4} className="mb-3">
              <Card className="text-center border-0">
                <Card.Body>
                  <div className="mb-3">
                    <i
                      className="fas fa-lightbulb"
                      style={{ fontSize: "2.5rem", color: "#f0c14b" }}
                    ></i>
                  </div>
                  <Card.Title style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
                    Innovation and Creativity
                  </Card.Title>
                  <Card.Text style={{ fontSize: "1rem" }}>
                    We embrace innovation in design and technology, ensuring our
                    solutions are at the forefront of contemporary trends.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={4} className="mb-3">
              <Card className="text-center border-0">
                <Card.Body>
                  <div className="mb-3">
                    <i
                      className="fas fa-user"
                      style={{ fontSize: "2.5rem", color: "#f0c14b" }}
                    ></i>
                  </div>
                  <Card.Title style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
                    Customer-Centric Approach
                  </Card.Title>
                  <Card.Text style={{ fontSize: "1rem" }}>
                    Your vision is our priority. We collaborate closely with
                    clients to understand their unique needs and aspirations.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container> */}

        <Container className="my-5">
          <h2 className="main-heading text-center">
            Mission
          </h2>
          <Row className="align-items-center mb-6 mission-vision-section">
            <Col md={6}>
              <div className="zoom-effect">
                <img
                  src={mission}
                  alt="Mission"
                  className="img-fluid rounded w-75"
                />
              </div>
            </Col>
            <Col md={6}>
              <div className="zoom-effect">
                <p style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
                  To deliver high-quality engineering components, cutting tools,
                  and services that incorporate modern design and production
                  methodologies, meeting and exceeding global standards. We are
                  committed to fostering sustainable growth by maintaining
                  ethical practices, ensuring reliability, and continuously
                  enhancing operational excellence across all sectors we serve.
                </p>
              </div>
            </Col>
          </Row>

          <h2 className="main-heading text-center">
            Vision
          </h2>
          <Row className="align-items-center mb-6 mission-vision-section">
            <Col md={6}>
              <div className="zoom-effect">
                <p style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
                  To be a global leader in the engineering and manufacturing
                  industry, recognized for innovation, quality, and ethical
                  business practices. Our vision is to build a robust supply
                  chain ecosystem that empowers industries with
                  precision-engineered solutions, driving efficiency and
                  creating long-term value for our customers, employees, and
                  stakeholders.
                </p>
              </div>
            </Col>
            <Col md={5}>
              <div className="zoom-effect">
                <img src={vision} alt="Vision" className="img-fluid rounded " />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="my-5">
        <p className="welcome-text text-warning text-center">Meet Our Experts</p>
        <h2 className="main-heading text-center">
          The Minds Behind Our Success
        </h2>
        <p className="text-center text-muted">
          Our strength lies in our people. Our team is composed of highly
          skilled engineers, designers, supply chain experts, and quality
          control specialists who work together seamlessly to deliver the best
          solutions for our clients. With a shared commitment to excellence,
          innovation, and customer satisfaction, each team member plays a
          crucial role in achieving our mission to provide top-quality
          engineering components and services.
        </p>

        {/* <Row className="mt-4">
          {experts.map((expert, index) => (
            <Col key={index} md={3} className="mb-4">
              <Card className="expert-card animate__animated animate__slideInUp">
                <Card.Img variant="top" src={expert.image} />
                <div className="expert-info p-3">
                  <i className="icon-up mb-2"></i> 
                  <h5 className="text-center">{expert.name}</h5>
                  <p className="text-center">{expert.title}</p>
                  <div className="social-icons text-center">
                    <a href={expert.facebook}><i className="bi bi-facebook"></i></a>
                    <a href={expert.instagram}><i className="bi bi-instagram"></i></a>
                    <a href={expert.linkedin}><i className="bi bi-linkedin"></i></a>
                    <a href={expert.twitter}><i className="bi bi-twitter"></i></a>
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row> */}
      </Container>

      <div>
        <footer
          className="pt-5"
          style={{ backgroundColor: "#721213", color: "white" }}
        >
          <Container>
            {/* Main Footer Content */}
            <Row>
              {/* Company Logo and Info */}
              <Col md={3} className="mb-4">
                <div className="mb-3">
                  <img
                    src={logo}
                    alt="Machinerex"
                    style={{ maxWidth: "100%" }}
                  />
                </div>
                <p>
                  Founded by engineers with over two decades of expertise in
                  manufacturing and supply chain management, PreciseAxis is a trusted name in engineering excellence
                </p>
                <div>{/* <h6>Customer Service</h6> */}</div>
              </Col>

              {/* Quick Links */}
              <Col md={3} className="mb-4">
                <h5>Quick Links</h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="/" className="text-white">
                      <i class="bi bi-chevron-right"></i>Home
                    </a>
                  </li>
                  <li>
                    <a href="/AboutUs" className="text-white">
                      <i class="bi bi-chevron-right"></i>About Us
                    </a>
                  </li>
                  <li>
                    <a href="/capability" className="text-white">
                      <i class="bi bi-chevron-right"></i>Capabilities
                    </a>
                  </li>
                  <li>
                    <a href="/equipment" className="text-white">
                      <i class="bi bi-chevron-right"></i>Product Gallery
                    </a>
                  </li>
                  <li>
                    <a href="/contact" className="text-white">
                      <i class="bi bi-chevron-right"></i>Contact Us
                    </a>
                  </li>
                </ul>
              </Col>

              {/* Our Service */}
              <Col md={3} className="mb-4">
                <h5>Our Capabilities</h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="/capability" className="text-white">
                      <i class="bi bi-chevron-right"></i>Customized Cutting Tools & Machinery Consumables
                    </a>
                  </li>
                  <li>
                    <a href="/capability" className="text-white">
                      <i class="bi bi-chevron-right"></i>CAD/CAM Engineering Services
                    </a>
                  </li>
                  <li>
                    <a href="/capability" className="text-white">
                      <i class="bi bi-chevron-right"></i>Precision Manufactured Components
                    </a>
                  </li>
                </ul>
              </Col>

              {/* Get in Touch */}
              <Col md={3} className="mb-4">
  <h5>Get in Touch</h5>
  <p className="d-flex align-items-start gap-2">
    <i class="fa-solid fa-location-dot mt-3 fa-xl" style={{ color: "#F39C12" }}></i> No. 880 , Rajiv
    Gandhi Nagar, Bangalore 560097,India
  </p>
  <p className="d-flex align-items-start gap-2">
    <i class="fa-solid fa-location-dot mt-3 fa-xl" style={{ color: "#F39C12" }}></i> 15728,Lorain Ave, Unit #170 , Cleveland , OH 44111 , USA
  </p>
  <p className="d-flex align-items-center gap-2">
    <i
      className="bi bi-envelope-fill"
      style={{ color: "#F39C12" }}
    ></i>
    sales@preciseaxis.com
  </p>
  <p className="d-flex align-items-center gap-2">
    <i
      className="bi bi-envelope-fill"
      style={{ color: "#F39C12" }}
    ></i>
    preciseaxis@gmail.com
  </p>
  <p className="d-flex align-items-center gap-2">
    <i
      className="bi bi-telephone-fill"
      style={{ color: "#F39C12" }}
    ></i>
    (+91) 8951960110  <br /> +1 216 800-7148
  </p>
</Col>
            </Row>

            {/* Footer Bottom */}
            <Row
              className="pt-3 border-top"
              style={{ borderColor: "#F39C12" }}
            >

              <Col md={12} className=" d-flex justify-content-center align-items-center">
                <p className="mb-0">
                  &copy; 2024 All Rights Reserved | Design by ParNets
                </p>
              </Col>
            </Row>
          </Container>
        </footer>
      </div>

    </div>
  );
};

export default AboutPage;
