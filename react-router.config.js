import { articles } from "./app/data/articles.js";

export default {
  ssr: false,
  basename: "/react-router-blog/",

  async prerender() {
    return [
      "/",
      ...articles.map(
        (article) =>
          `/${article.year}/${article.month}/${article.day}/${article.slug}`
      ),
    ];
  },
};