import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import React, { useState } from "react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");


  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("http://127.0.0.1:5000/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(
          contact.includes("@") ? { email: contact } : { phone: contact }
        ) // <-- use state here
      });

      const data = await res.json();

      if (res.status === 404) {
        setMessage("User not found");
      } else if (!res.ok) {
        setMessage(data.error || "Something went wrong");
      } else {
        localStorage.setItem("reset_user_id", data.user_id);
        setMessage(data.message);
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
      <form onSubmit={submit} className="container main-content" style={{ maxWidth: "400px" }}>
        <h5 className="text-center mt-5">Forgot Password</h5>
        <div className="mb-3">
          <label className="form-label fw-semibold">Email</label>
          <input type="email" placeholder="Enter your email..." />
        </div>
        <button type="submit" className="btn btn-primary w-100 py-2 fw-semibold" disabled={loading}>
          {loading ? "Sending..." : "Send OTP"}
        </button>
        {message && <p className="mt-3 text-center">{message}</p>}
      </form>
      <Footer />
    </>
  );
}
