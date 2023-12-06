
import { PropTypes } from "prop-types";
import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout;
MainLayout.propTypes = {
  children: PropTypes.node.isRequired
};
