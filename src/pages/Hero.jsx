import image1 from '../images/image1.png';

function Hero() {
  return (
    <>
      <div className="container main-content bg-light">
        <div className="row g-4">
          <div className="col-md-6 d-flex">
            <div className="flex-fill">
              <div className="row g-0 h-100">
                <div className="col-md-8">
                  <div className="card-body d-flex flex-column justify-content-between h-100">
                    <div>
                      <h5 className="card-title">Card 1</h5>
                      <p className="card-text">
                        This is a taller card with supporting text below as a natural lead-in to additional content.
                        Combines the content of Card 1 and Card 3 into a single vertical card.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <img src={image1} className="img-fluid rounded-start h-100" alt="..." />
                </div>
              </div>
            </div>
          </div>

          {/* Right column: two stacked cards */}
          <div className="col-md-6 d-flex flex-column" style={{ height: '100%' }}>
            {/* Top card */}
            <div className="card flex-fill mb-4">
              <div className="row g-0 h-100">
                <div className="col-md-8">
                  <div className="card-body d-flex flex-column justify-content-between h-100">
                    <h5 className="card-title">Card Title</h5>
                    <p className="card-text">
                      This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <img src={image1} className="img-fluid rounded-start h-100" alt="..." />
                </div>
              </div>
            </div>

            {/* Bottom card */}
            <div className="card flex-fill">
              <div className="row g-0 h-100">
                <div className="col-md-8">
                  <div className="card-body d-flex flex-column justify-content-between h-100">
                    <h5 className="card-title">Card Title</h5>
                    <p className="card-text">
                      This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <img src={image1} className="img-fluid rounded-start h-100" alt="..." />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero;