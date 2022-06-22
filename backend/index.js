const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const port = 3001;



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => console.log(`Server running on port:  ${port}!`));
