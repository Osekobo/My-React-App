function Footer() {
  return (
    <>
      <footer className="text-center text-lg-start bg-success text-muted main-content container">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>
        </section>


        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">

              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-car me-3"></i>CarDuka
                </h6>
                <p>
                  Your ultimate online car showroom. Discover luxury and sports cars with the best deals and services.
                </p>
              </div>


              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Cars</h6>
                <p><a href="#!" className="text-reset">Luxury</a></p>
                <p><a href="#!" className="text-reset">Sports</a></p>
                <p><a href="#!" className="text-reset">SUVs</a></p>
                <p><a href="#!" className="text-reset">Electric</a></p>
              </div>


              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p><a href="#!" className="text-reset">Pricing</a></p>
                <p><a href="#!" className="text-reset">Settings</a></p>
                <p><a href="#!" className="text-reset">Orders</a></p>
                <p><a href="#!" className="text-reset">Help</a></p>
              </div>


              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p><i className="fas fa-home me-3"></i> Nairobi, Kenya</p>
                <p><i className="fas fa-envelope me-3"></i> info@carduka.com</p>
                <p><i className="fas fa-phone me-3"></i> +254 700 123 456</p>
                <p><i className="fas fa-print me-3"></i> +254 700 123 457</p>
              </div>
            </div>
          </div>
        </section>
        <div className="text-center p-4 bg-warning">
          © 2025 Copyright:
          <a className="text-reset fw-bold" href="/">CarDuka.com</a>
        </div>
      </footer>
    </>
  )
}

export default Footer;
