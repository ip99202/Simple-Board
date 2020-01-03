const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const autoIncrement = require("mongoose-auto-increment");

let commentSchema = new Schema({
  content: { type: String, required: [true, "comment content required"] },
  writer: { type: String, required: [true, "comment writer required"] }
});

commentSchema.plugin(autoIncrement.plugin, {
  model: "comment",
  startAt: 1
});
let Comment = mongoose.model("comment", commentSchema);

let postSchema = new Schema({
  board: {
    type: Number,
    ref: "board"
  },
  title: {
    type: String,
    required: [true, "post title required"]
  },
  content: {
    type: String,
    required: [true, "post title required"]
  },
  author: {
    type: String,
    required: [true, "post writer required"]
  }
});

postSchema.methods.addComment = function(content, writer) {
  this.comments.push(new Comment({ content, writer }));
  return this.save();
};

postSchema.methods.removeComment = function(comment_id) {
  let comment = this.comments.id(comment_id);
  comment.remove();
  return this.save();
};

postSchema.plugin(autoIncrement.plugin, "post");
module.exports = mongoose.model("post", postSchema);
