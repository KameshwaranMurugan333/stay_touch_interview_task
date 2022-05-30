const { getUsersRequest, getUsersNearMeRequest } = require("../gql/request");

module.exports.resolvers = {
    Query: {
        users: async (parent, args, context, info) => {
            let userList = await getUsersRequest(args);
            return userList.user.map(_ => {
                return {
                    ..._,
                    gender: _.master_gender.gender
                }
            });
        },
        usersNearMe: async (parent, args, context, info) => {
            let userList = await getUsersNearMeRequest(args);
            return userList.user_tracking.map(_ => {
                return {
                    ..._.user,
                    gender: _.user.master_gender.gender
                }
            });
        }
    }
};