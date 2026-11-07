import NavBar from "./Component/NavBar";
import Home from "./Component/Home";
import About from "./Component/About";
import Portfolio from "./Component/Portfolio";
import Experience from "./Component/Experience";
import Contact from "./Component/Contact";
import SocialLinks from "./Component/SocialLinks";
import Certificates from "./Component/Certificates";
import Footer from "./Component/Footer";

function App() {
  return (
    <div className="App bg-slate-950 text-white min-h-screen">
      <NavBar />
      <main>
        <Home />
        <About />
        <Portfolio />
        <Experience />
        <Certificates />
        <Contact />
      </main>
      <Footer />
      <SocialLinks />
    </div>
  );
}

export default App;
