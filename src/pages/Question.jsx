function Question() {
  return (
    <>
      <div className='container main-content bg-light'>
        {/* <h1>Questions</h1> */}
        <div class="container my-5">
          <h3 class="text-center mb-4">Frequently Asked Questions</h3>

          <div class="accordion" id="faqAccordion">

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                  Are your cars new or used?
                </button>
              </h2>
              <div id="faq1" class="accordion-collapse collapse show">
                <div class="accordion-body">
                  We sell both foreign-used and locally-used vehicles, all inspected for quality.
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                  Do you offer hire purchase?
                </button>
              </h2>
              <div id="faq2" class="accordion-collapse collapse">
                <div class="accordion-body">
                  Yes, we offer flexible hire purchase plans through trusted financial partners.
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                  Can I bring my mechanic?
                </button>
              </h2>
              <div id="faq3" class="accordion-collapse collapse">
                <div class="accordion-body">
                  Yes. Customers are welcome to inspect vehicles with their own mechanics.
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq4">
                  Is delivery available?
                </button>
              </h2>
              <div id="faq4" class="accordion-collapse collapse">
                <div class="accordion-body">
                  Yes, we offer affordable nationwide delivery.
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
export default Question;