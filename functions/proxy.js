const fetch = require('node-fetch');

exports.handler = async function (event, context) {
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 204,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type"
      }
    };
  }

  try {
    const response = await fetch("https://script.google.com/a/macros/7-eleven.vn/s/AKfycbzglviu71ez2zy6frXlfPGIj-t4u07tCzrdwnwiBBc0wtc0ihai-b6WBQdZQ4h61iHQ-A/exec", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: event.body
    });
    const data = await response.json();
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type"
      },
      body: JSON.stringify(data)
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type"
      },
      body: JSON.stringify({ status: "error", message: error.message })
    };
  }
};
