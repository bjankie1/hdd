'use strict';

module.exports.hello = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello! Go Serverless v1.0! Your function executed successfully!'
    })
  };

  callback(null, response);
}
