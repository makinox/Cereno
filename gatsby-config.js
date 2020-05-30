module.exports = {
  siteMetadata: {
    title: `Cereno`,
    description: `Cereno: menu de restaurantes.`,
    author: `Jesus bossa`,
    siteUrl: 'https://cereno.jesusbossa.dev/',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    {
      resolve: `gatsby-plugin-react-helmet`,
    },
    {
      resolve: `gatsby-transformer-sharp`,
    },
    {
      resolve: `gatsby-plugin-sharp`,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Cereno`,
        short_name: `Cereno: Aplicación de menu`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo/C.png`,
        cache_busting_mode: 'none',
      },
    },
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        google: {
          families: ['Open Sans'],
        },
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://cereno.jesusbossa.dev',
        sitemap: 'https://cereno.jesusbossa.dev/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: 'gatsby-plugin-offline',
      options: {
        workboxConfig: {
          globPatterns: ['**/*'],
        },
        dontCacheBustURLsMatching: /(\.js$|\.css$|static\/)/,
        runtimeCaching: [
          {
            urlPattern: /(\.js$|\.css$|static\/)/,
            handler: `CacheFirst`,
          },
          {
            urlPattern: /^https?:.*\page-data\/.*\/page-data\.json/,
            handler: `NetworkFirst`,
          },
          {
            urlPattern: /^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/,
            handler: `StaleWhileRevalidate`,
          },
          {
            urlPattern: /^https?:\/\/fonts\.googleapis\.com\/css/,
            handler: `StaleWhileRevalidate`,
          },
        ],
        skipWaiting: true,
        clientsClaim: true,
      },
    },
  ],
};
