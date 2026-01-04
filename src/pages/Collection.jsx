import image1 from '../images/image1.png';
const cars = Array.from({ length: 10 });

function Collection() {
  return (
    <>
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
    </>
  )
}
export default Collection;