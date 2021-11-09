const express = require('express');
const path = require('path');
require('dotenv').config()
const app = express(),
      bodyParser = require("body-parser");
      port = process.env.PORT;


app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../my-app/build')));
require("./app/routes/user.routes.js")(app);



app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, '../my-app/build/index.html'));
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});