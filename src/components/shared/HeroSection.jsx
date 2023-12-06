import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
const HeroSection = ({ data }) => {
  return (
    <div>
      <section className="page-header service-page-header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>{data.title}</h1>
              <nav className="venice-breadcrumb">
                <ul>
                  {
                    data.list.map((item, index) => (
                      <li key={index}>
                        <Link to={item.link}>{item.name}</Link>
                      </li>
                    ))
                  }
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HeroSection
HeroSection.propTypes = {
  data: PropTypes.object.isRequired
}