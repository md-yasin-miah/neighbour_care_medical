import { Link, NavLink } from "react-router-dom"

const Header = () => {
  return (
    <header className="venice-header-v2">
      <div className="header-top">
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <div className="header-contact-info">
                <div className="sbh-wrap">
                  <p><i className="fa-solid fa-phone"></i>: <a href="tel:9055537546"></a>9055537546<span> | <i className="fa-solid fa-fax"></i>: 9055537547 | Mon-Fri: 9:00 am - 6:00 pm, Sat: 9:00 am -2:00 pm, Sun Closed</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="header-social">
                <ul className="h-social-icon">
                  <li><a href="https://www.facebook.com/venicepharmacy"><i className="fa-brands fa-facebook-f"></i></a></li>
                  <li><a href="https://twitter.com/venice_pharmacy"><i className="fa-brands fa-twitter"></i></a></li>
                  <li><a href="https://www.instagram.com/venice.pharmacy/"><i className="fa-brands fa-linkedin-in"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-menu-area">
        <div className="container">
          <nav className="navbar navbar-expand-lg">

            <Link className="navbar-brand" to="/">
              <div className="logo">
                <img src="src/assets/img/logo.png" alt="" />
              </div>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "active nav-link" : "nav-link"
                    }
                    to="/">Home <span className="sr-only">(current)</span></NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "active nav-link" : "nav-link"
                    }
                    to="/services">Services</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "active nav-link" : "nav-link"
                    }
                    to='/about'>About</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "active nav-link" : "nav-link"
                    }
                    to="/career">Career</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "active nav-link" : "nav-link"
                    }
                    to="/blog">Blog</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "active nav-link" : "nav-link"
                    }
                    to="/covid-19">COVID-19</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "active nav-link" : "nav-link"
                    }
                    to="/contact_us">Contact Us</NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header