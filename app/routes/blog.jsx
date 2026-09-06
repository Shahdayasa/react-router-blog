import { articles } from "~/data/articles";
import { ArticleCard } from "~/components/ArticleCard";

export default function Blog() {
  return (
    <main className="container">
      <h1 className="blog-title">Some of our featured articles</h1>

      <div className="blog-grid">
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </main>
  );
}