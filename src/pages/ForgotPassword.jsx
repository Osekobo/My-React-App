import Navbar from "../components/Navbar";
import Topnav from "../components/Topnav";
import { useState } from "react";


function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);


  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("http://127.0.0.1:5000/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (!res.ok) {
        alert(data.error || "Something went wrong");
        setLoading(false);
        return;
      }
      localStorage.setItem("user_id", data.user_id);
      window.location.href = "/verify-code";
    } catch (err) {
      alert("Server not reachable");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Topnav />
      <Navbar />
      <form onSubmit={submit} className="container main-content" style={{ maxWidth: "400px" }}>
        <h5 className="text-center mt-5">Forgot Password</h5>
        <div className="mb-3">
          <label className="form-label fw-semibold">Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary w-100 py-2 fw-semibold"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Code"}
        </button>

      </form>
    </>
  );
}

export default ForgotPassword;