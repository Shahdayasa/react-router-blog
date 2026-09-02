import { Link, useParams } from "react-router";
import { articles } from "~/data/articles";

export default function Article() {
  const { year, month, day, slug } = useParams();

  const article = articles.find(
    (a) => a.year === year && a.month === month && a.day === day && a.slug === slug
  );

  if (!article) {
    return (
      <main className="max-w-3xl mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Article not found</h1>
        <Link to="/blog" className="text-blue-600 hover:underline">
          ← Back to blog
        </Link>
      </main>
    );
  }

  const formattedDate = new Date(
    `${article.year}-${article.month}-${article.day}`
  ).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });

  const headings = article.content.filter(
    (block): block is { type: "heading"; id: string; text: string } =>
      block.type === "heading"
  );

  return (
    <main className="max-w-6xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-10">
        {/* Main content */}
        <article>
          <span className="inline-block text-xs font-semibold uppercase tracking-wide bg-gray-100 text-gray-600 px-3 py-1 rounded-full mb-4">
            Article
          </span>
          <h1 className="text-3xl font-bold mb-4">{article.title}</h1>

          <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            <img
              src={`https://api.dicebear.com/9.x/initials/svg?seed=${article.author.avatarSeed}`}
              alt={article.author.name}
              className="w-6 h-6 rounded-full"
            />
            <span>{article.author.name}</span>
            <span>·</span>
            <span>{formattedDate}</span>
          </div>

          <img
            src={article.coverImage}
            alt={article.title}
            className="w-full h-auto rounded-lg mb-8"
          />

          {/* Key Takeaways */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="font-semibold mb-3">Key Takeaways</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              {article.keyTakeaways.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>

          {/* Body content */}
          <div className="prose max-w-none">
            {article.content.map((block, i) => {
              if (block.type === "heading") {
                return (
                  <h2 key={i} id={block.id} className="text-xl font-bold mt-8 mb-3">
                    {block.text}
                  </h2>
                );
              }
              if (block.type === "paragraph") {
                return (
                  <p key={i} className="text-gray-700 leading-relaxed mb-4">
                    {block.text}
                  </p>
                );
              }
              if (block.type === "list") {
                return (
                  <ul key={i} className="list-disc list-inside space-y-2 mb-4">
                    {block.items.map((item, j) => (
                      <li key={j} className="text-gray-700">
                        {item}
                      </li>
                    ))}
                  </ul>
                );
              }
              return null;
            })}
          </div>

          <div className="mt-10">
            <Link to="/blog" className="text-blue-600 hover:underline">
              ← Back to blog
            </Link>
          </div>
        </article>

        {/* Sidebar */}
        <aside>
          <div className="sticky top-8 space-y-6">
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold mb-3">Table of Contents</h3>
              <ul className="space-y-2 text-sm">
                {headings.map((h) => (
                  <li key={h.id}>
                    <a href={`#${h.id}`} className="text-blue-600 hover:underline">
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