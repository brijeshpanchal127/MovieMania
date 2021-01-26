import express from 'express';
// import data from './data.js';
import mongoose from 'mongoose';
import userRouter from './routers/userRouter.js';
import movieRouter from './routers/movieRouter.js';

import dotenv from 'dotenv';
import bookedmovieRouter from './routers/bookedmovieRouter.js';

// var cors = require('cors')



dotenv.config();
const app = express();
// var cors = require('cors')
// app.use(cors())


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// new middleware added because all request that contains data will translated to req.body in node app



mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/moviemania', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});


//  if we want to load static data

// app.get("/api/movies/:id", (req,res)=>{
//     const movieId = req.params.id;
//     const movie = data.movies.find((x) => x._id === movieId);
//     if(movie)
//       res.send(movie);
//     else res.status(404).send({message:"movie not found"})
    
// });

// app.get("/api/movies", (req,res)=>{
//     res.send(data.movies);
// });

app.use('/api/users', userRouter);
app.use('/api/movies', movieRouter);
app.use('/api/bookedmovie', bookedmovieRouter)

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port =  5005;
app.listen(port, () => {console.log("server started")})