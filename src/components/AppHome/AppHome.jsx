import "./AppHome.css";
import Carusel from "../AppCarousel/AppCarousel.jsx";
import Section from "../AppSection/AppSection.jsx";
import Contact from "../AppContacto/AppContacto.jsx";
import Footer from "../AppFooter/AppFooter.jsx";

const Home = () => {
  return (
    <div className="Box_todo">
      <Carusel />
      <Section />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
