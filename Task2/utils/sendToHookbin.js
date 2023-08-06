const https = require("https");

const sendBirthdayMessageUser = async (user) => {
  try {
    const data = JSON.stringify({
      message: ` Hey, ${
        user.firstName + " " + user.lastName
      }  it’s your birthday`,
    });

    const options = {
      hostname: "eol9ofq3rt2ydvk.m.pipedream.net",
      port: 443,
      path: "/",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Content-Length": data.length,
      },
    };
    const req = https.request(options);
    req.write(data);
    req.end();
  } catch (error) {
    console.error(
      "Internal error. Can't send message birthday for user to hook",
      error
    );
    req.end();
  }
};
module.exports = sendBirthdayMessageUser;
