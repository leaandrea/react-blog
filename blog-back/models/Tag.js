const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tagSchema = new Schema({
  name: String
});

const tagModel = mongoose.model("Tag", tagSchema);

module.exports = tagModel;
