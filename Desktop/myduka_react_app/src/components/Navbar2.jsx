// import { Link, useNavigate } from "react-router-dom";
// function Navbar2() {
//   const navigate = useNavigate();
//   // const handleLogout = () => {
//   //   localStorage.removeItem("token");
//   //   navigate("/login");
//   // };

//   return (
//     <>
//       <nav className="navbar navbar-expand-lg bg-body-tertiary">
//         <div className="container-fluid">
//           <Link className="navbar-brand" to="/home">CarDuka</Link>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarNav"
//             aria-controls="navbarNav"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarNav">
//             <ul className="navbar-nav mx-auto">
//               <li className="nav-item">
//                 <Link className="nav-link active" to="/home">Home</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link active" to="/dashboard">Dashboard</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link active" to="/products">Products</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link active" to="/purchases">Purchases</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link active" to="/sales">Sales</Link>
//               </li>
//             </ul>
//             <ul className="navbar-nav ms-auto">
//               <li className="nav-item">
//                 <button className="btn btn-outline-danger" onClick={()=>navigate("/signup")}>Register</button>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </>
//   )
// }
// export default Navbar2;



import { useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
import feather from "feather-icons";
import "./style.css"; // your CSS for vertical navbar

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
