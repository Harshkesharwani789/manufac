import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/ProductGallery.css";
import { Container, Row, Col, Button, Form, Image } from "react-bootstrap";
import service from "../assests/service-01.jpg";
import service1 from "../assests/service-02.jpg";
import service2 from "../assests/service-03.jpg";
import service3 from "../assests/service-04.png";
import service4 from "../assests/service-05.png";
import service5 from "../assests/service-06.webp";
import { Link } from "react-router-dom";
import GalleryData from "./GalleryData";
import logo from './../assests/logo_1.png';





// Updated array to handle both images and videos (total 15 media items)
const media = [
  { type: "image", src: service },
  { type: "image", src: service1 },
  { type: "image", src: service2 },
  { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { type: "image", src: service3 },
  { type: "video", src: service5 },
  { type: "image", src: service4 },
  { type: "image", src: "https://via.placeholder.com/300" },
  { type: "image", src: "https://via.placeholder.com/300" },
  { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { type: "image", src: "https://via.placeholder.com/300" },
  { type: "image", src: "https://via.placeholder.com/300" },
  { type: "video", src: "https://www.w3schools.com/html/movie.mp4" },
  { type: "image", src: "https://via.placeholder.com/300" },
  { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
];



function ProductGallery() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div className="containerx">
      {" "}
      {/* Added margin from navbar */}
      <div className="row">
        <div className="about-page">
          {/* Navbar */}

          {/* Content below Navbar */}
          <div className="gallery-page ">
            <div className="overlay"></div>

            <div className="content-wrapper1">
              <h1>Product Gallery</h1>
              {/* <div className="breadcrumb1">
            <i className="fa-solid fa-house-chimney"></i>
            <Link><span className="me-3">Home </span></Link>
            <i className="fa-regular fa-address-card"></i>
            <span>About Us</span>
          </div> */}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="px-5">
        <div className="row mt-5 ">
          {media.map((item, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div
                className="img-container"
                style={{ width: "100%", height: "300px", overflow: "hidden" }}
              >
                {" "}
                {item.type === "image" ? (
                  <img
                    src={item.src}
                    alt={`Product ${index}`}
                    className="img-fluid product-img"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "15px",
                    }}
                  />
                ) : (
                  <video
                    controls
                    className="img-fluid product-video"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "15px",
                    }}
                  >
                    <source src={item.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
            </div>
          ))}
        </div>
      </div> */}
      <Container className="mt-5">
        {GalleryData.map((gallery, galleryIndex) => (
          <div key={galleryIndex}>
            <h2 className="main-heading text-center">
              {gallery.title}
            </h2>
            <Row>
              {gallery.images.map((image, imageIndex) => (
                <Col
                  key={imageIndex}
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  className="mb-4"
                >
                  <Image
                    src={image}
                    alt={`Image ${imageIndex + 1}`}
                    className=" product-img"
                  />
                </Col>
              ))}
            </Row>
          </div>
        ))}
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
}

export default ProductGallery;
