import "../css/Home.css";
import "../css/About.css";

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Card } from "react-bootstrap";
import { Container, Row, Col, Button, Badge } from "react-bootstrap";

import icon from "../assests/Aluminium & Zinc die casting parts/aluminium-die-casting-parts-500x500.webp";
import icon2 from "../assests/Brass components/aluminium-cylindrical-sleeve-2-500x500.webp";
import icon3 from "../assests/cat-1/gears-jpg-500x500.webp";
import excavator from "../assests/excavator-02.webp";
import map from "../assests/map.png";
import map2 from "../assests/navy-world-map.png";
import worker from "../assests/worker.webp";
import Logo from "../assests/logo.svg";
import Tech1 from "../assests/tech1.png";
import Tech2 from "../assests/tech2.png";
import Tech3 from "../assests/tech3.png";
import Tech4 from "../assests/tech4.png";
import Tech5 from "../assests/tech5.webp";
import banner from "../assests/Ground-Spiral-Bevel-Gears.jpg";
import sheet1 from "../assests/New folder/product-250x250.jpg";
import forging1 from "../assests/Hot forging & Cold forging of Fasteners/Hot forging & Cold forging of Fasteners 2.webp";
import alumunium1 from "../assests/Aluminium & Zinc die casting parts/Aluminium & Zinc die casting parts2.webp";
import precision1 from "../assests/Precision Machining parts/2-500x500.webp";
import brass1 from "../assests/Brass components/aluminium-cylindrical-sleeve-2-500x500.webp";
import cad1 from "../assests/New folder/cad_cam_services_cover.jpg";
import plastics1 from "../assests/Plastic injection parts/ketron-peek-1000-500x500.webp";
import powder1 from "../assests/Powder metallurgy Parts/0-500x500.webp";
import export1 from "../assests/New folder/Import-Export-Code-Registration-1536x864.jpg";
import alumunium8 from "../assests/Aluminium & Zinc die casting parts/aluminum-metal-castings-500x500.webp";
import brass4 from "./../assests/Brass components/brass-precision-parts-500x500.webp";
import logo from './../assests/logo_1.png';

import choose from './../assests/img1.jpeg';
// import product from "../assests/Product-01.png"
import cutting1 from './../assests/img2.jpeg';

const Home = () => {
  const settings = {
    dots: true, // Add pagination dots if needed
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of cards to show
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Autoplay functionality
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const navigate = useNavigate(); // For navigation

  // Function to handle clicking on the flexbox
  const handleBoxClick = () => {
    navigate("/capability"); // Redirect to capability page
  };

  const handleMoreAboutClick = () => {
    navigate("/aboutus");
  };

  const [selectedCategory, setSelectedCategory] = useState(null);

  // Dummy data for categories
  const categories = [
    {
      id: 1,
      title: "Customized Cutting Tools & Machinery Consumables",
      img: cutting1,
      details: "Details about grading equipment",
    },
    {
      id: 2,
      title: "CAD/CAM Engineering Services",
      img: cad1,
      details: "Details about agricultural machinery",
    },
    {
      id: 3,
      title: "Precision Manufactured Components",
      img: precision1,
      details: "Details about forestry equipment",
    },
  ];

  // Function to handle category click and reveal details
  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId === selectedCategory ? null : categoryId);
  };

  return (
    <div>
      <div className="home-container ">
        <div className="home-content1">
          {/* Welcome Text */}
          <p className="welcome-text text-warning">Welcome to PreciseAxis</p>

          {/* Main Heading */}
          <h1 className="main-heading">
            One-stop, on-demand manufacturing services.
          </h1>

          {/* Description */}
          <h3>Simplify your manufacturing needs with PreciseAxis:</h3>
          <ul>
            <li>
              <span>Instant Solutions:</span> Upload your 3D designs, receive
              real-time quotes, and place orders seamlessly.
            </li>
            <li>
              <span>Extensive Network:</span> Over 1,000 manufacturers in India
              and overseas.
            </li>
            <li>
              <span>Versatile Processes:</span> Supporting 15+ processes and
              130+ materials for prototyping and production.
            </li>
            <li>
              <span>Speed:</span> Manufacture parts in as little as one day.
            </li>
            <li>
              <span>Quality Assurance:</span> Rigorous QA processes and
              certifications for every product.
            </li>
          </ul>

          {/* Get Started Button */}
          <a href="/capability"> <button className="get-started-btn">Get Started</button></a>

          {/* Flex Container for Reviews and Stats */}
          <div className="stats-container">


            {/* Stats */}
            <div className="stats">
              <div className="stat">
                <h2>15+</h2>
                <p>Processes</p>
              </div>
              <div className="stat">
                <h2>130+</h2>
                <p>Materials</p>
              </div>
              <div className="stat">
                <h2>1000+</h2>
                <p>Manufacturer</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="right-side-container">
        <div className="image-box">
          {/* <img src={bulldozer} alt="Excavator" className="excavator-image" /> */}
          <img
            src={banner}
            alt=""
            className="excavator-image"
          />
        </div>
      </div>
      <div className="button-container">
        <button className="custom-button">
          <span className="circle-icon">●</span>
          Quality You Can Trust!
        </button>
        <button className="custom-button">
          <span className="circle-icon">●</span>
          Act Fast, Save More!
        </button>
        <button className="custom-button">
          <span className="circle-icon">●</span>
          Innovation at Its Best!
        </button>
        <button className="custom-button">
          <span className="circle-icon">●</span>
          Smart Choices, Big Savings!
        </button>
      </div>

      {/* Machinerex Section */}
      <div
        className="why-machinerex"
        style={{ padding: "50px 0", backgroundColor: "#2C3E50" }}
      >
        {/* Section Title */}
        <p className="welcome-text text-warning text-center">Capabilities</p>
        <h1
          className="machinerex-subtitle"
          style={{
            color: "white",
            // textAlign: "center",
            fontSize: "2.5rem",
            margin: "10px 0",
          }}
        >
          Why PreciseAxis Stands Out
        </h1>

        {/* Flexbox Container (Sliding Effect) */}
        <div
          className="machinerex-slider"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "20px",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {/* Flexboxes with sliding effect */}

          <div
            className="machinerex-box"
            onClick={handleBoxClick}
            style={{
              background: "#34495E",
              padding: "20px",
              borderRadius: "8px",
              flex: "1 1 calc(20% - 20px)",
              minWidth: "250px",
              textAlign: "center",
              color: "white",
            }}
          >
            <img
              src={Tech1}
              alt="Quality"
              className="icon"
              style={{ maxWidth: "80px", marginBottom: "10px" }}
            />
            <h2 style={{ fontSize: "1.2rem", margin: "10px 0" }}>
              Quality You Can Trust!
            </h2>
            <p>
              At PreciseAxis, our rigorous quality control ensures every product
              meets global standards, delivering precision, reliability, and
              customer satisfaction.
            </p>
          </div>
          <div
            className="machinerex-box"
            onClick={handleBoxClick}
            style={{
              background: "#34495E",
              padding: "20px",
              borderRadius: "8px",
              flex: "1 1 calc(20% - 20px)",
              minWidth: "250px",
              textAlign: "center",
              color: "white",
            }}
          >
            <img
              src={Tech2}
              alt="Unrivaled Support"
              className="icon"
              style={{ maxWidth: "80px", marginBottom: "10px" }}
            />
            <h2 style={{ fontSize: "1.2rem", margin: "10px 0" }}>
              Act Fast, Save More!
            </h2>
            <p>
              With PreciseAxis, quick decisions lead to big savings. Streamlined
              processes ensure faster delivery and cost-effective solutions
              every time.
            </p>
          </div>

          <div
            className="machinerex-box"
            onClick={handleBoxClick}
            style={{
              background: "#34495E",
              padding: "20px",
              borderRadius: "8px",
              flex: "1 1 calc(20% - 20px)",
              minWidth: "250px",
              textAlign: "center",
              color: "white",
            }}
          >
            <img
              src={Tech3}
              alt="Innovation"
              className="icon"
              style={{ maxWidth: "80px", marginBottom: "10px" }}
            />
            <h2 style={{ fontSize: "1.2rem", margin: "10px 0" }}>
              Innovation at Its Best
            </h2>
            <p>
              PreciseAxis delivers cutting-edge solutions with advanced
              technology, redefining precision and efficiency for industries
              worldwide. Experience true innovation with us.
            </p>
          </div>

          <div
            className="machinerex-box"
            onClick={handleBoxClick}
            style={{
              background: "#34495E",
              padding: "20px",
              borderRadius: "8px",
              flex: "1 1 calc(20% - 20px)",
              minWidth: "250px",
              textAlign: "center",
              color: "white",
            }}
          >
            <img
              src={Tech4}
              alt="Smart Choices"
              className="icon"
              style={{ maxWidth: "80px", marginBottom: "10px" }}
            />
            <h2 style={{ fontSize: "1.2rem", margin: "10px 0" }}>
              Smart Choices, Big Savings
            </h2>
            <p>
              Choose PreciseAxis for cost-effective solutions. Our efficient
              processes and expert strategies ensure top quality with
              significant savings.
            </p>
          </div>

          {/* <div
            className="machinerex-box"
            onClick={handleBoxClick}
            style={{
              background: "#34495E",
              padding: "20px",
              borderRadius: "8px",
              flex: "1 1 calc(20% - 20px)",
              minWidth: "250px",
              textAlign: "center",
              color: "white",
              display: "flex", // Use flexbox for proper alignment
              flexDirection: "column", // Stack children vertically
              alignItems: "center", // Center align items
            }}
          >
            <img
              src={Tech5}
              alt="Quality"
              className="icon"
              style={{ maxWidth: "80px", marginBottom: "10px" }}
            />
            <h2 style={{ fontSize: "1.2rem", margin: "10px 0" }}>
              Quality You Can Trust!
            </h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div> */}
        </div>
      </div>
      <Container style={{ padding: "25px" }}>
        <Row>
          <Col md={6}>
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

          <Col md={6}>
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
                    <Badge bg="warning" className="text-dark">
                      Precision Components
                    </Badge>
                  </div>
                </Col>
                <Col lg={4} md={12}>
                  <div className="d-inline-block">
                    <Badge bg="warning" className="text-dark">
                      Competitive Pricing
                    </Badge>
                  </div>
                </Col>
                <Col lg={4} md={12}>
                  <div className="d-inline-block">
                    <Badge bg="warning" className="text-dark">
                      Experts Support
                    </Badge>
                  </div>
                </Col>
              </Row>

              <Row className="">
                <Col lg={12}>
                  <p>
                    Founded by engineers with over two decades of expertise in
                    manufacturing and supply chain management, PreciseAxis  is a trusted name in engineering excellence.
                  </p>
                </Col>
              </Row>

              <hr className="my-4" />
              <Row className="text-center">
                <Col lg={12}>
                  <a href="/AboutUs">
                    <Button
                      style={{ background: "#ff9800" }}
                    >
                      More About Us
                    </Button>
                  </a>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>

      <Container className="category-grid py-5">
        <Row>
          <Col lg={12} className="text-center">
            <p className="welcome-text text-warning text-center">Let's Choose</p>
            <h2 className="main-heading">Select Your Ideal Category</h2>
          </Col>
        </Row>

        <Row className="mt-4">
          {categories.map((category) => (
            <Col lg={4} md={4} className="mb-2" key={category.id}>
              <Card className="category-card ">
                <Link to="/capability">
                  <Card.Img
                    variant="top"
                    src={category.img}
                    alt={category.title}
                    className="category-img"
                  />
                </Link>
                <Card.Body className="category-body">
                  <div
                    className="category-section"
                    onClick={() => handleCategoryClick(category.id)}
                  >
                    <h5 className="text-light">{category.title}</h5>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* How It Works */}
      <div>
        <Container className="steps-section">
          <div className="text-center mb-4">
            <h6 className="welcome-text text-warning"> What We Do
            </h6>

            <p style={{ color: "#721213" }} className="fw-bolder">
              At PreciseAxis, we specialize in providing comprehensive
              engineering and manufacturing solutions tailored to meet the
              diverse needs of our clients.
            </p>
          </div>

          <Row className="g-4">
            {/* Step 1 */}
            <Col lg={6} md={6}>
              <div className="step-box">
                <div className="step-icon">
                  <i className="bi bi-search"></i> {/* Bootstrap Icon */}
                </div>
                <div className="step-content">
                  <h3 className="font-bolder text-white">
                    High-Quality Engineering Components
                  </h3>
                  <p className="text-light">
                    We design, produce, and supply cutting-edge components,
                    including precision parts, sheet metal products, and forging
                    solutions, ensuring compliance with international quality
                    standards.
                  </p>
                </div>
                <div className="step-number">01</div>
              </div>
            </Col>

            {/* Step 2 */}
            <Col lg={6} md={6}>
              <div className="step-box">
                <div className="step-icon">
                  <i className="bi bi-calendar"></i> {/* Bootstrap Icon */}
                </div>
                <div className="step-content">
                  <h3 className="font-bolder text-white">
                    Cutting Tools Manufacturing
                  </h3>
                  <p className="text-light">
                    Our range of cutting tools is crafted using advanced
                    techniques to support industries in achieving superior
                    performance and efficiency.
                  </p>
                </div>
                <div className="step-number">02</div>
              </div>
            </Col>

            {/* Step 3 */}
            <Col lg={6} md={6}>
              <div className="step-box">
                <div className="step-icon">
                  <i className="bi bi-cart"></i> {/* Bootstrap Icon */}
                </div>
                <div className="step-content">
                  <h3 className="font-bolder text-white">
                    End-to-End Supply Chain Management
                  </h3>
                  <p className="text-light">
                    We offer strategic supply chain solutions, from vendor
                    development to efficient delivery, ensuring seamless
                    operations and cost optimization for our clients.
                  </p>
                </div>
                <div className="step-number">03</div>
              </div>
            </Col>

            {/* Step 4 */}
            <Col lg={6} md={6}>
              <div className="step-box">
                <div className="step-icon">
                  <i className="bi bi-truck"></i> {/* Bootstrap Icon */}
                </div>
                <div className="step-content">
                  <h3 className="font-bolder text-white">
                    Custom Manufacturing Services
                  </h3>
                  <p className="m-0 p-0 text-light">
                    With our on-demand manufacturing platform, clients can:
                  </p>
                  <p className="m-0 p-0 text-light">
                    {" "}
                    • Upload 3D drawings for real-time quotes.
                  </p>
                  <p className="m-0 p-0 text-light">
                    • Choose from over 15+ processes and 130+ materials.
                  </p>
                  <p className="m-0 p-0 text-light">
                    {" "}
                    • Access a network of 1,000+ manufacturers in India and
                    abroad.
                  </p>
                </div>
                <div className="step-number">04</div>
              </div>
            </Col>

            {/* Step 5 */}
            <Col lg={6} md={6}>
              <div className="step-box">
                <div className="step-icon">
                  <i class="fa-solid fa-layer-group"></i>
                </div>
                <div className="step-content">
                  <h3 className="text-white">Industry-Specific Solutions</h3>
                  <p className="m-0 p-0 text-white">
                    We cater to a broad spectrum of industries, including:
                  </p>
                  <p className="m-0 p-0 text-white"> • Consumables.</p>
                  <p className="m-0 p-0 text-white">• Defense.</p>
                  <p className="m-0 p-0 text-white"> • Medical Equipment.</p>
                  <p className="m-0 p-0 text-white"> • Machinery Spare Parts.</p>
                </div>
                <div className="step-number">05</div>
              </div>
            </Col>

            {/* Step 6 */}
            <Col lg={6} md={6}>
              <div className="step-box">
                <div className="step-icon">
                  <i class="fa-solid fa-headphones"></i>
                </div>
                <div className="step-content">
                  <h3 className="text-white">Prototyping and Production Support</h3>
                  <p className="m-0 p-0 text-white">
                    Our agile approach ensures quick turnaround times, enabling
                    clients to manufacture parts in as little as one day, backed
                    by strict quality assurance and certifications.
                  </p>
                  <p className="m-0 p-0 text-white">
                    PreciseAxis is your trusted partner for precision-engineered
                    solutions, combining innovation, reliability, and unmatched
                    expertise.
                  </p>
                </div>
                <div className="step-number">06</div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="main-section">


        {/* Main Section with Text and Image */}
        <div className="main-content-section py-5">
          <Container>
            <Row className="align-items-center">
              {/* Left Side - Text Content */}
              <Col lg={6} md={6} sm={12} className="mb-4 mb-md-0">
                <div className="text-content text-center text-md-start">
                  <p className="trusted-text text-warning mb-2 fs-5 fw-semibold">
                    Why Choose PreciseAxis?
                  </p>
                  <h2 className="mb-4 fs-3 fw-bold">
                    Choose Quality, Choose Us!
                  </h2>
                  <ul>
                    <li className="text-light">
                      <span className="fw-bolder fs-5">Global Standards:</span>{" "}
                      Products and services designed to match international
                      benchmarks
                    </li>
                    <li className="text-light">
                      <span className="fw-bolder fs-5">Expert Team: </span> A
                      dedicated team of supply chain engineers ensuring top-tier
                      quality.
                    </li>
                    <li className="text-light">
                      <span className="fw-bolder fs-5">
                        Industry Adaptability:{" "}
                      </span>{" "}
                      Serving a wide range of sectors with cutting-edge
                      solutions.
                    </li>
                    <li className="text-light">
                      <span className="fw-bolder fs-5">
                        Ethical Operations:{" "}
                      </span>{" "}
                      Conducting business with integrity and respect for people
                      and communities.
                    </li>
                  </ul>
                </div>
              </Col>

              {/* Right Side - Excavator Image */}
              <Col
                lg={6}
                md={6}
                sm={12}
                className="d-flex justify-content-center"
              >
                <div className="image-section">
                  {/* <img
                    src={excavator}
                    alt="Excavator"
                    className="img-fluid excavator-img"
                    style={{ borderRadius: '10px', maxWidth: '100%' }}
                  /> */}
                  <img src={choose} alt="" />
                </div>
              </Col>
            </Row>
          </Container>
        </div>


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
    </div>
  );
};

export default Home;
