require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const workoutRoutes = require('./routes/workouts');

// express app
const app = express();

// middleware
app.use(express.json()) //sends into req.body

// logger details
app.use((req, res, next) => {
  console.log(req.path, req.method); // logs out request path and method
  next(); // go to next route
});

// routes
app.use('/api/workouts', workoutRoutes);

// connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
  // listen for requests
  app.listen(process.env.PORT, () => {
    console.log('connecting to db and listening on port 4000');
  });
  })
  // catch error
  .catch((error) => {
    console.log(error);
  });


