import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ForgotPassword() {
  const [contact, setContact] = useState(""); // email or phone
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // <-- Add this

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const isEmail = contact.includes("@");
    const body = isEmail ? { email: contact } : { phone: contact };

    try {
      const res = await fetch("http://127.0.0.1:5000/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await res.json();

      if (res.status === 404) {
        setMessage("User not found. Check your input.");
      } else if (!res.ok) {
        setMessage(data.error || "Something went wrong");
      } else {
        // success: store user_id
        localStorage.setItem("reset_user_id", data.user_id);
        setMessage(data.message || "OTP sent successfully");

        // redirect to OTP page
        navigate("/verify-code"); // <-- Redirect here
      }
    } catch (err) {
      setMessage("Something went wrong. Try again");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container" style={{ maxWidth: "400px" }}>
        <h5 className="text-center mt-5">Forgot Password</h5>
        <form onSubmit={submit}>
          <div className="mb-3">
            <label className="form-label fw-semibold">
              Email or Phone
            </label>
            <input
              type="text"
              placeholder="Enter your email or phone"
              className="form-control"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary w-100 py-2 fw-semibold"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send OTP"}
          </button>
          {message && <p className="mt-3 text-center">{message}</p>}
        </form>
      </div>
      <Footer />
    </>
  );
}
