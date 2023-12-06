import { useRoutes } from 'react-router-dom'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Career from './pages/Career'
import Blog from './pages/Blog'
import Covid from './pages/Covid'
import ContactUs from './pages/ContactUs'

const Router = () => useRoutes([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/services',
    element: <Services />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/career',
    element: <Career />
  },
  {
    path: '/blog',
    element: <Blog />
  },
  {
    path: '/covid-19',
    element: <Covid />
  },
  {
    path: '/contact_us',
    element: <ContactUs />
  },

])

export default Router