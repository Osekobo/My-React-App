import React, { useState } from "react";

export default function ResetPassword({ userId }) {
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`/auth/reset-password/${userId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = await res.json();
      setMessage(data.message || data.error);
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
