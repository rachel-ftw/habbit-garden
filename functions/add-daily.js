const { dailies } = require("./dailies");

exports.handler = async ({ queryStringParameters }) => {
  const { title } = queryStringParameters;
  const newData = dailies.add(title);

  return {
    statusCode: 200,
    body: JSON.stringify(newData),
  };
};
