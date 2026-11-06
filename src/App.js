import NavBar from "./Component/NavBar";
import Home from "./Component/Home";
import About from "./Component/About";
import Portfolio from "./Component/Portfolio";
import Experience from "./Component/Experience";
import Contact from "./Component/Contact";
import SocialLinks from "./Component/SocialLinks";
import Certificates from "./Component/Certificates";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Certificates />
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;
