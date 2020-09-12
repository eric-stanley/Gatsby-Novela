module.exports = {
  siteMetadata: {
    title: `Eric Stanley Blog`,
    name: `Eric Stanley`,
    siteUrl: `https://novela.narative.co`,
    description: `Remember the days when our ancestors used to keep track of memories, learnings, etc... in their personal diary. Well, this is mine!`,
    hero: {
      heading: `Eric's Personal Blog.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/ericstanley84`,
      },
      {
        name: `github`,
        url: `https://github.com/eric-stanley/`,
      },
      {
        name: `instagram`,
        url: `https://www.instagram.com/eric.stanleyjones/`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/company/eric-stanley-6453552a/`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
        mailchimp: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Eric Stanley`,
        short_name: `ES`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-156966410-1",
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: 'https://gmail.us4.list-manage.com/subscribe/post?u=7e87d52a06cd528ef6b7ebf1a&amp;id=56ce247b05', // add your MC list endpoint here; see plugin repo for instructions
      },
    },
  ],
};
