function Home() {

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-6 mb-3 mb-sm-0">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Luxury Sports Car</h5>
                <p className="card-text">
                  Experience the thrill of driving our premium sports cars with top performance and style.
                </p>
                <a href="/cars/luxury" className="btn btn-primary">View Details</a>
              </div>
            </div>
          </div>

          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">SUV Collection</h5>
                <p className="card-text">
                  Explore our range of spacious and rugged SUVs, perfect for city and off-road adventures.
                </p>
                <a href="/cars/suvs" className="btn btn-primary">View Details</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          <div className="col">
            <div className="card h-100">
              <img src="https://example.com/luxury-car.jpg" className="card-img-top" alt="Luxury Car" />
              <div className="card-body">
                <h5 className="card-title">Luxury Sports Car</h5>
                <p className="card-text">
                  Experience the thrill and elegance of our premium sports cars with unmatched performance.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src="https://example.com/suv.jpg" className="card-img-top" alt="SUV" />
              <div className="card-body">
                <h5 className="card-title">SUV Collection</h5>
                <p className="card-text">
                  Explore rugged and spacious SUVs perfect for family trips and off-road adventures.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src="https://example.com/electric-car.jpg" className="card-img-top" alt="Electric Car" />
              <div className="card-body">
                <h5 className="card-title">Electric Cars</h5>
                <p className="card-text">
                  Go green with our high-performance electric cars combining efficiency and style.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src="https://example.com/classic-car.jpg" className="card-img-top" alt="Classic Car" />
              <div className="card-body">
                <h5 className="card-title">Classic Cars</h5>
                <p className="card-text">
                  Relive the golden era of automobiles with our exclusive collection of classic cars.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <section>
          <div className="container py-5">
            <div className="row g-4">
              {/* Card 1 */}
              <div className="col-md-6 col-lg-3">
                <div className="card h-100">
                  <div className="d-flex justify-content-between p-3">
                    <p className="lead mb-0">Today's Special Offer</p>
                    <div
                      className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                      style={{ width: "35px", height: "35px" }}
                    >
                      <p className="text-white mb-0 small">x4</p>
                    </div>
                  </div>
                  <img
                    src="https://example.com/luxury-car.jpg"
                    className="card-img-top"
                    alt="Luxury Car"
                  />
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <p className="small"><a href="#!" className="text-muted">Luxury</a></p>
                      <p className="small text-danger"><s>$250,000</s></p>
                    </div>
                    <div className="d-flex justify-content-between mb-3">
                      <h5 className="mb-0">Ferrari Daytona</h5>
                      <h5 className="text-dark mb-0">$240,000</h5>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                      <p className="text-muted mb-0">Available: <span className="fw-bold">2</span></p>
                      <div className="ms-auto text-warning">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-half-alt"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="col-md-6 col-lg-3">
                <div className="card h-100">
                  <div className="d-flex justify-content-between p-3">
                    <p className="lead mb-0">Today's Special Offer</p>
                    <div
                      className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                      style={{ width: "35px", height: "35px" }}
                    >
                      <p className="text-white mb-0 small">x2</p>
                    </div>
                  </div>
                  <img
                    src="https://example.com/suv.jpg"
                    className="card-img-top"
                    alt="SUV"
                  />
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <p className="small"><a href="#!" className="text-muted">SUV</a></p>
                      <p className="small text-danger"><s>$90,000</s></p>
                    </div>
                    <div className="d-flex justify-content-between mb-3">
                      <h5 className="mb-0">Range Rover</h5>
                      <h5 className="text-dark mb-0">$85,000</h5>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                      <p className="text-muted mb-0">Available: <span className="fw-bold">3</span></p>
                      <div className="ms-auto text-warning">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="far fa-star"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="col-md-6 col-lg-3">
                <div className="card h-100">
                  <div className="d-flex justify-content-between p-3">
                    <p className="lead mb-0">Today's Special Offer</p>
                    <div
                      className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                      style={{ width: "35px", height: "35px" }}
                    >
                      <p className="text-white mb-0 small">x3</p>
                    </div>
                  </div>
                  <img
                    src="https://example.com/electric-car.jpg"
                    className="card-img-top"
                    alt="Electric Car"
                  />
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <p className="small"><a href="#!" className="text-muted">Electric</a></p>
                      <p className="small text-danger"><s>$120,000</s></p>
                    </div>
                    <div className="d-flex justify-content-between mb-3">
                      <h5 className="mb-0">Tesla Model S</h5>
                      <h5 className="text-dark mb-0">$115,000</h5>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                      <p className="text-muted mb-0">Available: <span className="fw-bold">5</span></p>
                      <div className="ms-auto text-warning">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 4 */}
              <div className="col-md-6 col-lg-3">
                <div className="card h-100">
                  <div className="d-flex justify-content-between p-3">
                    <p className="lead mb-0">Today's Special Offer</p>
                    <div
                      className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                      style={{ width: "35px", height: "35px" }}
                    >
                      <p className="text-white mb-0 small">x1</p>
                    </div>
                  </div>
                  <img
                    src="https://example.com/classic-car.jpg"
                    className="card-img-top"
                    alt="Classic Car"
                  />
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <p className="small"><a href="#!" className="text-muted">Classic</a></p>
                      <p className="small text-danger"><s>$75,000</s></p>
                    </div>
                    <div className="d-flex justify-content-between mb-3">
                      <h5 className="mb-0">Vintage Mustang</h5>
                      <h5 className="text-dark mb-0">$70,000</h5>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                      <p className="text-muted mb-0">Available: <span className="fw-bold">1</span></p>
                      <div className="ms-auto text-warning">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="far fa-star"></i>
                        <i className="far fa-star"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>

<div className="container">
  <section>
  <div className="container py-5">
    <div className="row g-4">
      {/* Card 1 */}
      <div className="col-md-6 col-lg-3">
        <div className="card h-100">
          <div className="d-flex justify-content-between p-3">
            <p className="lead mb-0">Today's Special Offer</p>
            <div
              className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
              style={{ width: "35px", height: "35px" }}
            >
              <p className="text-white mb-0 small">x4</p>
            </div>
          </div>
          <img
            src="https://example.com/luxury-car.jpg"
            className="card-img-top"
            alt="Luxury Car"
          />
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <p className="small"><a href="#!" className="text-muted">Luxury</a></p>
              <p className="small text-danger"><s>$250,000</s></p>
            </div>
            <div className="d-flex justify-content-between mb-3">
              <h5 className="mb-0">Ferrari Daytona</h5>
              <h5 className="text-dark mb-0">$240,000</h5>
            </div>
            <div className="d-flex justify-content-between mb-2">
              <p className="text-muted mb-0">Available: <span className="fw-bold">2</span></p>
              <div className="ms-auto text-warning">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-half-alt"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="col-md-6 col-lg-3">
        <div className="card h-100">
          <div className="d-flex justify-content-between p-3">
            <p className="lead mb-0">Today's Special Offer</p>
            <div
              className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
              style={{ width: "35px", height: "35px" }}
            >
              <p className="text-white mb-0 small">x2</p>
            </div>
          </div>
          <img
            src="https://example.com/suv.jpg"
            className="card-img-top"
            alt="SUV"
          />
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <p className="small"><a href="#!" className="text-muted">SUV</a></p>
              <p className="small text-danger"><s>$90,000</s></p>
            </div>
            <div className="d-flex justify-content-between mb-3">
              <h5 className="mb-0">Range Rover</h5>
              <h5 className="text-dark mb-0">$85,000</h5>
            </div>
            <div className="d-flex justify-content-between mb-2">
              <p className="text-muted mb-0">Available: <span className="fw-bold">3</span></p>
              <div className="ms-auto text-warning">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="col-md-6 col-lg-3">
        <div className="card h-100">
          <div className="d-flex justify-content-between p-3">
            <p className="lead mb-0">Today's Special Offer</p>
            <div
              className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
              style={{ width: "35px", height: "35px" }}
            >
              <p className="text-white mb-0 small">x3</p>
            </div>
          </div>
          <img
            src="https://example.com/electric-car.jpg"
            className="card-img-top"
            alt="Electric Car"
          />
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <p className="small"><a href="#!" className="text-muted">Electric</a></p>
              <p className="small text-danger"><s>$120,000</s></p>
            </div>
            <div className="d-flex justify-content-between mb-3">
              <h5 className="mb-0">Tesla Model S</h5>
              <h5 className="text-dark mb-0">$115,000</h5>
            </div>
            <div className="d-flex justify-content-between mb-2">
              <p className="text-muted mb-0">Available: <span className="fw-bold">5</span></p>
              <div className="ms-auto text-warning">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Card 4 */}
      <div className="col-md-6 col-lg-3">
        <div className="card h-100">
          <div className="d-flex justify-content-between p-3">
            <p className="lead mb-0">Today's Special Offer</p>
            <div
              className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
              style={{ width: "35px", height: "35px" }}
            >
              <p className="text-white mb-0 small">x1</p>
            </div>
          </div>
          <img
            src="https://example.com/classic-car.jpg"
            className="card-img-top"
            alt="Classic Car"
          />
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <p className="small"><a href="#!" className="text-muted">Classic</a></p>
              <p className="small text-danger"><s>$75,000</s></p>
            </div>
            <div className="d-flex justify-content-between mb-3">
              <h5 className="mb-0">Vintage Mustang</h5>
              <h5 className="text-dark mb-0">$70,000</h5>
            </div>
            <div className="d-flex justify-content-between mb-2">
              <p className="text-muted mb-0">Available: <span className="fw-bold">1</span></p>
              <div className="ms-auto text-warning">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
</div>

    </>
  );
}

export default Home;