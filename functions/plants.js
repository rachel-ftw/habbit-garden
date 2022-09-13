const { plants } = require("./utils/plants-mocks");

exports.handler = async () => ({
  statusCode: 200,
  body: JSON.stringify(plants),
});
