import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    category:{ type: String, required: true },
    image: { type: String, required: true },
    TicketPrice: { type: Number, required: true },
    seats: { type: Number, required: true },
    released_year: { type: Number, required: true },
    imdbstar: { type: Number, required: true },
    stars: { type: String, required: true },
    description: { type: String, required: true },
    
  },
  {
    timestamps: true,
  }
);
const Movie = mongoose.model('Movie', movieSchema);

export default Movie;