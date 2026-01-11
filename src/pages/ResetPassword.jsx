import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const userId = localStorage.getItem("reset_user_id");

  const submit = async (e) => {
    e.preventDefault();
    if (!userId) {
      setMessage("User not identified. Please try again.");
      return;
    }
    try {
      const res = await fetch(`http://127.0.0.1:5000/auth/reset-password/${userId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = await res.json();
      setMessage(data.message || data.error);
      if (res.ok) {
        navigate("/login");
      }
    } catch (err) {
      setMessage("Something went wrong");
    }
  };

  return (
    <form onSubmit={submit} className="container main-content" style={{ maxWidth: "400px" }}>
      <h5 className="text-center mt-5">Reset Password</h5>
      <div className="mb-3">
        <label className="form-label fw-semibold">New Password</label>
        <input
          type="password"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary w-100 py-2 fw-semibold">
        Reset
      </button>
      {message && <p className="mt-3 text-center">{message}</p>}
    </form>
  );
}
