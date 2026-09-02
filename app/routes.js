import { index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.jsx"),
  route("blog", "routes/blog.jsx"),
  route(":year/:month/:day/:slug", "routes/article.jsx"),
];