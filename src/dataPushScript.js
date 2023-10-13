const { API } = require("aws-amplify");
const { createRegion } = require("./graphql/mutations");

API.graphql({
  query: createRegion,
  variables: {
    input: {
      id: 1,
      leagues: [1, 2, 3, 4],
    },
  },
})
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });
