// import "../index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import image from '../images/image.png';
import image1 from '../images/image1.png';
import image3 from '../images/image3.png';
import image2 from '../images/image2.png';
// import skills from '../images/skills.png';
import skills1 from '../images/skills1.png';
import icon from '../images/icon.png';
import skills3 from '../images/skills3.png';


function HeroSection() {
  return (
    <>
      <div className='container main-content'>
        <div id="carouselExampleAutoplaying" className="carousel slide container py-5" data-bs-ride="carousel">
          <div className="carousel-inner">

            <div className="carousel-item active min-vh-75">
              <div className="mb-3 h-100">
                <div className="row g-0 h-100">
                  <div className="col-md-12 h-100">
                    <div className="card-body h-100 d-flex flex-column">
                      <section className="py-lg-16 py-6 flex-grow-1">
                        <div className="container h-100">
                          <div className="row d-flex align-items-center h-100">
                            <div className="col-xxl-5 col-xl-6 col-lg-6 col-12 h-100 d-flex flex-column justify-content-center">
                              <div>
                                <h1 className="display-2 fw-bold mb-3">
                                  Drive Your Dream
                                  <u className="text-warning">
                                    <span className="text-primary">Luxury Car</span>
                                  </u>
                                </h1>
                                <p className="lead mb-4">
                                  Explore our exclusive collection of sports and luxury cars online. Find your perfect ride today!
                                </p>
                                <ul className="list-unstyled mb-5">
                                  {[
                                    "No booking fee required",
                                    "24/7 Customer Support",
                                    "Flexible financing options",
                                    "Test drive anytime"
                                  ].map((item, index) => (
                                    <li className="mb-2" key={index}>
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="12"
                                        height="12"
                                        fill="var(--bs-success)"
                                        className="bi bi-check-circle-fill"
                                        viewBox="0 0 16 16"
                                      >
                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                      </svg>
                                      <span className="ms-2">{item}</span>
                                    </li>
                                  ))}
                                </ul>
                                <a href="#!" className="btn btn-outline-secondary btn-lg">
                                  Browse Cars
                                </a>
                              </div>
                            </div>

                            {/* Image Column */}
                            <div className="col-xxl-5 offset-xxl-1 col-xl-6 col-lg-6 col-12 d-lg-flex justify-content-end h-100">
                              <div className="mt-12 mt-lg-0 position-relative h-100 w-100 d-flex align-items-center">
                                <div className="position-absolute top-0 start-0 translate-middle d-none d-md-block">
                                  <img src={skills1} alt="decorative graphic" />
                                </div>
                                <img
                                  src={image1}
                                  alt="luxury car"
                                  className="img-fluid rounded-4 w-100 z-1 position-relative"
                                />
                                <div className="position-absolute top-100 start-100 translate-middle d-none d-md-block">
                                  <img src={skills3} alt="decorative graphic" />
                                </div>
                              </div>
                            </div>

                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className="carousel-item">
              <div className="mb-3 h-100" >
                <div className="">
                  <div className="container">
                    <div className="row align-items-center g-0">
                      <div className="col-xl-5 col-lg-6 col-md-12">
                        <div className="py-5 py-lg-0">
                          <h1 className="text-black display-4 fw-bold">
                            Drive Your Dream Car Today
                          </h1>
                          <p className="text-black-50 mb-4 lead">
                            Explore the latest luxury and sports cars online. Find your perfect ride with our curated selection.
                          </p>
                          <a href="#browse" className="btn btn-outline-secondary me-2">
                            Browse Cars
                          </a>
                        </div>
                      </div>

                      {/* Image Column */}
                      <div className="col-xl-7 col-lg-6 col-md-12 text-lg-end text-center">
                        <img
                          src={image3}
                          style={{ maxHeight: "600px", objectFit: "cover" }}
                          alt="Luxury car"
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <div className="mb-3 h-100">

                <div className="container">
                  <div className="row align-items-center">
                    {/* Text Column */}
                    <div className="col-lg-6 mb-6 mb-lg-0">
                      <div>
                        <h5 className="text-dark mb-4">
                          <i className="fe fe-check icon-xxs icon-shape bg-light-success text-success rounded-circle me-2"></i>
                          Most trusted car marketplace
                        </h5>
                        <h1 className="display-3 fw-bold mb-3">
                          Find Your Dream Car and Drive Today
                        </h1>
                        <p className="pe-lg-10 mb-5">
                          Explore hundreds of luxury and sports cars. Buy, sell, or rent vehicles with verified sellers and hassle-free service.
                        </p>
                        <a href="#browse" className="btn btn-outline-secondary me-3">
                          Browse Cars
                        </a>
                        <a
                          href="https://www.youtube.com/watch?v=JRzWRZahOVU"
                          className="glightbox fs-4 text-inherit ms-3 d-inline-flex align-items-center"
                        >
                          <img src={icon} alt="Play" className="me-2" style={{ height: "20px" }} />
                          Watch Demo
                        </a>
                      </div>
                    </div>

                    {/* Image Column */}
                    <div className="col-lg-6 d-flex justify-content-center">
                      <div className="position-relative w-100">
                        <img src={image2} alt="Car Main" className="img-fluid w-100" />
                        <img src={skills1} alt="Frame 2" className="position-absolute bottom-0 start-0 ms-lg-n14 ms-n6 mb-n7" />
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>


          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span className="carousel-control-prev-icon text-black" aria-hidden="true">P</span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span className="carousel-control-next-icon text-black" aria-hidden="true">N</span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
