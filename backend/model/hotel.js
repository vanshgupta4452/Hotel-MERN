// models/Hotel.js
const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  location: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  images: [
    {
      type: String,
    }
  ],
  amenities: [
    {
      type: String,
    }
  ],
  price: {
    type: String,
    required: true,
  },
  roomsAvailable: {
    type: String,
    required: true,
  }
}, { timestamps: true });


const Hotel =mongoose.model('Hotel', hotelSchema);

module.exports = Hotel
