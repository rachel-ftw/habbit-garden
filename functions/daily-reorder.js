const { dailies } = require("./utils/dailies-mocks");

exports.handler = async ({ queryStringParameters }) => {
  const { source, destination } = queryStringParameters;
  const newData = dailies.reorder(source, destination);

  return {
    statusCode: 200,
    body: JSON.stringify(newData),
  };
};
