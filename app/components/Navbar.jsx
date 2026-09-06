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
            Products <span className="navbar-arrow">▾</span>
          </a>
          <a href="#" className="navbar-link navbar-link-dropdown navbar-link-active">
            Resources <span className="navbar-arrow">▾</span>
          </a>
          <a href="#" className="navbar-link">Pricing</a>
          <a href="#" className="navbar-link">Case Studies</a>
          <a href="#" className="navbar-link">Contact Us</a>
       <Link to="/signup" className="navbar-link">Sign Up</Link>        </nav>

        <button className="navbar-cta">Book Demo</button>
      </div>
    </header>
  );
}