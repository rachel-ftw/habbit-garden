const { dailies } = require("./utils/dailies-mocks");

exports.handler = async ({ queryStringParameters }) => {
  const newData = dailies.edit(queryStringParameters);

  return {
    statusCode: 200,
    body: JSON.stringify(newData),
  };
};
