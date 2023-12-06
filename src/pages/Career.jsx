import HeroSection from "../components/shared/HeroSection"

const Career = () => {
  return (
    <div>
      <HeroSection
        data={{
          title: "Careers",
          list: [
            {
              name: "Home",
              link: "/"
            },
            {
              name: "Careers",
              link: "/career"
            }

          ]
        }}
      />

      <section className="career-area">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="career-content">
                <h2>Careers</h2>
                <p>{"We are always looking for talented individuals to join our team. If you are passionate about healthcare and want to make a difference in people's lives, we want to hear from you."}</p>
                <ul>
                  <li>
                    <h3>Pharmacist</h3>
                    <p>Are you passionate about healthcare and helping others? Join our pharmacy team and become a valued member of our community-focused organization. We are seeking a licensed pharmacist to join our team. The ideal candidate will have a pharmacist license in Ontario and a minimum of 2 years of experience in a retail pharmacy setting. Responsibilities include dispensing medication, counseling patients, administering Covid vaccines and test, prescribing for minor ailments etc. Upload your resume and we will get back to you.

                    </p>
                    <a href="{{ url('/career-apply') }}">Apply Now</a>
                  </li>
                  <li>
                    <h3>Pharmacy Assistant: </h3>
                    <p>We are seeking a pharmacy assistant to join our team. The ideal candidate will have a high school diploma or equivalent and a minimum of 1 year of experience in a retail pharmacy setting. Responsibilities include assisting the pharmacist, preparing medications, and managing inventory. This is a part-time position with flexible hours.</p>
                    <a href="{{ url('/career-apply') }}">Apply Now</a>
                  </li>

                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Career