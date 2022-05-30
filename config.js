const dotenv = require("dotenv");
dotenv.config();

module.exports.config = {
    graphQLEndPoint: process.env.GRAPHQL_ENDPOINT
}