function Blogs() {
  return (
    <>
      <div className='container main-content my-5'>
        <h1 className="text-center mb-4">Latest Cars & Updates</h1>
        <div className="row row-cols-1 row-cols-md-3 g-4">

          {/* Car 1 */}
          <div className="col">
            <div className="card h-100">
              <img src="https://via.placeholder.com/400x250?text=Toyota+Corolla" className="card-img-top" alt="Toyota Corolla" />
              <div className="card-body">
                <h5 className="card-title">Toyota Corolla 2023</h5>
                <p className="card-text">Sleek design, fuel-efficient, and packed with modern features. Perfect for city driving and comfort.</p>
              </div>
            </div>
          </div>

          {/* Car 2 */}
          <div className="col">
            <div className="card h-100">
              <img src="https://via.placeholder.com/400x250?text=Audi+Q5" className="card-img-top" alt="Audi Q5" />
              <div className="card-body">
                <h5 className="card-title">Audi Q5 2022</h5>
                <p className="card-text">Luxury SUV with powerful performance and advanced safety features. Ideal for family trips and city cruising.</p>
              </div>
            </div>
          </div>

          {/* Car 3 */}
          <div className="col">
            <div className="card h-100">
              <img src="https://via.placeholder.com/400x250?text=BMW+X3" className="card-img-top" alt="BMW X3" />
              <div className="card-body">
                <h5 className="card-title">BMW X3 2021</h5>
                <p className="card-text">Compact luxury SUV with a sporty edge. Features cutting-edge technology and a smooth driving experience.</p>
              </div>
            </div>
          </div>

        </div>
      </div>

    </>
  )
}
export default Blogs;