const { ApolloServer, AuthenticationError } = require('apollo-server');
const { resolvers } = require('./resolvers');
const { typeDefs } = require('./typeDefs');
const jwt = require('jsonwebtoken');

const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers,
    csrfPrevention: true,
    context: ({ req }) => {
        const token = req.headers.authorization || '';

        try {
            let data = jwt.decode(token).user_name.length;
        } catch (err) {
            console.log('error:', err)
            throw new AuthenticationError('401 - Unauthorized');
        }
    },
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});