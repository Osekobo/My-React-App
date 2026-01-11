import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Topnav from "../components/Topnav";

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: ""
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("http://127.0.0.1:5000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim()
        }),
      }
      );
      const data = await res.json();
      if (res.status === 409) {
        setError(data.error);
      } else if (!res.ok) {
        setError(data.error || "Registration failed");
      }
      if (data.token) localStorage.setItem("token", data.token);
      navigate("/login");
    } catch (err) {
      setError("Something went wrong. Try again");
    } finally {
      setLoading(false);
    }
  };


  return (
    <>
      <Topnav />
      <Navbar />
      <div className="container py-4">
        <h1 className="text-center mt-5">Register Page</h1>
        <form className="p-3 border rounded shadow-sm w-50 mx-auto" onSubmit={handleSubmit}>
          {error && <p className="text-danger">{error}</p>}
          <input type="text" name="name" className="form-control mb-3" placeholder="Name" value={formData.name} onChange={handleChange} required></input>
          <input type="text" name="phone" className="form-control mb-3" placeholder="Enter Phone Number" value={formData.phone} onChange={handleChange} required></input>
          <input type="email" name="email" className="form-control mb-3" placeholder="Enter Email" value={formData.email} onChange={handleChange} required></input>
          <input type="password" name="password" className="form-control mb-3" placeholder="Enter Password" value={formData.password} onChange={handleChange} required></input>
          <button type="submit" className="btn btn-outline-primary w-100" disabled={loading}>{loading ? "Register..." : "Register"}</button>
          <p className="mt-3 text-black text-center">
            Already have an account?{""}
            <Link to="/login" className="text-primary text-decoration-none">Login</Link>
          </p>
        </form>
      </div>
      <Footer />
    </>
  )
}

export default Register;