const { GraphQLClient } = require("graphql-request");
const { config } = require("./../config");
const { getUsers, getUsersNearMe } = require("./queries");

const graphQLClient = new GraphQLClient(config.graphQLEndPoint);
graphQLClient.setHeader('x-hasura-admin-secret', '8L88uxCSWmb2w4NsjuTJaEXwGz9RWMYmGtHc8KDZUVXgOrXyul41mJWj66Z4cLiZ');

const massageToken = (token = "") => {
  return token.replace("Bearer ", "").trim();
};

//Get all users 
module.exports.getUsersRequest = (variables) => {
  return graphQLClient.request(getUsers(), variables);
};

//Get all users near me
module.exports.getUsersNearMeRequest = (variables) => {
  return graphQLClient.request(getUsersNearMe(), variables);
};
