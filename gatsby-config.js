module.exports = {
  siteMetadata: {
    title: `Nour Insurance Broker`,
    description: `We recomend what you truly need, no more no less`,
    author: `Nadim Hallaq`,
  },

  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-181320705-1',
        head: true,
        pageTransitionDelay: 0,
      },
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-MS9PZN3',
        includeInDevelopment: false,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `nourinsurance`,
        short_name: `nourinsurance`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },

    `gatsby-plugin-offline`,
    `gatsby-plugin-preact`,

    {
      resolve: `gatsby-theme-material-ui`,
      options: {
        webFontsConfig: {
          fonts: {
            google: [
              {
                family: `Merriweather`,
                variants: [`900`],
              },
              {
                family: `Open Sans`,
                variants: [``],
              },
            ],
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/src/intl`,
        languages: [`en`, `fr`],
        defaultLanguage: `fr`,
        redirect: true,
      },
    },
  ],
}
