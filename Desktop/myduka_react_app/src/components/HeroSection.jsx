import "../index.css"
function HeroSection() {
  return (
    <>
      <header>
        <div
          id="intro-example"
          className="p-5 text-center bg-image"
          style={{
            backgroundImage: "url('https://mdbcdn.b-cdn.net/img/new/slides/041.webp')",
          }}
        >
          <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
            <div className="d-flex justify-content-center align-items-center h-100">
              <div className="text-white">
                <h1 className="mb-3">Drive Your Dream Car</h1>
                <h5 className="mb-4">
                  Explore the latest luxury and sports cars online
                </h5>
                <a
                  data-mdb-ripple-init
                  className="btn btn-outline-light btn-lg m-2"
                  href="/cars"
                  role="button"
                >
                  Browse Cars
                </a>
                <a
                  data-mdb-ripple-init
                  className="btn btn-outline-light btn-lg m-2"
                  href="/contact"
                  role="button"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
};
export default HeroSection;