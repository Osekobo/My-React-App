import image1 from '../images/image1.png';
import "./box.css"

function Search() {
  return (
    <>
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
                      {/* <label className="form-label">Make</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="e.g. Toyota"
                      /> */}
                      <label className="form-label">Make</label>
                      <select className="form-select">
                        <option value="">Select</option>
                        <option value="toyota">Toyota</option>
                        <option value="audi">Audi</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      {/* <label className="form-label">Model</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="e.g. Corolla"
                      /> */}
                      <label className="form-label">Model</label>
                      <select className="form-select">
                        <option value="">Select</option>
                        <option value="hatchback">Hatchback</option>
                        <option value="suv">SUV</option>
                      </select>
                    </div>
                  </div>

                  {/* Year */}
                  <div className="row mb-3">
                    <div className="col-md-6">
                      {/* <label className="form-label">Year From</label>
                      <input type="number" className="form-control" placeholder="2015" /> */}
                      <label className="form-label">Year From</label>
                      <select className="form-select">
                        <option value="">Select</option>
                        <option value="2010">2010</option>
                        <option value="2011">2011</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      {/* <label className="form-label">Year To</label>
                      <input type="number" className="form-control" placeholder="2024" /> */}
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
                        <option value="electric">Electric</option>
                      </select>
                    </div>
                  </div>

                  {/* Location */}
                  {/* <div className="mb-4">
                    <label className="form-label">Location</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="e.g. Nairobi"
                    />
                  </div> */}

                  {/* Search Button */}
                  <button type="submit" className="btn btn-primary w-100 mt-4">
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
    </>
  )
}
export default Search;