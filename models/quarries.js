const mongoose = require("mongoose");

const quarriesSchema = mongoose.Schema({
  quarries_type: {
    type: String,
    required: true,
    minLength: [3, "Quarry type must be at least 3 characters long"],
    maxLength: [30, "Quarry type cannot exceed 30 characters"]
  },
  depth_meters: {
    type: Number,
    required: true,
    min: [5, "Depth must be at least 5 meters"],
    max: [500, "Depth cannot exceed 500 meters"]
  },
  material: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("quarries", quarriesSchema);
