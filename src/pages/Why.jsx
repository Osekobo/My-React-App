import image1 from '../images/image1.png';

function Why() {
  return (
    <>
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
    </>
  )
}
export default Why;