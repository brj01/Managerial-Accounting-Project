import { useMemo } from 'react';

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

function DashboardEmbed({ config }) {
  const reportUrl = useMemo(() => {
    const runtimeUrl = resolveRuntimeReportUrl();
    return (runtimeUrl || config.reportUrl || '').trim();
  }, [config.reportUrl]);

  const hasReport = Boolean(reportUrl);
  const refreshStatus = config.refreshStatus || (hasReport ? 'Connected' : 'Awaiting link');
  const lastRefresh = formatTimestamp(config.lastRefresh);

  return (
    <article className="embed-card">
      <header className="embed-header">
        <div>
          <p className="embed-label">Power BI</p>
          <h3 id="report-title">{config.title}</h3>
          <p className="embed-description" id="report-description">
            {config.description}
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
            <p>The KPI cockpit will light up once the Banque Misr Power BI share link is activated for judges.</p>
            <p>For interim demos, host the report in Power BI Service and append <code>?reportUrl=&lt;encoded-link&gt;</code> to this page.</p>
          </div>
        )}
      </div>
    </article>
  );
}

export default DashboardEmbed;
