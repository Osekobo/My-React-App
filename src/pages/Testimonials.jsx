function Testimonials() {
  return (
    <>
      <div className='container main-content bg-light'>
        <div class="py-8 bg-light ">
          <div class="container">
            <div class="row">
              <div class="offset-xl-3 col-xl-6 col-md-12">
                <div class="text-center mb-8">
                  <h2 class="display-4 fw-bold mb-3">Developer Geeks
                  </h2>
                  <p class="fs-4">Our average call quality rating is 4.4 out of 5. That leads to happy
                    tweets like these:</p>
                </div>
              </div>
            </div>


            <div class="row">
              {/* <!-- col --> */}
              <div class="col-md-6 col-12">
                {/* <!-- card --> */}
                <div class="card mb-6 mb-lg-0">
                  {/* <!-- card body --> */}
                  <div class="card-body p-6">
                    <span class=" mb-3 d-block" />
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-quote text-light-primary  "
                      viewBox="0 0 16 16">
                      <path
                        d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                    </svg>

                    <p class="fs-3 text-dark fw-semibold">"Geeks has created an incredibly seamless
                      experience for app design. My mind is blown
                      fusce consequat ligula in dui congue interdum."</p>

                    <div class="d-flex mt-4 align-items-center">
                      <img src="../assets/images/avatar/avatar-1.jpg" alt="" class="avatar avatar-md rounded-circle" />
                      <div class="ms-2">
                        <h5 class="text-primary mb-0">Ronald Richards</h5>
                        <p class="mb-0 fs-6">Payments Engineer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-12">
                {/* <!-- card --> */}
                <div class="card">
                  {/* <!-- card body --> */}
                  <div class="card-body p-6">

                    <span class=" mb-3 d-block">
                      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-quote text-light-primary  "
                        viewBox="0 0 16 16">
                        <path
                          d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                      </svg>
                    </span>
                    <p class="fs-3 text-dark fw-semibold">"I am very satisfied with my purchase. Your team
                      helped me a lot with the new release for RLT
                      version. I hope you are always successful."</p>
                    <div class="d-flex mt-4 align-items-center">
                      <img src="../assets/images/avatar/avatar-9.jpg" alt="" class="avatar avatar-md rounded-circle" />
                      <div class="ms-2">
                        <h5 class="text-primary mb-0">Darlene Robertson</h5>
                        <p class="mb-0 fs-6">Senior Data Analyst</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Testimonials;