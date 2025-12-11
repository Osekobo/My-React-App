function Register() {
  return (
    <>
      <div className="container mt-5">
        <h1>Register Page</h1>
        <form className="p-3 border rounded shadow-sm w-50 mx-auto">
          <input type="text" className="form-control mb-3" placeholder="Name" required></input>
          <input type="email" className="form-control mb-3" placeholder="Enter Email" required></input>
          <input type="password" className="form-control mb-3" placeholder="Enter Password" required></input>
          <button type="submit" className="btn btn-outline-warning w-100">Register</button>
          <p className="mt-3 text-black">
            Already have an account?
            <a href="Login.jsx" className="text-warning text-decoration-none p-1">
              Login
            </a>
          </p>
        </form>
      </div>
    </>
  )
}

export default Register;