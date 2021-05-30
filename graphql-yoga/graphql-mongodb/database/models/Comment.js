import mongoose from 'mongoose';
const Schema = mongoose.Schema;
import { ObjectID } from "mongodb";

ObjectID.prototype.valueOf = function() {
  return this.toString();
};

const CommentSchema = new Schema({
  text: {
    type: String,
    required: true
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  post: {
    type: Schema.Types.ObjectId,
    ref: "Post"
  }
})

export default mongoose.model('Comment', CommentSchema)