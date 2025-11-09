import {
  teamInfo,
  ideaPillars,
  marketStats,
  marketTrends,
  competitiveEdge,
} from '../content/projectData';

function OverviewPage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">SME Growth Accelerator Program</p>
            <h1>{teamInfo.heroHeadline}</h1>
            <p className="lede">{teamInfo.heroSubtext}</p>
            <div className="actions">
              <a className="cta primary" href="#idea">
                View solution
              </a>
              <a className="cta secondary" href="/implementation">
                Go to plan
              </a>
            </div>
          </div>
          <div className="hero-card">
            <p className="eyebrow">Team + course</p>
            <p className="hero-meta">{teamInfo.cohort}</p>
            <p className="hero-meta">Team: {teamInfo.team}</p>
            <p className="hero-meta highlight">Target: win Banque Misr’s SME case by closing the SME funding gap.</p>
          </div>
        </div>
      </section>

      <section className="insights" aria-labelledby="program-brief">
        <div className="container insights-grid">
          <article>
            <p className="eyebrow">Program brief</p>
            <h3 id="program-brief">Introduction</h3>
            <p>
              SME Growth Accelerator Program – An enhanced version of Banque Misr&apos;s TEQDAR accelerator, focused on an
              end-to-end SME financing pathway. Selected startups receive mentorship, marketing support, and bundled
              banking products including digital accounts, preparatory credit evaluations, and fast-track loan approvals.
              Integration with BM’s branch network and the CBE regulatory sandbox provides holistic support from
              incubation to scale.
            </p>
          </article>
          <ul>
            <li>
              <h4>Course</h4>
              <p>{teamInfo.cohort}</p>
            </li>
            <li>
              <h4>Deadlines</h4>
              <p>Concept narrative: 2 Nov 2025 • Final submission: 11 Nov 2025</p>
            </li>
            <li>
              <h4>Objective</h4>
              <p>Deliver a proposal that increases SME profitability, meets CBE mandates, and strengthens Banque Misr’s brand.</p>
            </li>
          </ul>
        </div>
      </section>

      <section id="idea" className="requirements">
        <div className="container">
          <div className="section-intro">
            <p className="eyebrow">Idea blueprint</p>
            <h2>SME Growth Accelerator components.</h2>
          </div>
          <div className="requirements-grid">
            {ideaPillars.map((item) => (
              <article key={item.title} className="requirement-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="market">
        <div className="container">
          <div className="section-intro">
            <p className="eyebrow">Market size & trends</p>
            <h2>Why Banque Misr needs this program now.</h2>
          </div>
          <div className="stat-grid">
            {marketStats.map((stat) => (
              <article key={stat.label}>
                <p className="stat-value">{stat.value}</p>
                <p className="stat-label">{stat.label}</p>
                <p className="stat-detail">{stat.detail}</p>
              </article>
            ))}
          </div>
          <div className="trend-grid">
            {marketTrends.map((trend) => (
              <article key={trend.title}>
                <h3>{trend.title}</h3>
                <p>{trend.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="competitive">
        <div className="container">
          <div className="section-intro">
            <p className="eyebrow">Competitive edge</p>
            <h2>How SME Growth Accelerator beats rival programs.</h2>
          </div>
          <div className="competitive-grid">
            {competitiveEdge.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default OverviewPage;
