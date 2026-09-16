import { ArrowRight, Download } from "lucide-react";

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <p className="eyebrow">HELLO, I'M</p>

          <h1>
            Kalabe <span>Alene</span>
          </h1>

          <h2>
            System Administrator & IT Infrastructure Professional
          </h2>

          <p className="hero-description">
            I work with enterprise infrastructure, virtualization,
            Nutanix, Linux, Windows Server, networking and monitoring
            technologies to build reliable and scalable IT environments.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="button primary">
              View My Work
              <ArrowRight size={18} />
            </a>

            <a href="/cv.pdf" className="button secondary">
              Download CV
              <Download size={18} />
            </a>
          </div>
        </div>

        <div className="hero-card">
          <div className="terminal">
            <div className="terminal-header">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="terminal-body">
              <p>
                <span className="terminal-green">$</span> whoami
              </p>

              <p className="terminal-output">
                kalabe@infrastructure
              </p>

              <p>
                <span className="terminal-green">$</span> skills
              </p>

              <p className="terminal-output">
                Nutanix • Linux • Windows
              </p>

              <p className="terminal-output">
                Virtualization • Networking
              </p>

              <p className="terminal-output">
                Monitoring • Infrastructure
              </p>

              <p>
                <span className="terminal-green">$</span> status
              </p>

              <p className="terminal-success">
                ● Systems operational
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;