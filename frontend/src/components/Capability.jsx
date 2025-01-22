
import React, { useEffect, useState } from "react";
import "../css/Capability.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import data from "./Data.js";
import cutting2 from './../assests/img2.jpeg';
import cutting3 from './../assests/img6.jpeg';
import { Link } from "react-router-dom";
import sheet1 from "../assests/New folder/product-250x250.jpg"
import sheet2 from "../assests/New folder/sheet-metal-forming-stamping-part-1000x1000.jpg"
import sheet3 from "../assests/New folder/sheet-metal-stamping-parts-250x250.jpg"
import forging1 from "../assests/Hot forging & Cold forging of Fasteners/Hot forging & Cold forging of Fasteners 2.webp"
import forging2 from "../assests/Hot forging & Cold forging of Fasteners/Hot forging & Cold forging of Fasteners 6.webp"
import forging3 from "../assests/Hot forging & Cold forging of Fasteners/Hot forging & Cold forging of Fasteners 7.webp"
import alumunium1 from "../assests/Aluminium & Zinc die casting parts/Aluminium & Zinc die casting parts2.webp"
import alumunium2 from "../assests/Aluminium & Zinc die casting parts/aluminum-die-castings-500x500.webp"
import alumunium3 from "../assests/Aluminium & Zinc die casting parts/casting-and-forging-parts-500x500.webp"
import precision1 from "../assests/Precision Machining parts/2-500x500.webp"
import precision2 from "../assests/Precision Machining parts/high-precision-machined-parts-500x500.webp"
import precision3 from "../assests/Precision Machining parts/img_0193-copy-500x500.webp"
import brass1 from "../assests/Brass components/aluminium-cylindrical-sleeve-2-500x500.webp"
import brass2 from "../assests/Brass components/brass-cnc-turned-component-1000x1000.webp"
import brass3 from "../assests/Brass components/brass-contact-500x500.webp"
import cad1 from "../assests/New folder/cad_cam_services_cover.jpg"
import cad2 from "../assests/New folder/product-design-development.jpg"
import cad3 from "../assests/New folder/1693572482242.jpg"
import plastics1 from "../assests/Plastic injection parts/ketron-peek-1000-500x500.webp"
import plastics3 from "../assests/Plastic injection parts/product-250x250.webp"
import plastics2 from "../assests/Plastic injection parts/plastic-injection-molding-parts-500x500.webp"
import powder1 from "../assests/Powder metallurgy Parts/0-500x500.webp"
import powder2 from "../assests/Powder metallurgy Parts/concave-mantle-500x500.webp"
import powder3 from "../assests/Powder metallurgy Parts/cone-crusher-parts-500x500.webp"
import export1 from "../assests/New folder/Import-Export-Code-Registration-1536x864.jpg"
import export2 from "../assests/New folder/container-cargo-import-export-business-logistic-3d-rendering_35761-570.jpg"
import export3 from "../assests/New folder/1702463709082.jpg"
import logo from './../assests/logo_1.png';

import cutting1 from './../assests/tool.PNG';





function App() {
  const [selectedSection, setSelectedSection] = useState(data[0].title);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div className="container-fluidx">
      <div className="capability-page">
        <div className="overlay"></div>
        <div className="content-wrapper1">
          <h1>Capabilities</h1>

        </div>
      </div>
      <div>
        <Container fluid className="">
          <Row className="mt-5">
            {/* Left Sidebar */}
            <Col
              md={4}
              style={{
                position: "relative",
                // top: "70px",
                // height: "calc(100vh - 70px)",
              }}
            >
              <div className="d-flex flex-column">
                {data.map((section, index) => (
                  <Button
                    key={index}
                    className={`capabilities mb-2  button-large ${selectedSection === section.title
                      ? "selected"
                      : "btn-secondary"
                      }`}
                    onClick={() => setSelectedSection(section.title)}
                    style={{ fontSize: "15px" }}
                  >
                    {section.title}
                  </Button>
                ))}
              </div>
            </Col>

            {/* Scrollable Content Section */}
            <Col
              md={5}
              style={{ height: "calc(100vh - 70px)", overflowY: "scroll" }}
            >
              {data.map(
                (section, index) =>
                  selectedSection === section.title && (
                    <div key={index}>
                      <h2 className="main-heading">
                        {section.title}
                      </h2>
                      <p>{section.description}</p>
                      {section.sections.map((sect, idx) => (
                        <div key={idx}>
                          <h3>{sect.heading}</h3>
                          <ul>
                            {sect.points.map((point, id) => (
                              <li key={id}>{point}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                      {section.whyChoose && (
                        <div>
                          <h3>Why Choose Our Solutions?</h3>
                          <ul>
                            {section.whyChoose.map((reason, id) => (
                              <li key={id}>{reason}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )
              )}
            </Col>

            {/* Right Image Section */}
            <Col
              md={3}
              className="d-none d-md-block"
              style={{
                position: "relative",
                // top: "70px",
                // height: "calc(100vh - 70px)",
              }}
            >
              <div className="d-flex flex-column">
                {selectedSection ===
                  "Customized Cutting Tools & Machinery Consumables" && (
                    <>
                      <img
                        src={cutting1}
                        alt="Service"
                        className="service-img mb-2"
                      />
                      <img
                        src={cutting2}
                        alt="Service"
                        className="service-img mb-2"
                      />
                      <img
                        src={cutting3}
                        alt="Service"
                        className="service-img mb-2"
                      />
                      <Link to='/equipment'><button className="viewall mt-2 mb-3">View All</button></Link>
                    </>
                  )}
                {selectedSection === "Sheet Metal & Stamping Parts" && (
                  <>
                    <img
                      src={sheet1}
                      alt="Service"
                      className="service-img mb-2"
                    />
                    <img
                      src={sheet2}
                      alt="Service"
                      className="service-img mb-2"
                    />
                    <img
                      src={sheet3}
                      alt="Service"
                      className="service-img mb-2"
                    />
                    <Link to='/equipment'><button className="viewall mt-2 mb-3">View All</button></Link>
                  </>
                )}
                {selectedSection ===
                  "Hot Forging & Cold Forging of Fasteners" && (
                    <>
                      <img
                        src={forging1}
                        alt="Service"
                        className="service-img mb-2"
                      />
                      <img
                        src={forging2}
                        alt="Service"
                        className="service-img mb-2"
                      />
                      <img
                        src={forging3}
                        alt="Service"
                        className="service-img mb-2"
                      />
                      <Link to='/equipment'><button className="viewall mt-2 mb-3">View All</button></Link>
                    </>
                  )}
                {selectedSection === "Aluminium & Zinc Die Casting Parts" && (
                  <>
                    <img
                      src={alumunium1}
                      alt="Service"
                      className="service-img mb-2"
                    />
                    <img
                      src={alumunium2}
                      alt="Service"
                      className="service-img mb-2"
                    />
                    <img
                      src={alumunium3}
                      alt="Service"
                      className="service-img mb-2"
                    />
                    <Link to='/equipment'><button className="viewall mt-2 mb-3">View All</button></Link>
                  </>
                )}
                {selectedSection === "Precision Machining Parts" && (
                  <>
                    <img
                      src={precision1}
                      alt="Service"
                      className="service-img mb-2"
                    />
                    <img
                      src={precision2}
                      alt="Service"
                      className="service-img mb-2"
                    />
                    <img
                      src={precision3}
                      alt="Service"
                      className="service-img mb-2"
                    />
                    <Link to='/equipment'><button className="viewall mt-2 mb-3">View All</button></Link>
                  </>
                )}
                {selectedSection === "CAD/CAM Engineering Services" && (
                  <>
                    <img
                      src={cad1}
                      alt="Service"
                      className="service-img mb-2"
                    />
                    <img
                      src={cad2}
                      alt="Service"
                      className="service-img mb-2"
                    />
                    <img
                      src={cad3}
                      alt="Service"
                      className="service-img mb-2"
                    />
                    <Link to='/equipment'><button className="viewall mt-2 mb-3">View All</button></Link>
                  </>
                )}
                {selectedSection === "Plastic Injection Parts" && (
                  <>
                    <img
                      src={plastics1}
                      alt="Service"
                      className="service-img mb-2"
                    />
                    <img
                      src={plastics2}
                      alt="Service"
                      className="service-img mb-2"
                    />
                    <img
                      src={plastics3}
                      alt="Service"
                      className="service-img mb-2"
                    />
                    <Link to='/equipment'><button className="viewall mt-2 mb-3">View All</button></Link>
                  </>
                )}
                {selectedSection === "Brass Components Manufacturing" && (
                  <>
                    <img
                      src={brass1}
                      alt="Service"
                      className="service-img mb-2"
                    />
                    <img
                      src={brass2}
                      alt="Service"
                      className="service-img mb-2"
                    />
                    <img
                      src={brass3}
                      alt="Service"
                      className="service-img mb-2"
                    />
                    <Link to='/equipment'><button className="viewall mt-2 mb-3">View All</button></Link>
                  </>
                )}
                {selectedSection === "Powder Metallurgy Parts" && (
                  <>
                    <img
                      src={powder1}
                      alt="Service"
                      className="service-img mb-2"
                    />
                    <img
                      src={powder2}
                      alt="Service"
                      className="service-img mb-2"
                    />
                    <img
                      src={powder3}
                      alt="Service"
                      className="service-img mb-2"
                    />
                    <Link to='/equipment'><button className="viewall mt-2 mb-3">View All</button></Link>
                  </>
                )}
                {selectedSection === "Import Parts Localization & Global Sourcing" && (
                  <>
                    <img
                      src={export1}
                      alt="Service"
                      className="service-img mb-2"
                    />
                    <img
                      src={export2}
                      alt="Service"
                      className="service-img mb-2"
                    />
                    <img
                      src={export3}
                      alt="Service"
                      className="service-img mb-2"
                    />
                    <Link to='/equipment'><button className="viewall mt-2 mb-3">View All</button></Link>
                  </>
                )}
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
  );
}

export default App;
