const express = require("express");
const cors = require("cors");
const consolColor = require("chalk");
const mongoose = require("mongoose");
const { readdirSync } = require("fs");
const { options } = require("./routes-options");
const dotenv = require("dotenv");

//env
dotenv.config();

//Create Server
const app = express();

//Support Json
app.use(express.json());

//Implement CORS
app.use(cors(options));

//Routes
readdirSync("./routes").map((r) => app.use("/", require(`./routes/${r}`)));

//Database
mongoose
  .connect(process.env.DATABASE_URL, { useNewUrlParser: true })
  .then(() => console.log(consolColor.yellow(`database connected success`)))
  .catch((e) => console.log(consolColor.red(`error connecting mongodb`, e)));

//Run Server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(
    consolColor.blue(`server is listening http//localhost:${PORT} ...`)
  );
});
