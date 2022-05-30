const { gql } =require("graphql-request");

module.exports.getUsers = () => {
  return gql`
  query getUsers($limit: Int, $offset: Int) {
    user(limit: $limit, offset: $offset) {
      id
      first_name
      last_name
      master_gender {
        gender
      }
    }
  }
  `;
};

module.exports.getUsersNearMe = () => {
  return gql`
  query getUserNearMe($distance: Float!, $lat: Float, $lang: Float) {
    user_tracking(where: {lat_lang: {_st_d_within: {distance: $distance, from: {type: "Point", coordinates: [$lat, $lang]}}}}) {
      user {
        id
        first_name
        last_name
        master_gender {
          gender
        }
      }
    }
  }
  `;
};

