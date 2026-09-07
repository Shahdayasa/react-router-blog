import { index, route } from "@react-router/dev/routes";

export default [
  index("routes/blog.jsx", { id: "home" }),
  route("blog", "routes/blog.jsx"),
  route("signup", "routes/signup.jsx"),
  route(":year/:month/:day/:slug", "routes/article.jsx"),
];