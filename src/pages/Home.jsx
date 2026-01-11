import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './hero.css'; // custom animation CSS
import image1 from '../images/image1.png';
import image2 from '../images/image2.png';
import image3 from '../images/image3.png';
import skills1 from '../images/skills1.png';
import skills3 from '../images/skills3.png';
import icon from '../images/icon.png';
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <div className='container main-content'>
      <div id="carouselExampleAutoplaying" className="carousel slide py-5" data-bs-ride="carousel">
        <div className="carousel-inner">

          {/* Slide 1 */}
          <div className="carousel-item active min-vh-75">
            <div className="row align-items-center g-0 h-100">
              <div className="col-lg-6 d-flex flex-column justify-content-center px-4 slide-text">
                <h1 className="display-2 fw-bold mb-3 slide-fade">
                  Drive Your Dream
                  <u className="text-warning">
                    <span className="text-primary"> Luxury Car</span>
                  </u>
                </h1>
                <p className="lead mb-4 slide-fade delay-1">
                  Explore our exclusive collection of sports and luxury cars online. Find your perfect ride today!
                </p>
                <Link to="/collection" className="btn btn-outline-secondary btn-lg slide-fade delay-2">
                  Browse Cars
                </Link>
              </div>
              <div className="col-lg-6 position-relative">
                <img src={image1} alt="Luxury Car" className="img-fluid rounded-4 slide-fade delay-2" />
                <img src={skills1} alt="decorative" className="position-absolute top-0 start-0 d-none d-md-block slide-fade delay-3" />
                <img src={skills3} alt="decorative" className="position-absolute bottom-0 end-0 d-none d-md-block slide-fade delay-4" />
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item">
            <div className="row align-items-center g-0">
              <div className="col-lg-6 d-flex flex-column justify-content-center px-4 slide-text">
                <h1 className="display-4 fw-bold text-black slide-fade">
                  Drive Your
                  <u className="text-warning"><span className="text-primary"> Dream Car</span></u> Today
                </h1>
                <p className="text-black-50 lead mb-4 slide-fade delay-1">
                  Explore the latest luxury and sports cars online. Find your perfect ride with our curated selection.
                </p>
                <Link to="/collection" className="btn btn-outline-secondary slide-fade delay-2">Browse Cars</Link>
              </div>
              <div className="col-lg-6 text-center text-lg-end slide-fade delay-2">
                <img src={image3} alt="Luxury Car" className="img-fluid rounded-4" style={{ maxHeight: "600px", objectFit: "cover" }} />
              </div>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="carousel-item">
            <div className="row align-items-center g-0">
              <div className="col-lg-6 d-flex flex-column justify-content-center px-4 slide-text">
                <h1 className="display-3 fw-bold mb-3 slide-fade">
                  Find Your 
                  <u className="text-warning"><span className="text-primary"> Dream Car </span></u> and Drive Today
                </h1>
                <p className="mb-4 slide-fade delay-1">
                  Explore hundreds of luxury and sports cars. Buy, sell, or rent vehicles with verified sellers and hassle-free service.
                </p>
                <Link to="/collection" className="btn btn-outline-secondary me-3 slide-fade delay-2">Browse Cars</Link>
                <a href="https://www.youtube.com/watch?v=JRzWRZahOVU" className="d-inline-flex align-items-center fs-5 text-inherit slide-fade delay-3">
                  <img src={icon} alt="Play" className="me-2" style={{ height: "20px" }} /> Watch Demo
                </a>
              </div>
              <div className="col-lg-6 position-relative slide-fade delay-2">
                <img src={image2} alt="Luxury Car" className="img-fluid w-100 rounded-4" />
                <img src={skills1} alt="Frame" className="position-absolute bottom-0 start-0 ms-n5 mb-n3 d-none d-md-block" />
              </div>
            </div>
          </div>

        </div>

        {/* Controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>

      </div>
    </div>
  );
}

export default HeroSection;
