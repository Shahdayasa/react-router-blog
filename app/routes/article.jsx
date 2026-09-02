import { Link, useParams } from "react-router";
import { articles } from "~/data/articles";

export default function Article() {
  const { year, month, day, slug } = useParams();

  const article = articles.find(
    (a) => a.year === year && a.month === month && a.day === day && a.slug === slug
  );

  if (!article) {
    return (
      <main className="container-sm">
        <h1 className="heading-lg">Article not found</h1>
        <Link to="/blog">← Back to blog</Link>
      </main>
    );
  }

  const formattedDate = new Date(
    `${article.year}-${article.month}-${article.day}`
  ).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });

  const headings = article.content.filter(
    (block) => block.type === "heading"
  );

  return (
    <main className="container">
      <div className="article-layout">
        {/* Main content */}
        <article>
          <span className="article-badge">Article</span>
          <h1 className="article-title">{article.title}</h1>

          <div className="article-meta">
            <img
              src={`https://api.dicebear.com/9.x/initials/svg?seed=${article.author.avatarSeed}`}
              alt={article.author.name}
              className="avatar"
            />
            <span>{article.author.name}</span>
            <span>·</span>
            <span>{formattedDate}</span>
          </div>

          <img
            src={article.coverImage}
            alt={article.title}
            className="article-cover"
          />

          {/* Key Takeaways */}
          <div className="takeaways-box">
            <h3 className="takeaways-title">Key Takeaways</h3>
            <ul className="takeaways-list">
              {article.keyTakeaways.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>

          {/* Body content */}
          <div className="article-body">
            {article.content.map((block, i) => {
              if (block.type === "heading") {
                return (
                  <h2 key={i} id={block.id}>
                    {block.text}
                  </h2>
                );
              }
              if (block.type === "paragraph") {
                return <p key={i}>{block.text}</p>;
              }
              if (block.type === "list") {
                return (
                  <ul key={i}>
                    {block.items.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                );
              }
              return null;
            })}
          </div>

          <div className="back-link-wrap">
            <Link to="/blog">← Back to blog</Link>
          </div>
        </article>

        {/* Sidebar */}
        <aside>
          <div className="sidebar-sticky">
            <div className="toc-box">
              <h3 className="toc-title">Table of Contents</h3>
              <ul className="toc-list">
                {headings.map((h) => (
                  <li key={h.id}>
                    <a href={`#${h.id}`}>{h.text}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}