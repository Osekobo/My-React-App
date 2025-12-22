import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const data = await response.json();
      console.log("Full response:", data);

      if (response.ok) {
        localStorage.setItem("token", data.token);
        console.log("JWT Token:", data.token)
        navigate("/home");
      } else {
        console.error("Login failed:", data.error);
        alert(data.error || "Login failed");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occured. Please try again.");
    }
  };

  return (
    <div className='container p-4'>
      <h2 className='text-center'>Login</h2>
      <form className="p-3 border rounded shadow-sm w-50 mx-auto" onSubmit={handleLogin}>
        <div style={{ marginBottom: "15px" }}>
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button className="btn btn-primary w-100 mb-5">Login</button>
      </form>
    </div>
  );
}

export default Login;