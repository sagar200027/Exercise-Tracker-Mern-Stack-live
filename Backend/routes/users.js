const router = require("express").Router();
// making a router
let User = require("../models/user.model");
// importing user model

router.route("/").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
  // Here find is a mongoose method which will return all the users that exists in the database
  //after find() then() is executed which will recieve the users return by find() and returns that users in the json format
  // after then() catch() will execute if there some error is there, this fn will recive that error and will return the or response with status 400 which is a sign of error and also a error mssge in json form
});

router.route("/add").post((req, res) => {
  //this will response to http requests ( as we r requesting for a new user by extending the route with with /add )
  const username = req.body.username;
  //   assigning the userName

  const newUser = new User({ username });
  //   Here we creating a new instance of User with a username: username

  newUser
    .save()
    // this a method of monsoose for saving a new user
    .then(() => res.json("User added!"))
    // after saving that user then() will give a response of "User added" in json form
    .catch((err) => res.status(400).json("Error: " + err));
  // and if there is a error in adding that user catch() is executed
});

module.exports = router;
