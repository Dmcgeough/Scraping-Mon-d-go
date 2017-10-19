var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var NewsSchema = new Schema({

  heading: {
    type: String,
    required: true,
    index:{unique:true}
  },

  link: {
    type: String,
    required: true
  },

  image: {
      type: String,
      required: false
  },
  summary: {
      type: String,
      required: false
  }
});

var News = mongoose.model("News", NewsSchema);

module.exports = News;