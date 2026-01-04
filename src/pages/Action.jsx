function Action() {
  return (
    <>
      <div className="container main-content text-center py-5 bg-light">
        <h1>Call to action</h1>
        <p className="lead text-success mb-4">Get Updates on Our Latest Collection</p>

        <form className="d-flex justify-content-center gap-2" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="email" className="visually-hidden">Email address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="form-control"
            required
          />
          <button type="submit" className="btn btn-warning">
            Subscribe
          </button>
        </form>
      </div>
    </>
  )
}
export default Action;