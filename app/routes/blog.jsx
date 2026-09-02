import { Link } from "react-router";
import { articles } from "~/data/articles";

export default function Blog() {
  return (
    <main className="container">
      <h1 className="blog-title">Some of our featured articles</h1>

      <div className="blog-grid">
        {articles.map((article) => (
          <Link
            key={article.slug}
            to={`/${article.year}/${article.month}/${article.day}/${article.slug}`}
            className="blog-card"
          >
            <div className="blog-card-image-wrap">
              <img
                src={article.coverImage}
                alt={article.title}
                className="blog-card-image"
              />
            </div>
            <h2 className="blog-card-title">{article.title}</h2>
            <p className="blog-card-excerpt">{article.excerpt}</p>
            <div className="blog-card-meta">
              <img
                src={`https://api.dicebear.com/9.x/initials/svg?seed=${article.author.avatarSeed}`}
                alt={article.author.name}
                className="avatar"
              />
              <span>{article.author.name}</span>
              <span>·</span>
              <span>
                {new Date(
                  `${article.year}-${article.month}-${article.day}`
                ).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}