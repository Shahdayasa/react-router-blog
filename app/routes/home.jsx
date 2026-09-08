import { Welcome } from "../welcome/welcome";

export function meta() {
  return [
    { title: "Churn Solution — Reduce Customer Churn & Boost Retention" },
    {
      name: "description",
      content:
        "Churn Solution helps SaaS businesses detect early churn signals and retain more customers.",
    },
  ];
}

export default function Home() {
  return <Welcome />;
}