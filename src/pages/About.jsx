import HeroSection from "../components/shared/HeroSection"

const About = () => {
  return (
    <div>
      <HeroSection
        data={{
          title: "About",
          list: [
            {
              name: "Home",
              link: "/"
            },
            {
              name: "About",
              link: "/about"
            }

          ]
        }}
      />
      <section className="about-us-page-area">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="about-us-mission">
                <h2>Our Mission</h2>
                <p>Our mission is to improve the health and well-being of our patients by providing them with personalized and high-quality pharmacy care. We strive to be a trusted partner in their healthcare journey, offering a range of services and products that meet their unique needs. We are committed to delivering exceptional care, education, and support to our patients and the communities we serve, empowering them to live healthier, happier lives.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="about-us-who-we-are">
                <h2>Who we are</h2>
                <p>At our pharmacy, we are a team of dedicated healthcare professionals committed to providing personalized and exceptional care to our patients. We believe that healthcare should be more than just basic care, and that&apos;s why we go above and beyond to ensure that our patients receive the highest quality of service and support. From medication management to consultations and immunizations, we offer a range of services to meet our patients&apos; unique needs. Our knowledgeable and friendly staff are always available to answer questions, offer advice, and provide guidance, helping our patients make informed decisions about their health. We&apos;re proud to be a trusted partner in their healthcare journey.
                </p>
              </div>
            </div>

          </div>
          <div className="row">
            <div className="col-12">
              <div className="section-title">
                <h3>Meet Our Pharmacist Owner</h3>
                <p>We are proud to introduce our valued pharmacist owner, Ferdous Amin, to our patients. With over a decade of experience in the field, Ferdous is a highly trained and knowledgeable healthcare professional who provides exceptional care and support to our patients. He is passionate about helping people achieve their health goals and improving their overall well-being through personalized consultations and recommendations. Ferdous is committed to staying up to date with the latest developments in the field of pharmacy and is always eager to share his knowledge and expertise with our patients. </p>
              </div>
            </div>
          </div>

          {/* loop */}
          <div className="row">
            <div className="col-md-6">
              <div className="about-us-mission">
                <h2># mission_title</h2>
                <p># mission_description</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="about-us-who-we-are">
                <h2>#about_title</h2>
                <p>#about_description</p>
              </div>
            </div>

          </div>
          <div className="row">
            <div className="col-12">
              <div className="section-title">
                <h3>Meet Our Pharmacist Owner</h3>
                <p>We are proud to introduce our valued pharmacist owner, Ferdous Amin, to our patients. With over a decade of experience in the field, Ferdous is a highly trained and knowledgeable healthcare professional who provides exceptional care and support to our patients. He is passionate about helping people achieve their health goals and improving their overall well-being through personalized consultations and recommendations. Ferdous is committed to staying up to date with the latest developments in the field of pharmacy and is always eager to share his knowledge and expertise with our patients. </p>
              </div>
            </div>
          </div>
          {/* end loop */}
          <div className="row">
            <div className="col-md-4">

            </div>
            <div className="col-md-4">
              <div className="single-doctor">
                <div className="sd-img">
                  <img src="src/assets/img/pharmacist-1.jpg" alt="" />
                </div>
                <div className="sd-info">
                  <h4>Ferdous Amin Mahedi</h4>
                  <p>Pharmacist Owner</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">

            </div>


          </div>
        </div>
      </section>
      {/* <!-- About Area End --> */}

      {/* <!-- Health Advice Area --> */}
      <section className="health-advice-area">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="haa-img">
                <img src="src/assets/img/health-advice-img.jpg" alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="haa-text">
                <h4>Have questions? </h4>
                <h3>Consult with our knowledgeable expert for trusted advice.</h3>
                <p>Whether you&apos;re looking for advice on managing a chronic condition, choosing the right medication, or seeking recommendations for preventative care, our expert is here to help. With our expert&apos;s guidance, you can be confident that you&apos;re receiving the highest quality of care and advice, tailored to your unique needs. So don&apos;t hesitate - reach out to us today to get the answers and advice you need to stay healthy and happy. Write us an email at pharmacy.venice@yahoo.com and we will contact you to take care of the rest or book an appointment here.
                </p>
                <a href="https://www.bookmypharmacy.com/9055537546" className="btn-style-a">Book appointments</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Health Advice Area End--> */}


      {/* <!-- Call to Action Area --> */}
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
      {/* <!-- Call to Action Area End --> */}
    </div>
  )
}

export default About