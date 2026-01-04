import image1 from '../images/image1.png';

function Categoreis() {
  return (
    <>
      <div className="container main-content">
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={image1} className="img-fluid rounded-start h-100" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body d-flex flex-column justify-content-between h-100">
                    <h5 className="card-title">Browse By Make</h5>
                    <p className="card-text">
                      Car makes refer to the brand or manufacturer of a vehicle, such as Toyota, Ford, BMW, or Honda. Each make represents a company’s reputation, design style, reliability, and technological innovations, helping buyers identify the kind of vehicle they prefer.
                    </p>
                    <button className="btn btn-primary mt-3 align-self-start">
                      Browse
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={image1} className="img-fluid rounded-start h-100" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body d-flex flex-column justify-content-between h-100">
                    <h5 className="card-title">Browse Per Body Type</h5>
                    <p className="card-text">
                      Car body types describe the overall shape and design of a vehicle. Common types include sedan, SUV, hatchback, coupe, convertible, and wagon, each offering different space, style, and functionality for various driving needs.
                    </p>
                    <button className="btn btn-primary mt-3 align-self-start">
                      Browse
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-8">
                  <div className="card-body d-flex flex-column justify-content-between h-100">
                    <h5 className="card-title">Budget Cars</h5>
                    <p className="card-text">
                      Budget cars are affordable vehicles designed to meet the needs of cost-conscious buyers. They typically offer basic features, fuel efficiency, and low maintenance costs, making them ideal for daily commuting and first-time car owners without compromising on reliability.
                    </p>
                    <button className="btn btn-primary mt-3 align-self-start">
                      Browse
                    </button>
                  </div>
                </div>
                <div className="col-md-4">
                  <img src={image1} className="img-fluid rounded-start h-100" alt="..." />
                </div>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-8">
                  <div className="card-body d-flex flex-column justify-content-between h-100">
                    <h5 className="card-title">Luxury Cars</h5>
                    <p className="card-text">
                      Luxury cars are high-end vehicles that combine superior performance, advanced technology, and elegant design. They offer premium comfort, safety features, and cutting-edge amenities, catering to drivers who value style, status, and an exceptional driving experience.
                    </p>
                    <button className="btn btn-primary mt-3 align-self-start">
                      Browse
                    </button>
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
export default Categoreis;