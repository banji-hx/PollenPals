const mongoose = require('mongoose')

const ListingSchema = new mongoose.Schema({
    userID: {type: String, required: true},
    userName: {type: String, required: true},
    userEmail: {type: String, required: true},
    userPlant: {type: String, default: "None"},
    requestedPlants: {type: [String], default: ["None"]},
    userLocation: {type: String, required: true},
    isAvailable: {type: Boolean, default: true}
    });
    

  
  const Listing = mongoose.model("Listing", ListingSchema);
  
  module.exports = Listing;