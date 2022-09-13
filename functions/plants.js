const { plants } = require("./plants-mocks");

exports.handler = async () => ({
  statusCode: 200,
  body: JSON.stringify(plants),
});
