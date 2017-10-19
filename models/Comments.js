var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var CommentsSchema = new Schema({

  headingId: {
    type: Schema.Types.ObjectId,
    ref: "News"
  },

  comment: {
      type: String,
      required: true
  }
});

var Comments = mongoose.model("Comments", CommentsSchema);

module.exports = Comments;