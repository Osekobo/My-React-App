import { useState } from "react";

function ResetPassword() {
  const [password, setPassword] = useState("");
  const userId = localStorage.getItem("user_id");

  const submit = async () => {
    if (!password) {
      alert("Please enter a new password");
      return;
    }

    if (!userId) {
      alert("User ID not found. Go back to forgot password flow.");
      return;
    }

    try {
      const res = await fetch(`http://127.0.0.1:5000/auth/reset-password/${userId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password })
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.error || "Password reset failed");
        return;
      }

      alert(data.message || "Password updated successfully");
      // optional: redirect to login page
      window.location.href = "/login";
    } catch (err) {
      alert("Server not reachable");
    }
  };

  return (
    <>
      <div style={{ maxWidth: "400px", margin: "50px auto", textAlign: "center" }}>
        <h5>Reset Password</h5>
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Enter new password"
          style={{ padding: "8px", width: "100%", marginBottom: "10px" }}
        />
        <button onClick={submit} style={{ padding: "10px 20px" }}>
          Reset
        </button>
      </div>
    </>
  );
}

export default ResetPassword;
