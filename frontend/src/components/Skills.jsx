import {
  Server,
  Database,
  Network,
  Monitor,
  Shield,
  Activity,
} from "lucide-react";

const skills = [
  {
    icon: Server,
    title: "Nutanix",
    description: "AHV, Prism Central, Prism Element, HCI and cluster operations.",
  },
  {
    icon: Monitor,
    title: "Linux",
    description: "RHEL, system administration, services, storage and troubleshooting.",
  },
  {
    icon: Server,
    title: "Windows Server",
    description: "Active Directory, DNS, Windows Server and enterprise administration.",
  },
  {
    icon: Network,
    title: "Networking",
    description: "VLANs, switching, connectivity troubleshooting and infrastructure networking.",
  },
  {
    icon: Activity,
    title: "Monitoring",
    description: "Prometheus, Grafana, metrics, alerts and infrastructure monitoring.",
  },
  {
    icon: Shield,
    title: "Security",
    description: "Infrastructure security, access control and system hardening.",
  },
];

function Skills() {
  return (
    <section id="skills" className="section section-dark">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">EXPERTISE</p>
          <h2>Technologies I work with</h2>
        </div>

        <div className="skills-grid">
          {skills.map((skill) => {
            const Icon = skill.icon;

            return (
              <div className="skill-card" key={skill.title}>
                <div className="skill-icon">
                  <Icon size={24} />
                </div>

                <h3>{skill.title}</h3>

                <p>{skill.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;