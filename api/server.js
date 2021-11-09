const express = require('express');
const path = require('path');
const app = express(),
      bodyParser = require("body-parser");
      port = 9000;



app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../my-app/build')));
require("./app/routes/user.routes.js")(app);



app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, '../my-app/build/index.html'));
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});