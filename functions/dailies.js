const { defaultDailies } = require("./utils/dailies-mocks");

exports.handler = async () => ({
  statusCode: 200,
  body: JSON.stringify(defaultDailies()),
});
