import { useState } from "react";

function VerifyCode() {
  const [otp, setOtp] = useState("");
  const userId = localStorage.getItem("user_id");

  const submit = async () => {
    if (!otp) {
      alert("Please enter the OTP");
      return;
    }

    try {
      const res = await fetch(`http://127.0.0.1:5000/auth/verify-code/${userId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ otp })
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.error || "Verification failed");
        return;
      }

      // Success → go to reset password page
      window.location.href = "/reset-password";
    } catch (err) {
      alert("Server not reachable");
    }
  };


  return (
    <>
      <div style={{ maxWidth: "400px", margin: "50px auto", textAlign: "center" }}>
        <h5>Enter OTP</h5>
        <input
          value={otp}
          onChange={e => setOtp(e.target.value)}
          placeholder="Enter code"
          style={{ padding: "8px", width: "100%", marginBottom: "10px" }}
        />
        <button onClick={submit} style={{ padding: "10px 20px" }}>
          Verify
        </button>
      </div>
    </>
  );
}

export default VerifyCode;
