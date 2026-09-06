import { useState } from "react";

export default function SignUp() {
  const [fullName, setFullName] = useState("");
  const [workEmail, setWorkEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [paymentProcessor, setPaymentProcessor] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log({
      fullName,
      workEmail,
      password,
      phoneNumber,
      companyName,
      jobTitle,
      paymentProcessor,
    });
    alert("Account created! (demo only, not saved anywhere yet)");
  }

  return (
    <main className="signup-page">
      <div className="signup-card">
        <div className="signup-left">
          <h1 className="signup-heading">Start improving your retention rate.</h1>
          <p className="signup-subtext">
            Rather than relying on customer acquisition, Churn Solution will
            help you keep your current customers and increase your revenue.
          </p>
          <div className="signup-illustration">
            <div className="signup-illustration-box signup-illustration-green"></div>
            <div className="signup-illustration-box signup-illustration-circle"></div>
            <div className="signup-illustration-box signup-illustration-diamond"></div>
            <div className="signup-illustration-box signup-illustration-orange"></div>
          </div>
        </div>

        <div className="signup-right">
          <h2 className="signup-title">Sign up with</h2>

          <button type="button" className="signup-google-btn">
            <span className="signup-google-icon">G</span>
            Continue with Google
          </button>

          <div className="signup-divider">Or</div>

          <form onSubmit={handleSubmit} className="signup-form">
            <label className="signup-label">
              Full Name
              <input
                type="text"
                className="signup-input"
                placeholder="Enter your name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </label>

            <label className="signup-label">
              Work Email
              <input
                type="email"
                className="signup-input"
                placeholder="Enter your email"
                value={workEmail}
                onChange={(e) => setWorkEmail(e.target.value)}
                required
              />
            </label>

            <label className="signup-label">
              Password
              <input
                type="password"
                className="signup-input"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>

            <label className="signup-label">
              Phone Number
              <input
                type="tel"
                className="signup-input"
                placeholder="Enter your phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </label>

            <label className="signup-label">
              Company Name
              <input
                type="text"
                className="signup-input"
                placeholder="Enter your company name"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </label>

            <label className="signup-label">
              Job Title
              <input
                type="text"
                className="signup-input"
                placeholder="Enter your job title"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
              />
            </label>

            <label className="signup-label">
              What is your primary payment processor?
              <select
                className="signup-input"
                value={paymentProcessor}
                onChange={(e) => setPaymentProcessor(e.target.value)}
              >
                <option value="">Enter your payment processor</option>
                <option value="stripe">Stripe</option>
                <option value="paypal">PayPal</option>
                <option value="braintree">Braintree</option>
                <option value="other">Other</option>
              </select>
            </label>

            <button type="submit" className="signup-submit-btn">
              Create Account
            </button>

            <p className="signup-login-text">
              Already have an account? <a href="#">Log in</a>
            </p>

            <p className="signup-demo-link">
              <a href="#">Schedule a demo instead →</a>
            </p>
          </form>
        </div>
      </div>
    </main>
  );
}