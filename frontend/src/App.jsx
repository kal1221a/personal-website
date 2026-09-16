import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Gallery from "./components/Gallery";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <About />

        <Skills />

        <section id="experience" className="section">
          <div className="container">
            <h2>Experience</h2>
          </div>
        </section>

        <section id="projects" className="section section-dark">
          <div className="container">
            <h2>Projects</h2>
          </div>
        </section>

        <Gallery />

        <section id="contact" className="section">
          <div className="container">
            <h2>Contact</h2>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;