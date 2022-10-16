const express = require("express");
const consolColor = require("chalk");
const cors = require("cors");
const { readdirSync } = require("fs");
const { options } = require("./routes-options");
const dotenv = require("dotenv");

dotenv.config();

//Create Server
const app = express();

//Implement CORS
app.use(cors(options));

//Add Routes
readdirSync("./routes").map((r) => app.use("/", require(`./routes/${r}`)));

//Run Server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(
    consolColor.blue(`server is listening http//localhost:${PORT} ...`)
  );
});
