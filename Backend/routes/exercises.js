const router = require("express").Router();
let Exercise = require("../models/exercise.model");

router.route("/").get((req, res) => {
  // when this route is exetended with /exercise/ then this is executed
  Exercise.find()
    // find() is a method of mongoose which will  find all the exercises in the database
    .then((exercises) => res.json(exercises))
    // then()is executes after find which will return that exercises in json form
    .catch((err) => res.status(400).json("Error: " + err));
  // and if there is a error then it will send a message with that err in json form
});

router.route("/add").post((req, res) => {
  const username = req.body.username;
  // this is the username that we will enter of our new exercise
  const description = req.body.description;
  // this is the description that we will enter of our new exercise
  const duration = Number(req.body.duration);
  // this is the duration that we will enter of our new exercise
  const date = Date.parse(req.body.date);
  // this is the date that we will enter of our new exercise

  const newExercise = new Exercise({
    username,
    description,
    duration,
    date,
  });
  // making a new exercise with fields as aove declared variables

  newExercise
    .save()
    // savinf that new Exercise
    .then(() => res.json("Exercise added!"))
    // after save() then() is executed
    .catch((err) => res.status(400).json("Error: " + err));
  // if there is a error in saving this will catch that error and return a message consisting of that err
});

router.route('/:id').get((req,res) =>{
  Exercise.findById(req.params.id)
  // findById() is a fn in mongoose which will find that exerice with id specified
  .then(exercise => res.json(exercise))
  // this will recieve the exercise if there is an exercise with that id
  .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/:id').delete((req,res) =>{
  // its a delete request
  Exercise.findByIdAndDelete(req.params.id)
  // this will find and delete that exercise if its exist in the database
  .then(() => res.json('Exercise deleted.'))
  // if exercises is deleted then it will be executed
  .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/update/:id').post((req,res) =>{
  Exercise.findById(req.params.id)
  .then(exercise => {
    exercise.username = req.body.username
    exercise.description = req.body.description
    exercise.duration = Number(req.body.duration)
    exercise.date = Date.parse(req.body.date)

    exercise.save()
    .then(() => res.json('Exercise updated!'))
    .catch(err => res.status(400).json('Error: ' + err))
  })
  .catch(err => res.status(400).json('Error: ' + err))
})
// while updating we have to send all the fields not just only that field which we want to be updated

module.exports = router;
