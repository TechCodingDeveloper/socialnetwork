const express = require("express");
const consolColor = require("chalk");
const cors = require("cors");
const { readdirSync } = require("fs");
const app = express();

let allowed = ["http://localhost:3000"];

function options(req, res) {
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
}
app.use(cors(options));

app.get("/", (req, res) => {
  res.send("welcome from home");
});

readdirSync("./routes").map((r) => app.use("/", require(`./routes/${r}`)));

app.listen(8000, () => {
  console.log(consolColor.blue("server is listening http//localhost:8000 ..."));
});
