import { teamInfo } from '../content/projectData';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <p className="brand-pill">{teamInfo.programName}</p>
          <p className="footer-copy">
            Built for Banque Misr&apos;s managerial accounting project to align finance, risk, and strategy.
          </p>
        </div>
        <div>
          <p className="footer-label">Need edits?</p>
          <p>Update the content arrays in `src/content/projectData.js` or connect the data to your CMS/Power BI feed.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
