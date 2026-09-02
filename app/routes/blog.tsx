import { Link } from "react-router";
import { articles } from "~/data/articles";

export default function Blog() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center mb-12">
        Some of our featured articles
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <Link
            key={article.slug}
            to={`/${article.year}/${article.month}/${article.day}/${article.slug}`}
            className="group block"
          >
            <div className="overflow-hidden rounded-lg mb-3">
              <img
                src={article.coverImage}
                alt={article.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h2 className="font-semibold text-lg mb-2 group-hover:text-blue-600 transition-colors">
              {article.title}
            </h2>
            <p className="text-gray-600 text-sm mb-3 line-clamp-2">
              {article.excerpt}
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <img
                src={`https://api.dicebear.com/9.x/initials/svg?seed=${article.author.avatarSeed}`}
                alt={article.author.name}
                className="w-6 h-6 rounded-full"
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