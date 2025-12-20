// import skills from '../images/skills.png';
import image1 from '../images/image1.png';
import "./box.css";
const cars = Array.from({ length: 10 });

function Home() {

  return (
    <>
      {/* Hero section */}
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

      {/* car search */}
      <div className="container main-content">
        <div className="mb-3" style={{ width: "540px;" }}>
          <div className="row g-0">
            <div className="col-md-8">
              <div className="card-body">
                <form>
                  {/* Make & Model */}
                  <h5 className="text-center mb-3">Find Your Car</h5>
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label className="form-label">Make</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="e.g. Toyota"
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Model</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="e.g. Corolla"
                      />
                    </div>
                  </div>

                  {/* Year */}
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label className="form-label">Year From</label>
                      <input type="number" className="form-control" placeholder="2015" />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Year To</label>
                      <input type="number" className="form-control" placeholder="2024" />
                    </div>
                  </div>

                  {/* Price */}
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label className="form-label">Min Price</label>
                      <input
                        type="number"
                        className="form-control"
                        placeholder="KES 500,000"
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Max Price</label>
                      <input
                        type="number"
                        className="form-control"
                        placeholder="KES 5,000,000"
                      />
                    </div>
                  </div>

                  {/* Condition & Fuel */}
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label className="form-label">Condition</label>
                      <select className="form-select">
                        <option value="">Select</option>
                        <option value="new">New</option>
                        <option value="used">Used</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Fuel Type</label>
                      <select className="form-select">
                        <option value="">Select</option>
                        <option value="petrol">Petrol</option>
                        <option value="diesel">Diesel</option>
                      </select>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="mb-4">
                    <label className="form-label">Location</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="e.g. Nairobi"
                    />
                  </div>

                  {/* Search Button */}
                  <button type="submit" className="btn btn-primary w-100">
                    Search Cars
                  </button>
                </form>
              </div>

            </div>
            <div className="col-md-4">
              <div className="card-body d-flex justify-content-center align-items-center">
                <div className="box-card">
                  <div className="face front"><img src={image1} alt="" /></div>
                  <div className="face back"><img src="image1.png" alt="" /></div>
                  <div className="face right"><img src="image2.png" alt="" /></div>
                  <div className="face left"><img src={image1} alt="" /></div>
                  <div className="face top"><img src="image1.png" alt="" /></div>
                  <div className="face bottom"><img src="image2.png" alt="" /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="container main-content bg-light">
        <p className="subtitle text-center">
          Scroll horizontally through cars
        </p>
        <h1 className="text-center">Our Car Collection</h1>

        <div className="d-flex flex-nowrap overflow-auto mt-4 pb-4 gap-3">
          {cars.map((_, index) => (
            <div
              key={index}
              className="card"
              style={{ width: "250px", flex: "0 0 auto" }}
            >
              <img src={image1} className="card-img-top" alt="Car" />

              <div className="card-body pt-2 px-3">
                <h5 className="card-title">Toyota Corolla</h5>
                <p className="card-text mb-1">
                  <strong>Year:</strong> 2022
                </p>
                <p className="card-text mb-1">
                  <strong>Price:</strong> $22,495
                </p>
                <p className="card-text mb-1">
                  <strong>Mileage:</strong> 15,000 km
                </p>
                <p className="card-text mb-3">
                  <strong>Location:</strong> Nairobi, Kenya
                </p>

                <button className="btn btn-danger w-100">
                  View Details
                </button>
              </div>


            </div>
          ))}
        </div>
      </div>


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


      <div className='container main-content bg-light'>
        <h1>Questions</h1>
      </div>


      <div className='container main-content'>
        <h1>Why us</h1>
        <div className="row">
          <div className="col-12">
            <ul className="horizontal-slide d-flex flex-row flex-nowrap list-unstyled overflow-auto p-0">
              {[...Array(7)].map((_, i) => (
                <li key={i} className="me-3" style={{ flex: "0 0 auto" }}>
                  <img
                    src={image1}
                    alt=""
                    className="thumbnail img-fluid"
                    style={{ width: "200px", height: "auto", borderRadius: "8px" }}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>


      <div className='container main-content bg-light'>
        <div class="py-8 bg-light ">
          <div class="container">
            <div class="row">
              <div class="offset-xl-3 col-xl-6 col-md-12">
                <div class="text-center mb-8">
                  <h2 class="display-4 fw-bold mb-3">Developer Geeks
                  </h2>
                  <p class="fs-4">Our average call quality rating is 4.4 out of 5. That leads to happy
                    tweets like these:</p>
                </div>
              </div>
            </div>


            <div class="row">
              {/* <!-- col --> */}
              <div class="col-md-6 col-12">
                {/* <!-- card --> */}
                <div class="card mb-6 mb-lg-0">
                  {/* <!-- card body --> */}
                  <div class="card-body p-6">
                    <span class=" mb-3 d-block" />
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-quote text-light-primary  "
                      viewBox="0 0 16 16">
                      <path
                        d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                    </svg>

                    <p class="fs-3 text-dark fw-semibold">"Geeks has created an incredibly seamless
                      experience for app design. My mind is blown
                      fusce consequat ligula in dui congue interdum."</p>

                    <div class="d-flex mt-4 align-items-center">
                      <img src="../assets/images/avatar/avatar-1.jpg" alt="" class="avatar avatar-md rounded-circle" />
                      <div class="ms-2">
                        <h5 class="text-primary mb-0">Ronald Richards</h5>
                        <p class="mb-0 fs-6">Payments Engineer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-12">
                {/* <!-- card --> */}
                <div class="card">
                  {/* <!-- card body --> */}
                  <div class="card-body p-6">

                    <span class=" mb-3 d-block">
                      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-quote text-light-primary  "
                        viewBox="0 0 16 16">
                        <path
                          d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                      </svg>
                    </span>
                    <p class="fs-3 text-dark fw-semibold">"I am very satisfied with my purchase. Your team
                      helped me a lot with the new release for RLT
                      version. I hope you are always successful."</p>
                    <div class="d-flex mt-4 align-items-center">
                      <img src="../assets/images/avatar/avatar-9.jpg" alt="" class="avatar avatar-md rounded-circle" />
                      <div class="ms-2">
                        <h5 class="text-primary mb-0">Darlene Robertson</h5>
                        <p class="mb-0 fs-6">Senior Data Analyst</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className='container main-content'>
        <h1>Our Latest News And Blogs</h1>
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <div class="card h-100">
              <img src="..." class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src="..." class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src="..." class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="container main-content text-center py-5 bg-light">
        <h1>Call to action</h1>
        <p className="lead text-success mb-4">Get Updates on Our Latest Collection</p>

        <form className="d-flex justify-content-center gap-2" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="email" className="visually-hidden">Email address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="form-control"
            required
          />
          <button type="submit" className="btn btn-warning">
            Subscribe
          </button>
        </form>
      </div>


    </>
  );
}

export default Home;