module.exports.submit = (event, context, callback) => {
  console.log(event);
  const response = {
    statusCode: 200,
    body: JSON.stringify(event),
  };
  callback(null, response);
};
