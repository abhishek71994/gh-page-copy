module.exports = {
  siteMetadata: {
    title: `Abhishek Prasad`,
    description: `Problem solver, full stack developer working in on of the leading start ups in SE Asia`,
    author: `@abhishek71994`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      },
      options: {
        name: "fonts",
        path: `${__dirname}/src/fonts/`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Abhishek Prasad`,
        short_name: `abhishek71994`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `public/icons/apple-icon-76x76.png` // This path is relative to the root of the site.
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
}
