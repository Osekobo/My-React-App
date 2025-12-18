import { useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
import feather from "feather-icons";
import "./style.css"; 

function Navbar2() {
  const navigate = useNavigate();

  // Initialize Feather icons
  useEffect(() => {
    feather.replace();
  }, []);

  return (
    <nav className="navbar">
      <ul className="navbar__menu">
        <li className="navbar__item">
          <Link to="/home" className="navbar__link">
            <i data-feather="home"></i>
            <span>Home</span>
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/dashboard" className="navbar__link">
            <i data-feather="bar-chart-2"></i>
            <span>Dashboard</span>
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/products" className="navbar__link">
            <i data-feather="box"></i>
            <span>Products</span>
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/purchases" className="navbar__link">
            <i data-feather="shopping-cart"></i>
            <span>Purchases</span>
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/sales" className="navbar__link">
            <i data-feather="dollar-sign"></i>
            <span>Sales</span>
          </Link>
        </li>

        {/* Right side button as nav item */}
        <li className="navbar__item">
          <button
            className="navbar__link"
            onClick={() => navigate("/signup")}
            style={{ border: "none", background: "none", padding: 0 }}
          >
            <i data-feather="user-plus"></i>
            <span>Register</span>
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar2;
