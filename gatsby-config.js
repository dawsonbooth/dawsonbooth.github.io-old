require("dotenv").config({
  path: ".env",
});
module.exports = {
  siteMetadata: {
    title: `Personal Website`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-theme-ui`,
    {
      resolve: `gatsby-source-github-api`,
      options: {
        token: process.env.GATSBY_GITHUB_API_TOKEN,
        graphQLQuery: `
        query ($author: String!, $userFirst: Int!) {
          user(login: $author) {
            repositories(first: $userFirst, privacy: PUBLIC, isFork: false) {
              edges {
                node {
                  name
                  description
                  url
                  stargazerCount
                  forkCount
                  watchers {
                    totalCount
                  }  
                }
              }
            }
          }
        }
        `,
        variables: {
          userFirst: 100,
          author: "dawsonbooth",
        },
      },
    },
  ],
};
