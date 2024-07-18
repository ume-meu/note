const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());

app.use(cors({ origin: "*" }));

const PORT = 8080;

app.get("/", (req, res) => {
    res.json({data: "hello"});
});



app.listen(PORT);
console.log(`Running on http://localhost:${PORT}`);

module.exports = app;