import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router";
import { articles } from "~/data/articles";
import { CommentForm } from "~/components/CommentForm";

export function loader({ params }) {
  const { year, month, day, slug } = params;
  const article = articles.find(
    (a) => a.year === year && a.month === month && a.day === day && a.slug === slug
  );
  return { article };
}

export function meta({ data }) {
  if (!data?.article) {
    return [{ title: "Article Not Found — Churn Solution" }];
  }
  return [
    { title: `${data.article.title} — Churn Solution Blog` },
    { name: "description", content: data.article.excerpt },
    { property: "og:title", content: data.article.title },
    { property: "og:description", content: data.article.excerpt },
  ];
}

export default function Article() {
  const { article } = useLoaderData();
  const [activeId, setActiveId] = useState(null);
 
  const contentHeadings = article
    ? article.content.filter((block) => block.type === "heading")
    : [];
 
  const headings = article
    ? [{ id: "key-takeaways", text: "Key Takeaways" }, ...contentHeadings]
    : [];

  useEffect(() => {
    if (!article || headings.length === 0) return;
 
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-15% 0px -70% 0px",
        threshold: 0,
      }
    );
 
    headings.forEach((h) => {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    });
 
    return () => observer.disconnect();
  }, [article]);

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


  return (
    <main className="container">
      <div className="article-layout">
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
            width="1200"
            height="600"
          />

          <div className="takeaways-box">
<h2 className="takeaways-title" id="key-takeaways">Key Takeaways</h2>
            <ul className="takeaways-list">
              {article.keyTakeaways.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>

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
          <CommentForm />
        </article>

        <aside>
   <div className="sidebar-sticky">
            <div className="toc-box">
              <h2 className="toc-title">Table of Contents</h2>
              <ul className="toc-list">
                {headings.map((h) => (
                  <li key={h.id}>
                    <a
                      href={`#${h.id}`}
                      className={
                        activeId === h.id ? "toc-link toc-link-active" : "toc-link"
                      }
                    >
                      {h.text}
                    </a>
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