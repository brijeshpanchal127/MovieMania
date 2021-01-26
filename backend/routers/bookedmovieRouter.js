import express from 'express';
import expressAsyncHandler from 'express-async-handler';
// import data from '../data.js';
import Bookedmovie from '../models/bookedmovieModel.js';


const bookedmovieRouter = express.Router();




bookedmovieRouter.get(
  '/mine',
  
  expressAsyncHandler(async (req, res) => {
    const bookedmovies = await Bookedmovie.find({ user: req.user._id });
    res.send(bookedmovies);
  })
);
//  can add booked movie


bookedmovieRouter.get(
  '/seed',
  expressAsyncHandler(async (req, res) => {
    // await Bookedmovie.remove({});
    const createdBookedmovie = await Bookedmovie.insertMany(data.bookedmovie);
    res.send({ createdBookedmovie });
  })
  );


  
// bookedmovieRouter.get(
//   '/:id',
//   expressAsyncHandler(async (req, res) => {
//     const bookedmovie = await BookedMovie.findById(req.params.id);
//     if (bookedmovie) {
//       res.send(bookedmovie);
//     } else {
//       res.status(404).send({ message: 'Movie Not Found' });
//     }
//   })


// );


bookedmovieRouter.post(
  '/userbooking',
  expressAsyncHandler(async (req, res) => {

   
    const bookedmovie = new Bookedmovie({
      moviename: req.body.moviename,
      tickets:req.body.tickets,
      date: req.body.date,
      showtype: req.body.showtype,
    });
    const createdBookedmovie = await bookedmovie.save();
    res.send({
      _id: createdBookedmovie._id,
      moviename: createdBookedmovie.moviename,
      tickets:createdBookedmovie.tickets,
      date: createdBookedmovie.date,
      showtype: createdBookedmovie.showtype,
     
    });
  })
);


export default bookedmovieRouter;