import { Link } from "react-router";

export function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="navbar-brand">
          <span className="navbar-brand-name">Churn Solution</span>
        </Link>

        <nav className="navbar-links">
          <a href="#" className="navbar-link navbar-link-dropdown">
            Products <span className="navbar-arrow" aria-hidden="true">▾</span>
          </a>
          <a href="#" className="navbar-link navbar-link-dropdown navbar-link-active">
            Resources <span className="navbar-arrow" aria-hidden="true">▾</span>
          </a>
          <Link to="/pricing" className="navbar-link">Pricing</Link>
          <Link to="/case-studies" className="navbar-link">Case Studies</Link>
          <Link to="/contact-us" className="navbar-link">Contact Us</Link>
          <Link to="/signup" className="navbar-link">Sign Up</Link>
        </nav>

        <button className="navbar-cta">Book Demo</button>
      </div>
    </header>
  );
}