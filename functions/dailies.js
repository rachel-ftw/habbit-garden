const { defaultDailies } = require("./dailies-mocks");

exports.handler = async () => ({
  statusCode: 200,
  body: JSON.stringify(defaultDailies()),
});
