import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">CarDuka</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link className="nav-link active" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/Dashboard">Dashboard</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/Products">Products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/Purchases">Purchases</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/Sales">Sales</Link>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link active" to="/Login">Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
export default Navbar;