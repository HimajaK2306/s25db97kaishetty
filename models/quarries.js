const mongoose = require("mongoose")
const quarriesSchema = mongoose.Schema({
quarries_type: String,
depth_meters: Number,
material: String
})
module.exports = mongoose.model("quarries",quarriesSchema)