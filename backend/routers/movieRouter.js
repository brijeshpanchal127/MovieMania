import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import Movie from '../models/movieModel.js';

const movieRouter = express.Router();

movieRouter.get(
  '/',
  expressAsyncHandler(async (req, res) => {
    const movies = await Movie.find({});
    res.send(movies);
  })
);

movieRouter.get(
  '/seed',
  expressAsyncHandler(async (req, res) => {
    await Movie.remove({});
    const createdMovies = await Movie.insertMany(data.movies);
    res.send({ createdMovies });
  })
);

movieRouter.get(
  '/:id',
  expressAsyncHandler(async (req, res) => {
    const movie = await Movie.findById(req.params.id);
    if (movie) {
      res.send(movie);
    } else {
      res.status(404).send({ message: 'Movie Not Found' });
    }
  })
);

export default movieRouter;