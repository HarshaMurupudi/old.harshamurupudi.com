const siteMetadata = {
  title: `My Gatsby Blog`,
  description: `This is my coding blog.`,
};

module.exports = {
  siteMetadata,
  plugins: [
    'gatsby-plugin-postcss',
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/articles`,
        name: `content`,
      },
    },
  ],
};
