import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function VerifyCode() {
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const userId = localStorage.getItem("reset_user_id"); // get user_id

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://127.0.0.1:5000/auth/verify-code/${userId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ otp }),
      });
      const data = await res.json();
      setMessage(data.message || data.error);
      if (res.ok) {
        // OTP correct → go to reset password page
        navigate("/reset-password");
      }
    } catch (err) {
      setMessage("Something went wrong");
    }
  };

  return (
    <form onSubmit={submit} className="container main-content" style={{ maxWidth: "400px" }}>
      <h5 className="text-center mt-5">Verify Code</h5>
      <div className="mb-3">
        <label className="form-label fw-semibold">Enter OTP</label>
        <input
          type="text"
          className="form-control"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary w-100 py-2 fw-semibold">
        Verify
      </button>
      {message && <p className="mt-3 text-center">{message}</p>}
    </form>
  );
}


