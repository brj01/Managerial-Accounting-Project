import DashboardEmbed from '../components/DashboardEmbed';
import {
  embedConfig,
  milestones,
  roadmap,
  teamInfo,
  swot,
  departments,
  phases,
  impactMetrics,
} from '../content/projectData';

function ImplementationPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <p className="eyebrow">Implementation & KPI hub</p>
            <h1>Operationalize the SME Growth Accelerator roadmap.</h1>
            <p className="lede">
              Track milestones, quantify market-backed decisions, and communicate the bank-specific phases that move
              TEQDAR graduates into funded SMEs.
            </p>
            <ul className="page-meta">
              <li>
                <span>Primary audience</span>
                <strong>Banque Misr mentors, risk, and executive committee</strong>
              </li>
              <li>
                <span>Team</span>
                <strong>{teamInfo.team}</strong>
              </li>
            </ul>
          </div>
          <div className="milestones-card">
            <h3>Upcoming checkpoints</h3>
            <ul>
              {milestones.map((item) => (
                <li key={item.label}>
                  <p className="milestone-date">{item.date}</p>
                  <p className="milestone-label">{item.label}</p>
                  <p className="milestone-detail">{item.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="impact">
        <div className="container impact-grid">
          {impactMetrics.map((metric) => (
            <article key={metric.label}>
              <p className="impact-value">{metric.value}</p>
              <p className="impact-label">{metric.label}</p>
              <p className="impact-detail">{metric.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="dashboard">
        <div className="container">
          <div className="section-intro">
            <p className="eyebrow">Live dashboard</p>
            <h2>Embed project KPIs, credit funnel, and profitability insight.</h2>
            <p className="lede">
              The KPI cockpit visualizes applicant flow, credit readiness, disbursement velocity, and risk to prove the
              business case.
            </p>
          </div>
          <DashboardEmbed config={embedConfig} />
        </div>
      </section>

      <section className="swot">
        <div className="container">
          <div className="section-intro">
            <p className="eyebrow">SWOT</p>
            <h2>Evidence-backed analysis.</h2>
          </div>
          <div className="swot-grid">
            {Object.entries(swot).map(([key, items]) => (
              <article key={key}>
                <h3>{key.charAt(0).toUpperCase() + key.slice(1)}</h3>
                <ul>
                  {items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="stakeholders">
        <div className="container">
          <div className="section-intro">
            <p className="eyebrow">Bank alignment</p>
            <h2>Departments owning the delivery.</h2>
          </div>
          <div className="stakeholder-list">
            {departments.map((dept) => (
              <article key={dept.department}>
                <h3>{dept.department}</h3>
                <p>{dept.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="phases">
        <div className="container">
          <div className="section-intro">
            <p className="eyebrow">Bank-specific phases</p>
            <h2>Approvals, IT build, training, and launch cadence.</h2>
          </div>
          <div className="phase-grid">
            {phases.map((phase) => (
              <article key={phase.title}>
                <p className="phase-title">{phase.title}</p>
                <p className="phase-time">{phase.timing}</p>
                <ul>
                  {phase.deliverables.map((deliverable) => (
                    <li key={deliverable}>{deliverable}</li>
                  ))}
                </ul>
                <p className="phase-owners">Owners: {phase.owners}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="roadmap">
        <div className="container">
          <div className="section-intro">
            <p className="eyebrow">Execution plan</p>
            <h2>Timeline, ownership, and outcomes.</h2>
          </div>
          <ol className="roadmap-list">
            {roadmap.map((item) => (
              <li key={item.milestone} className="roadmap-card">
                <div className="roadmap-header">
                  <p className="phase">{item.milestone}</p>
                  <p className="dates">{item.date}</p>
                </div>
                <p className="owners">Owners: {item.owners}</p>
                <p className="outcomes">Outcome: {item.outcome}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}

export default ImplementationPage;
