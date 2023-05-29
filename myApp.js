let express = require('express');
let app = express();
require('dotenv').config();

app.get("/json", (req, res) => {
    console.log(process.env.MESSAGE_STYLE);
    if (process.env.MESSAGE_STYLE === "uppercase") {
        res.json({
            "message": "Hello World".toUpperCase()
        });
      } else {
        res.json({
            "message": "Hello World"
        });
      }
})



































 module.exports = app;
