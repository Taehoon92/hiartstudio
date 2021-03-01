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
      resolve: `gatsby-source-instagram-all`,
      options: {
        access_token : "IGQVJWem14V2FWbDl4U1BxRjdOUXA4UWVROXcyNWRaR2Nucl9mVTRPblA4bnlHeFNpUXBaZA1g5SzBHb0VUQS1SM0QtYkE3REV2WmpHYzBCNnBjak9URDRmZA2F2VFNiSDBsdHAyNlVB"
        /* https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token= */
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
