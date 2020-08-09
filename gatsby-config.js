/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "AngelShot",
    description:
      "AngelShot is a 501(c)(3) charitable organization on a mission to provide tools and knowledge that empower women to safeguard themselves and encourage communities to act as havens for them.",
    url: "`https://www.angelshot.org`",
    image: "/images/logo.png",
    twitterUsername: "@angelshot_org",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        typekit: {
          id: "rtx2vjd",
        },
        google: {
          families: ["Architects Daughter"],
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-158909295-1",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "AngelShot Ltd",
        short_name: "AngelShot Ltd",
        start_url: "/",
        background_color: "#c5e3ee",
        theme_color: "#c5e3ee",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "static/favicon/android-chrome-192x192.png", // This path is relative to the root of the site.
        icons: [
          {
            src: "static/favicon/android-chrome-192x192.png",
            type: "image/png",
            sizes: "192x192",
          },
          {
            src: "static/favicon/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
      },
    },
  ],
}
