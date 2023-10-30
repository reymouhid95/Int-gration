import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Services from "./components/Services";
import Activity from "./components/Activity";
import Stats from "./components/Stats";
import Projects from "./components/Projects";
import PickUs from "./components/PickUs";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import TechServe from "./components/TechServe";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Services />
      <Activity />
      <Stats />
      <Projects />
      <PickUs />
      <Testimonials />
      <TechServe />
      <Footer />
    </div>
  );
}

export default App;
