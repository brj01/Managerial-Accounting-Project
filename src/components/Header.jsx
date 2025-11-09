import { NavLink, Link } from 'react-router-dom';
import { teamInfo } from '../content/projectData';

const navLinks = [
  { path: '/', label: 'Overview' },
  { path: '/implementation', label: 'Implementation' },
];

function Header() {
  return (
    <header className="site-header">
      <div className="container header-content">
        <div className="brand">
          <span className="brand-pill">{teamInfo.programName}</span>
          <span className="brand-title">{teamInfo.subtitle}</span>
        </div>
        <nav className="primary-nav" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <NavLink key={link.path} to={link.path} end={link.path === '/'}>
              {link.label}
            </NavLink>
          ))}
        </nav>
        <Link className="cta" to="/implementation">
          View roadmap
        </Link>
      </div>
    </header>
  );
}

export default Header;
