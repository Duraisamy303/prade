export const PRODUCT_LIST = JSON.stringify({
    query: `
      query {
        products(channel: "india-channel",first: 10) {
          edges {
            node {
              id
              name
              slug
              images {
                url
              }
            }
          }
        }
      }
    `,
  });