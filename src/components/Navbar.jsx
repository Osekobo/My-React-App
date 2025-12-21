import { useNavigate, Link, useLocation, } from "react-router-dom";
import { useEffect } from "react";
import feather from "feather-icons";


function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  
  useEffect(() => {
    feather.replace();
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <nav className="navbar">
        <ul className="navbar__menu">
          <li className="navbar__item">
            <Link
              to="/home"
              className={`navbar__link ${isActive("/home") ? "active" : ""}`}
            >
              <i data-feather="home"></i>
              <span>Home</span>
            </Link>
          </li>
          <li className="navbar__item">
            <Link
              to="/dashboard"
              className={`navbar__link ${isActive("/dashboard") ? "active" : ""}`}
            >
              <i data-feather="bar-chart-2"></i>
              <span>Dashboard</span>
            </Link>
          </li>
          <li className="navbar__item">
            <Link
              to="/products"
              className={`navbar__link ${isActive("/products") ? "active" : ""}`}
            >
              <i data-feather="box"></i>
              <span>Products</span>
            </Link>
          </li>
          <li className="navbar__item">
            <Link
              to="/purchases"
              className={`navbar__link ${isActive("/purchases") ? "active" : ""}`}
            >
              <i data-feather="shopping-cart"></i>
              <span>Purchases</span>
            </Link>
          </li>
          <li className="navbar__item">
            <Link
              to="/sales"
              className={`navbar__link ${isActive("/sales") ? "active" : ""}`}
            >
              <i data-feather="dollar-sign"></i>
              <span>Sales</span>
            </Link>
          </li>
          <li className="navbar__item">
            <button className="navbar__link" onClick={handleLogout}>
              <i data-feather="log-out"></i>
              <span>Logout</span>
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
