import HeroSection from "../components/shared/HeroSection"

const Services = () => {
  return (
    <div>
      <HeroSection
        data={{
          title: "Services",
          list: [
            {
              name: "Home",
              link: "/"
            },
            {
              name: "Services",
              link: "/services"
            }

          ]
        }}
      />
      {/* Services Area */}
      <section className="services-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title">
                <h3>Services We Provide</h3>
                <p>Venice Pharmacy is your community healthcare destination. In addition to filling your prescriptions with care, we offer products and services to make everyday health and wellness convenient for you and your family. Visit our location to find everything you need to feel your best.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            {/* loop start */}
            {/* <div className="col-md-4">
              <div className="services-item">
                <div className="services-icon">
                  <i className="fa fa-stethoscope" aria-hidden="true"></i>
                  <img src="src/assets/img/logo.png" alt="" />
                  details_url
                </div>
                <h3>#name</h3>
                <p>#description</p>
              </div>
            </div> */}

            {/* loop end */}

            <div className="col-md-4">
              <div className="services-item">
                <div className="services-icon">
                  {/* <i className="fa fa-stethoscope" aria-hidden="true"></i>
                <img src="assets/img/logo.png" alt=""/> */}
                </div>
                <h3>Immunization</h3>
                <p>We understand the importance of immunizations in protecting against preventable diseases. That&apos;s why we offer a variety of vaccines for individuals of all ages, including flu shots, COVID-19 vaccines, and travel vaccines. Our trained pharmacists are ready to help you stay up-to-date on your immunizations and provide you with the information you need to make informed decisions about your health. Trust us to help keep you and your family healthy and protected.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="services-item">
                <div className="services-icon">
                  {/* <i className="fa fa-heartbeat" aria-hidden="true"></i>
                <img src="assets/img/logo.png" alt=""/> */}
                </div>
                <h3>Compliance packaging</h3>
                <p>Our pharmacy offers compliance packaging to help our patients stay on track with their medication regimen. With our easy-to-use packaging, you can be confident that you are taking the right medication at the right time, every time. Let us help you simplify your medication routine and improve your overall health and wellness.</p>
              </div>


            </div>
            <div className="col-md-4">
              <div className="services-item">
                <div className="services-icon">
                  {/* <i className="fa fa-eyedropper" aria-hidden="true"></i>
                <img src="assets/img/logo.png" alt=""/> */}
                </div>
                <h3>Compounding </h3>
                <p>We offer compounding services to meet the unique needs of each individual patient. Our experienced compounding pharmacists work closely with healthcare providers to create customized medications that are tailored to each patient&apos;s specific requirements. Whether you need a medication in a different strength, dosage form, or flavor, we can help. Trust us to provide you with the highest quality, personalized medication solutions to improve your health and well-being.</p>
              </div>


            </div>
            <div className="col-md-4">
              <div className="services-item">
                <div className="services-icon">
                  {/* <i className="fa fa-teeth" aria-hidden="true"></i>
               <img src="assets/img/logo.png" alt=""/> */}
                </div>
                <h3>Medication reviews </h3>
                <p>We offer medication reviews to help you manage your medications safely and effectively. Our trained pharmacists will work with you to review all your medications, including prescription drugs, over-the-counter products, and supplements. We&apos;ll identify potential interactions, side effects, and other issues that could impact your health. We&apos;ll also provide you with personalized recommendations to optimize your medication regimen and improve your overall health and well-being. </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="services-item">
                <div className="services-icon">
                  {/* <i className="fa fa-stethoscope" aria-hidden="true"></i>
                  <img src="assets/img/logo.png" alt="" /> */}
                </div>
                <h3>Free delivery</h3>
                <p>At our pharmacy, we offer free delivery to make it easier for you to get the medications and healthcare products you need, without leaving the comfort of your home. Whether you&apos;re recovering from an illness, managing a chronic condition, or just need a refill, our delivery service can save you time and hassle. Contact us today to learn more about our free delivery services.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="services-item">
                <div className="services-icon">
                  {/* <i className="fa fa-heartbeat" aria-hidden="true"></i>
                  <img src="assets/img/logo.png" alt="" /> */}
                </div>
                <h3>Consultations</h3>
                <p>We offer consultations to help you better understand your medications and healthcare options. Our knowledgeable pharmacists are available to answer your questions, provide you with information about your medications, and offer advice on how to manage your health. Whether you&apos;re dealing with a new diagnosis, adjusting to a new medication, or just need some guidance, we&apos;re here to help. Contact us today to schedule a consultation with one of our pharmacists.</p>
              </div>


            </div>
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <div className="services-item">
                <div className="services-icon">
                  {/* <i className="fa fa-eyedropper" aria-hidden="true"></i>
                  <img src="assets/img/logo.png" alt="" /> */}
                </div>
                <h3>Covid test</h3>
                <p> We offer Rapid Antigen Test (RAT), RT-PCR COVID-19 testing to help you stay safe and protect those around you. Our tests are quick, convenient, and reliable, and our trained staff will guide you through the process every step of the way. Whether you need a test for travel, work, or just for peace of mind, we&apos;ve got you covered. Contact us today to schedule your COVID-19 test.</p>
              </div>
            </div>
            {/* <div className="col-md-4"></div>
            <div className="col-md-3">
              <div className="services-item">
                <div className="services-icon">
                   <i className="fa fa-teeth" aria-hidden="true"></i>
                </div>
                <h3>Dental Care</h3>
                <p>Lorem ipsum dolor sit amet, Adipiscing elit. Lacus ullamcorper dui molestie service.</p>
              </div>
            </div> */}
          </div>
        </div>
      </section >
      {/* < !--Services Area End-- > */}

      {/* < !--Call to Action Area-- > */}
      <section className="call-to-action-area">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="cta-content">
                <h3>Get the Best Medical Care Today</h3>
                <p>We&apos;re committed to providing you with the best possible care, every day. Our experienced and knowledgeable staff are dedicated to helping you achieve your health goals and improve your overall well-being. From medication management to consultations and immunizations, we offer a range of services to meet your unique healthcare needs. Contact us today to learn more about how we can help you get the best care, today.</p>
                <a href="https://www.bookmypharmacy.com/9055537546" className="cta-button">Book an Appointment</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--Call to Action Area End-- > */}
    </div >
  )
}

export default Services