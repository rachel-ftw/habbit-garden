exports.handler = async () => {
  console.log("hello world 🌏");
  return {
    status: 200,
    body: "boop! hello world.",
  };
};
