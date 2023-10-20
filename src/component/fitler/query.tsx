export const query = `#graphql
  query {
    collections(first: 10) {
      edges {
        cursor
        node {
          id
          handle
          title
          description
          image {
            id
            url
          }
        }
      }
    }
  }
  `;
