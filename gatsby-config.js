require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})  

module.exports = {
  siteMetadata: {
    title: `Hi Art Studio`,
    description: `Hi Art Studio Web Page`,
    author: `@Terry&Jason`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,   
        path: `${__dirname}/src/images`,
      },
    },
    
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `45081175589`,
      },
    },
    
    {
      resolve: `gatsby-source-instagram-all`,
      options: {
        access_token : "IGQVJVanZAkbHpfR2k1SjBrSUY2Wlh0MWFyaEs4UjIzNmdzLUQ4SHhPbVBLMTZARcW95eHRtS0IwRHhDcTluYUI1bEQwSGdkUUVUaHh5U25RNTJYeF9BX0t5eVhyQW9TRndPZA1h2cjh3"
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
          plugins: [
              {
                  resolve: `gatsby-remark-images-native-lazy-load`,
                  options: {
                      loading: "lazy" // "lazy" | "eager" | "auto"
                      }
                  }
          ],
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-dark-mode`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
