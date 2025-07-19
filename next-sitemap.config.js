/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://blihtech.com",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: "weekly",
  priority: 0.7,
  exclude: ["/404"],
};
