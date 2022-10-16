exports.options = (req, res) => {
  //Allow address can access to Server
  let allowed = ["http://localhost:3000"];

  let temp;
  let origin = req.header("Origin");
  if (allowed.indexOf(origin) > -1) {
    tem = {
      origin: true,
      optionSuccessStatus: 200,
    };
  } else {
    tem = {
      origin: "Failed CROS",
    };
  }

  res(null, tem);
};
