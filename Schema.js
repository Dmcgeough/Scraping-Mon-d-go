var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var NewsSchema = new Schema({

  title: {
    type: String,
    required: true
  },

  link: {
    type: String,
    required: true
  },

  Image: {
      type: String,
      required: false
  },
  Summary: {
      type: String,
      required: false
  }
});

var News = mongoose.model("News", NewsSchema);

module.exports = News;
