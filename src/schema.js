const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    articles: [Article!]!
    article(id: ID!): Article
  }

  type Mutation {
    createArticle(title: String!, content: String!): Article!
  }

  type Article {
    id: ID!
    title: String!
    content: String!
    author: User!
    comments: [Comment!]!
  }

  type User {
    fullname: String!
    email: String!
    dob: String!
  }

  type Comment {
    title: String!
    content: String!
  }
`;

module.exports = typeDefs;
