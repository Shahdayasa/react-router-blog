import { useState } from "react";

export function CommentForm() {
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [saveInfo, setSaveInfo] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    console.log({ comment, name, email, website, saveInfo });
    alert("Comment submitted! (demo only, not saved anywhere yet)");
  }

  return (
    <div className="comment-section">
      <h3 className="comment-title">Leave a Comment</h3>
      <p className="comment-subtitle">
        Your email address will not be published. Required fields are marked{" "}
        <span className="required-star">*</span>
      </p>

      <form onSubmit={handleSubmit}>
        <textarea
          className="comment-textarea"
          placeholder="Type here.."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        />

        <div className="comment-fields-row">
          <input
            type="text"
            className="comment-input"
            placeholder="Name*"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            className="comment-input"
            placeholder="Email*"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="text"
            className="comment-input"
            placeholder="Website"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </div>

        <label className="comment-checkbox-label">
          <input
            type="checkbox"
            checked={saveInfo}
            onChange={(e) => setSaveInfo(e.target.checked)}
          />
          Save my name, email, and website in this browser for the next time I comment.
        </label>

        <button type="submit" className="comment-submit-btn">
          Post Comment
        </button>
      </form>
    </div>
  );
}