import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Post {
    id: ID!
    title: String!
    body: String
    author: String
    createdAt: String
  }

  type Query {
    getPosts: [Post]
    getPost(id: ID!): Post
  }

  type Mutation {
    createPost(title: String!, body: String, author: String): Post
    deletePost(id: ID!): String
  }
`;
