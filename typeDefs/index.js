const { gql } = require('apollo-server');

module.exports.typeDefs = gql`
  type User {
    id : Int!
    first_name: String,
    last_name: String,
    gender: String
  } 
 
  type Query {
    users(limit: Int, offset: Int): [User],
    usersNearMe(lat: Float,lang:Float,distance:Float!): [User]
  }
`;