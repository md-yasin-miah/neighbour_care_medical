import HeroSection from "../components/shared/HeroSection"

const Covid = () => {
  return (
    <div>
      <HeroSection
        data={{
          title: "Covid-19",
          list: [
            {
              name: "Home",
              link: "/"
            },
            {
              name: "Covid-19",
              link: "/covid-19"
            }

          ]
        }}
      />
      <section className="covid-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title">
                <h3>Covid 19</h3>
                <p>At our pharmacy, we are committed to helping our patients stay healthy and safe during the ongoing COVID-19 pandemic. We offer a range of COVID-19 services, including testing, vaccination, and counseling. Our COVID-19 testing services include both rapid antigen and PCR testing, with results typically available within 15-30 minutes for rapid tests and within 24-48 hours for PCR tests. We also offer COVID-19 vaccinations, and our expert pharmacists are available to answer any questions or concerns you may have about the vaccine. Additionally, we provide counseling and guidance on COVID-19 prevention, including mask-wearing, social distancing, and proper hand hygiene. Our goal is to help our patients stay informed and empowered in the fight against COVID-19.</p>
              </div>
            </div>
            <div className="col-12">
              <div className="covid-vaccin-apoinment-form">
                <a href="https://bookmyshot.com/covidShot/9055537546" className="btn-style-a-3d">Book for Vaccination</a>
                <a href="https://bookmytest.ca/rapidCovid/9055537546" className="btn-style-a-3d">Rapid Antigen Test</a>
                <a href="https://bookmytest.ca/covidtesting/9055537546" className="btn-style-a-3d">RT-PCR test Symptomatic</a>
                <a href="https://bookmytest.ca/covid/9055537546" className="btn-style-a-3d">Travel PCR</a>
                <a href="https://bookmypharmacy.com/consult/9055537546" className="btn-style-a-3d">Paxlovid Rx</a>
                {/* <form action="" method="">
                  <h3>COVID-19 Vaccination Appointment Form</h3>
                  <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone:</label>
                    <input type="tel" id="phone" name="phone" required/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="vaccination-center">Vaccination Center:</label>
                    <select id="vaccination-center" name="vaccination-center" required>
                      <option value="">Select a center</option>
                      <option value="center-1">Center 1</option>
                      <option value="center-2">Center 2</option>
                      <option value="center-3">Center 3</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="appointment-date">Appointment Date:</label>
                    <input type="date" id="appointment-date" name="appointment-date" required />
                  </div>
                  <div className="form-group">
                    <input type="submit" value="Submit" />
                  </div>
                </form> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Covid