function Login() {
  return (
    <>
      <div className="container mt-5">
        <h1>Login Page</h1>
        <form className="p-3 border rounded shadow-sm w-50 mx-auto">
          <input type="email" className="form-control mb-3" placeholder="Enter Email" required></input>
          <input type="password" className="form-control mb-3" placeholder="Enter Password" required></input>
          <button type="submit" className="btn btn-outline-warning w-100">Login</button>
          <p className="mt-3 text-black">
            Don’t have an account yet?
            <a href="Register.jsx" className="text-warning text-decoration-none p-1">
              Sign Up
            </a>
          </p>
        </form>
      </div>
    </>
  )
};

export default Login;