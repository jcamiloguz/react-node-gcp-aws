module.exports = app => {
    const users = require("../controllers/user.controller.js");
  
      //USER
  
    // Create a new user
    app.post("/api/user", users.create);
  
    // Retrieve all users
    app.get("/api/users", users.findAll);
  
  };
  