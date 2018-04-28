module.exports.initialize = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      content: {
        version: "0.1",
        components: [
          {
            type: "text",
            text: "Hello World!"
          }
        ]
      },
    }),
  };
  callback(null, response);
};
