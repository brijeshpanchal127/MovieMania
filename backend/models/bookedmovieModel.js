import mongoose from 'mongoose';

const bookedmovieSchema = new mongoose.Schema({
  moviename: { type: String, required: true },
  tickets:{ type: Number, required: true, },
  date: {type: String, required: true, },
  showtype: {type: String, required: true,  },

 },
  {
      timestamps: true  
});

const Bookedmovie = mongoose.model('Bookedmovie', bookedmovieSchema);

export default Bookedmovie;