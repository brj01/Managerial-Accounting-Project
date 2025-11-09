import { useMemo } from 'react';
import './App.css';

const embedConfig = {
  reportUrl: '',
  title: 'SME Growth Accelerator – KPI cockpit',
  description: 'Monitor applicant pipeline, credit-readiness scorecards, disbursement velocity, and margin impact.',
  refreshStatus: 'Awaiting link',
  lastRefresh: null,
};

const heroHighlights = [
  {
    label: '01',
    title: 'Banque Misr',
    description: 'SME Growth Accelerator, an enhanced TEQDAR pathway.',
  },
  {
    label: '02',
    title: 'ACCT2002',
    description: 'Managerial Accounting Project • Fall 2025 cohort.',
  },
  {
    label: '03',
    title: 'Team',
    description: 'Bareaa, Haya, Mariam, Perry, Salma.',
  },
];

const deliverables = [
  {
    title: '1. Concept narrative',
    due: 'Due 2 Nov 2025 (Google Form)',
    description:
      'Detail the SME Growth Accelerator Program as an improved TEQDAR flow covering the bundled banking product, digital touchpoints, mentoring, training, and ecosystem partnerships.',
  },
  {
    title: '2. Market sizing & trend scan',
    due: 'Due 11 Nov 2025 (Canvas)',
    description:
      'Quantify Egypt’s SME financing gap, growth rates, and adoption drivers. Support with TAM/SAM/SOM estimates using Banque Misr or CBE data.',
  },
  {
    title: '3. SWOT analysis',
    due: 'Due 11 Nov 2025',
    description: 'List program strengths, structural weaknesses, regulatory threats, and ecosystem opportunities.',
  },
  {
    title: '4. Competitive edge',
    due: 'Due 11 Nov 2025',
    description: 'Show how the accelerator outperforms rival bank programs via linked credit workflows and sandbox access.',
  },
  {
    title: '5. Department alignment',
    due: 'Due 11 Nov 2025',
    description: 'Map in-scope teams (credit, IT, risk, retail banking, compliance, customer support) and their accountabilities.',
  },
  {
    title: '6. Bank-specific phases',
    due: 'Due 11 Nov 2025',
    description:
      'Break down approvals, IT build/test, training, launch, and feedback loops—each with deliverables tied to Banque Misr governance.',
  },
  {
    title: '7. Implementation roadmap',
    due: 'Due 11 Nov 2025',
    description:
      'Lay out timeline, member assignments, forecasted profit impact, and monitoring checkpoints for the SME loan book.',
  },
];

const stakeholders = [
  {
    department: 'Credit & Risk Management',
    role: 'Run preparatory credit evaluations, structure the fast-track approval matrix, and monitor portfolio risk in the CBE sandbox.',
  },
  {
    department: 'IT & Digital Factory',
    role: 'Ship the SME portal, API hooks into core banking, and Power BI telemetry for application tracking.',
  },
  {
    department: 'Retail & SME Banking',
    role: 'Own relationship managers, onboarding journeys, and branch enablement for accelerator cohorts.',
  },
  {
    department: 'Compliance & Legal',
    role: 'Ensure regulatory approvals, data privacy controls, and alignment with CBE sandbox mandates.',
  },
  {
    department: 'Customer Support & Success',
    role: 'Operate concierge channels, mentorship scheduling, and feedback capture for post-loan support.',
  },
];

const roadmap = [
  {
    phase: 'Phase 1 — Concept Validation',
    dates: '18 Oct – 2 Nov 2025',
    owners: 'Bareaa (lead), Haya',
    focus: 'Refine SME Growth Accelerator thesis, document bundled offerings, submit deliverable #1.',
    outcomes: 'Signed-off concept narrative & solution scope.',
  },
  {
    phase: 'Phase 2 — Quant & Competitive Intel',
    dates: '3 – 6 Nov 2025',
    owners: 'Mariam, Perry',
    focus: 'Market sizing, SWOT, benchmark against Egyptian and regional accelerators.',
    outcomes: 'Deliverables #2–#4 inform financial modeling and differentiation.',
  },
  {
    phase: 'Phase 3 — Operating Model Design',
    dates: '7 – 9 Nov 2025',
    owners: 'Salma, Bareaa',
    focus: 'Stakeholder mapping, governance approvals, IT + risk process swimlanes.',
    outcomes: 'Deliverable #5 plus draft of bank-specific phases.',
  },
  {
    phase: 'Phase 4 — Roadmap & KPI Build',
    dates: '10 – 11 Nov 2025',
    owners: 'Full team',
    focus: 'Finalize implementation roadmap, assign tasks, align KPI deck/Power BI embed, rehearsal.',
    outcomes: 'Deliverables #6–#7 packaged for Canvas submission.',
  },
];

const tips = [
  'Use precise banking terminology (compliance testing, risk appetite, NPL ratio, digital KYC).',
  'Back every assumption with data from Banque Misr disclosures, CBE reports, or reputable SME studies.',
  'Tie each section to a banking strategy lever: deposit growth, fee income, or SME loan profitability.',
];

const formatTimestamp = (input) => {
  if (!input) return '—';
  const value = typeof input === 'string' ? new Date(input) : input;
  if (Number.isNaN(value?.getTime?.())) return '—';

  return new Intl.DateTimeFormat('en', {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(value);
};

const resolveRuntimeReportUrl = () => {
  if (typeof window === 'undefined') return '';
  const params = new URLSearchParams(window.location.search);
  return params.get('reportUrl') ?? '';
};

function App() {
  const reportUrl = useMemo(() => {
    const runtimeUrl = resolveRuntimeReportUrl();
    return (runtimeUrl || embedConfig.reportUrl || '').trim();
  }, []);

  const hasReport = Boolean(reportUrl);
  const refreshStatus = embedConfig.refreshStatus || (hasReport ? 'Connected' : 'Awaiting link');
  const lastRefresh = formatTimestamp(embedConfig.lastRefresh);

  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="container header-content">
          <div className="brand">
            <span className="brand-pill">SME Growth Accelerator</span>
            <span className="brand-title">Banque Misr • ACCT2002</span>
          </div>
          <nav className="primary-nav" aria-label="Main navigation">
            <a href="#dashboard">Dashboard</a>
            <a href="#deliverables">Deliverables</a>
            <a href="#roadmap">Roadmap</a>
          </nav>
          <a className="cta" href="#dashboard">
            View dashboard
          </a>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <p className="eyebrow">SME Growth Accelerator Program</p>
              <h1>Accelerate Banque Misr SMEs from incubation to fast-track lending.</h1>
              <p className="lede">
                Team Bareaa, Haya, Mariam, Perry, and Salma are evolving TEQDAR into an end-to-end SME financing pathway
                with digital accounts, preparatory credit evaluation, and sandbox-enabled scaling.
              </p>
              <div className="actions">
                <a className="cta primary" href="#deliverables">
                  See requirements
                </a>
                <a className="cta secondary" href="#roadmap">
                  Review timeline
                </a>
              </div>
            </div>
            <ul className="highlight-list" aria-label="Program stats">
              {heroHighlights.map((item) => (
                <li key={item.label}>
                  <span className="label">{item.label}</span>
                  <div>
                    <p className="title">{item.title}</p>
                    <p className="description">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="insights" aria-labelledby="program-brief">
          <div className="container insights-grid">
            <article>
              <p className="eyebrow">Program brief</p>
              <h3 id="program-brief">Introduction</h3>
              <p>
                SME Growth Accelerator Program – An enhanced version of BM’s existing TEQDAR accelerator, but focused on
                an end-to-end SME financing pathway. Selected startups receive mentorship and marketing support plus
                linked banking products: a dedicated digital account, preparatory credit evaluation, and a fast-track
                loan approval process. Integration with BM’s branch network and the CBE regulatory sandbox provides
                holistic support from incubation to scale.
              </p>
            </article>
            <ul>
              <li>
                <h4>Course</h4>
                <p>ACCT2002 Managerial Accounting — Submission hub for Points 1–7.</p>
              </li>
              <li>
                <h4>Deadlines</h4>
                <p>Point 1 due 2 Nov 2025 via Google Form. Points 2–7 due 11 Nov 2025 on Canvas.</p>
              </li>
              <li>
                <h4>Objective</h4>
                <p>Link TEQDAR enhancements to measurable SME loan growth and profitability for Banque Misr.</p>
              </li>
            </ul>
          </div>
        </section>

        <section id="dashboard" className="dashboard">
          <div className="container">
            <div className="section-intro">
              <p className="eyebrow">Live dashboard</p>
              <h2>Embed project KPIs, credit funnel, and profitability insight.</h2>
              <p className="lede">
                Update <code>src/App.jsx</code> with your Power BI share link or append <code>?reportUrl=</code> to the
                URL for quick demos. Use it to showcase SME pipeline metrics or assumption sheets.
              </p>
            </div>

            <article className="embed-card">
              <header className="embed-header">
                <div>
                  <p className="embed-label">Power BI</p>
                  <h3 id="report-title">{embedConfig.title}</h3>
                  <p className="embed-description" id="report-description">
                    {embedConfig.description}
                  </p>
                </div>
                <dl className="embed-meta">
                  <div>
                    <dt>Status</dt>
                    <dd id="refresh-status">{refreshStatus}</dd>
                  </div>
                  <div>
                    <dt>Last refresh</dt>
                    <dd id="last-refresh">{lastRefresh}</dd>
                  </div>
                </dl>
              </header>

              <div className="embed-frame" role="region" aria-label="Power BI embedded report">
                <iframe
                  title="Power BI report"
                  src={hasReport ? reportUrl : undefined}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
                {!hasReport && (
                  <div className="embed-placeholder">
                    <p>
                      Add your Power BI share or embed link to <code>embedConfig.reportUrl</code> near the top of{' '}
                      <code>src/App.jsx</code>, or append <code>?reportUrl=&lt;link&gt;</code> to the page URL for quick
                      tests.
                    </p>
                    <p>Need secure embed with Azure AD tokens? Follow the README blueprint to swap in powerbi-client.</p>
                  </div>
                )}
              </div>
            </article>
          </div>
        </section>

        <section id="deliverables" className="requirements">
          <div className="container">
            <div className="section-intro">
              <p className="eyebrow">Deliverables</p>
              <h2>What to submit for Banque Misr.</h2>
            </div>
            <div className="requirements-grid">
              {deliverables.map((item) => (
                <article key={item.title} className="requirement-card">
                  <p className="due">{item.due}</p>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="stakeholders" className="stakeholders">
          <div className="container">
            <div className="section-intro">
              <p className="eyebrow">Bank alignment</p>
              <h2>Departments on point for the accelerator.</h2>
            </div>
            <div className="stakeholder-list">
              {stakeholders.map((stakeholder) => (
                <article key={stakeholder.department}>
                  <h3>{stakeholder.department}</h3>
                  <p>{stakeholder.role}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="roadmap" className="roadmap">
          <div className="container">
            <div className="section-intro">
              <p className="eyebrow">Execution plan</p>
              <h2>Timeline, ownership, and outcomes.</h2>
            </div>
            <ol className="roadmap-list">
              {roadmap.map((item) => (
                <li key={item.phase} className="roadmap-card">
                  <div className="roadmap-header">
                    <p className="phase">{item.phase}</p>
                    <p className="dates">{item.dates}</p>
                  </div>
                  <p className="owners">Owners: {item.owners}</p>
                  <p>{item.focus}</p>
                  <p className="outcomes">Outcome: {item.outcomes}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="tips" className="tips">
          <div className="container">
            <div className="section-intro">
              <p className="eyebrow">Additional guidance</p>
              <h2>Keep the proposal grounded in banking impact.</h2>
            </div>
            <ul className="tips-list">
              {tips.map((tip) => (
                <li key={tip}>{tip}</li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <p className="brand-pill">SME Growth Accelerator</p>
            <p className="footer-copy">
              Built for Banque Misr’s Managerial Accounting capstone to align strategy, finance, and risk.
            </p>
          </div>
          <div>
            <p className="footer-label">Need edits?</p>
            <p>Update copy inside the React components or connect the data to your CMS/Power BI exports.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
