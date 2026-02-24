/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://annette-theobald.de',
  generateRobotsTxt: true,
  // optional
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
}