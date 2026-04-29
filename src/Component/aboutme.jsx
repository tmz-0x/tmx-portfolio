import './aboutme.css'

export default function Aboutme({ onHomeClick }) {
   const stats = [
  { label: "based in", value: "Sri Lanka" },
  { label: "focus", value: "web appsec · network" },
  { label: "status", value: "available" },
  { label: "bug bounty", value: "active hunter" },
]

const journey = [
  {
    year: "2021",
    title: "Started in cybersecurity",
    desc: "Got into CTFs and HackTheBox. Learned fundamentals of networking, Linux, and web vulnerabilities from scratch."
  },
  {
    year: "2022",
    title: "First bug bounty findings",
    desc: "Started hunting on public programs. Found first XSS and IDOR vulnerabilities. Submitted first reports on HackerOne."
  },
  {
    year: "2023",
    title: "Security research & CVEs",
    desc: "Began deeper vulnerability research. Published first CVE. Started writing public technical writeups."
  },
  {
    year: "2024",
    title: "Full focus on pentesting",
    desc: "Expanding into red teaming, cloud security, Active Directory attacks and advanced web exploitation."
  },
]

const whatIDo = [
  {
    num: "01",
    title: "Web App Security",
    desc: "Finding vulnerabilities in web applications — OWASP Top 10, logic flaws, auth bypasses, SSRF, XXE, injection attacks."
  },
  {
    num: "02",
    title: "Network Pentesting",
    desc: "Internal and external network assessments, Active Directory attacks, lateral movement, privilege escalation."
  },
  {
    num: "03",
    title: "Bug Bounty Hunting",
    desc: "Active hunter on HackerOne and Bugcrowd. Focused on high-impact vulnerabilities with detailed technical reports."
  },
]

    const handleHomeClick = (e) => {
        e.preventDefault();
        onHomeClick();
    };
 
 
 
    return (
     <div className="about">
       <div className="luxury">
                      
                        <a href="/" onClick={(e) => handleHomeClick(e)}>
                            <div>
                                <h3 style={{ color: 'white' }}>back</h3>
                                
                            </div>
                        </a>
                    </div>
      <div className="page-label">about &nbsp;·&nbsp; thisal nanayakkara</div>
      
      {/* ── Bio ── */}
      <div className="bio-section">
        <div className="bio-left">
          <div className="section-tag"></div>
          <div className="bio-name">
          Burn the script. Live the unwritten  
          </div>
          <p className="bio-text">
            I'm Thisal Nanayakkara, a penetration tester and security
            researcher based in Sri Lanka. I started in cybersecurity
            out of curiosity and intention to know how the system works.
          </p>
          <p className="bio-text">
            Today I focus on web application security, network pentesting,
            and bug bounty hunting. I document everything I find and
            share it publicly.
          </p>
        </div>

        <div className="bio-right">
          {stats.map((s) => (
            <div className="bio-stat" key={s.label}>
              <span className="bio-stat-label">{s.label}</span>
              <span className="bio-stat-val">{s.value}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="divider"></div>

      {/* ── Journey ── */}
      <div className="journey-section">
        <div className="section-title">my journey</div>
        <div className="timeline">
          {journey.map((item) => (
            <div className="tl-item" key={item.year}>
              <div className="tl-year">{item.year}</div>
              <div className="tl-content">
                <div className="tl-title">{item.title}</div>
                <div className="tl-desc">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="divider"></div>

      {/* ── What I do ── */}
      <div className="what-section">
        <div className="section-title">what I do</div>
        <div className="what-grid">
          {whatIDo.map((item) => (
            <div className="what-card" key={item.num}>
              <div className="what-num">{item.num}</div>
              <div className="what-title">{item.title}</div>
              <div className="what-desc">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>

    </div>
    )
}