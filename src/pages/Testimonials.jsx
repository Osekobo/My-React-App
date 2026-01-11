function Testimonials() {
  return (
    <>
      <div className="container main-content bg-light py-5">
        <div className="py-8 bg-light">
          <div className="container">
            <div className="row">
              <div className="offset-xl-3 col-xl-6 col-md-12">
                <div className="text-center mb-5">
                  <h2 className="display-5 fw-bold mb-3">
                    What Our Customers Say
                  </h2>
                  <p className="fs-5 text-muted">
                    Our customers trust us for quality vehicles and excellent service.
                  </p>
                </div>
              </div>
            </div>

            <div className="row g-4">
              {/* Testimonial 1 */}
              <div className="col-md-6 col-12">
                <div className="card h-100 shadow-sm">
                  <div className="card-body p-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      fill="currentColor"
                      className="bi bi-quote text-primary mb-3"
                      viewBox="0 0 16 16"
                    >
                      <path d="M6.5 6.5c0 1.933-1.12 3.5-2.5 3.5S1.5 8.433 1.5 6.5 2.62 3 4 3s2.5 1.567 2.5 3.5zm8 0c0 1.933-1.12 3.5-2.5 3.5s-2.5-1.567-2.5-3.5S10.62 3 12 3s2.5 1.567 2.5 3.5z" />
                    </svg>

                    <p className="fs-5 text-dark fw-semibold">
                      “I bought my car here and the experience was smooth from start to finish.
                      The vehicle was exactly as described.”
                    </p>

                    <div className="d-flex mt-4 align-items-center">
                      <img
                        src="/assets/images/avatar/avatar-1.jpg"
                        alt="Customer"
                        className="rounded-circle"
                        width="50"
                        height="50"
                      />
                      <div className="ms-3">
                        <h6 className="text-primary mb-0">Ronald Richards</h6>
                        <p className="mb-0 text-muted small">Toyota Harrier Owner</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="col-md-6 col-12">
                <div className="card h-100 shadow-sm">
                  <div className="card-body p-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      fill="currentColor"
                      className="bi bi-quote text-primary mb-3"
                      viewBox="0 0 16 16"
                    >
                      <path d="M6.5 6.5c0 1.933-1.12 3.5-2.5 3.5S1.5 8.433 1.5 6.5 2.62 3 4 3s2.5 1.567 2.5 3.5zm8 0c0 1.933-1.12 3.5-2.5 3.5s-2.5-1.567-2.5-3.5S10.62 3 12 3s2.5 1.567 2.5 3.5z" />
                    </svg>

                    <p className="fs-5 text-dark fw-semibold">
                      “Great customer service and transparent pricing.
                      I highly recommend this car yard to anyone looking for a clean ride.”
                    </p>

                    <div className="d-flex mt-4 align-items-center">
                      <img
                        src="/assets/images/avatar/avatar-9.jpg"
                        alt="Customer"
                        className="rounded-circle"
                        width="50"
                        height="50"
                      />
                      <div className="ms-3">
                        <h6 className="text-primary mb-0">Darlene Robertson</h6>
                        <p className="mb-0 text-muted small">Mazda CX-5 Owner</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Testimonials;