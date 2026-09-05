const SITE = "https://www.enactussfu.ca";

const routes = [
  { path: "/", priority: 1.0 },
  { path: "/about", priority: 0.8 },
  { path: "/team", priority: 0.8 },
  { path: "/projects", priority: 0.8 },
  { path: "/competition", priority: 0.7 },
  { path: "/events", priority: 0.7 },
  { path: "/forwardVision", priority: 0.6 },
  { path: "/ventureconnect", priority: 0.6 },
  { path: "/sponsor", priority: 0.6 },
];

export default function sitemap() {
  const lastModified = new Date();
  return routes.map(({ path, priority }) => ({
    url: `${SITE}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority,
  }));
}
