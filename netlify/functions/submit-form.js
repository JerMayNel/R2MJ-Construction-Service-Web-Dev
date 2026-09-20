export async function handler(event) {
  console.log("Function started");
  console.log("Method:", event.httpMethod);

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({
        error: "Method Not Allowed"
      })
    };
  }

  try {
    // Check whether the environment variable exists.
    // This does NOT print the actual secret.
    console.log(
      "WEB3FORMS_KEY exists:",
      !!process.env.WEB3FORMS_KEY
    );

    if (!process.env.WEB3FORMS_KEY) {
      console.error("WEB3FORMS_KEY is missing");

      return {
        statusCode: 500,
        body: JSON.stringify({
          error: "WEB3FORMS_KEY is missing"
        })
      };
    }

    // Parse browser request
    const data = JSON.parse(event.body);

    console.log("Received form data:", {
      name: data.name,
      email: data.email,
      mobile: data.mobile,
      messageReceived: !!data.message
    });

    // Send to Web3Forms
    const response = await fetch(
      "https://api.web3forms.com/submit",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          access_key: process.env.WEB3FORMS_KEY,
          name: data.name,
          email: data.email,
          mobile: data.mobile,
          message: data.message
        })
      }
    );

    console.log(
      "Web3Forms HTTP status:",
      response.status
    );

    const result = await response.json();

    console.log(
      "Web3Forms success:",
      result.success
    );

    console.log(
      "Web3Forms message:",
      result.message
    );

    return {
      statusCode: response.status,
      body: JSON.stringify(result)
    };

  } catch (error) {

    console.error(
      "FUNCTION ERROR:",
      error
    );

    return {
      statusCode: 500,
      body: JSON.stringify({
        error: error.message
      })
    };
  }
}