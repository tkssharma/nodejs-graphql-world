import mongoose from 'mongoose';
const Schema = mongoose.Schema;
import { ObjectID } from "mongodb";

ObjectID.prototype.valueOf = function() {
  return this.toString();
};

const PostSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true,
    unique: true
  },
  published: {
    type: Boolean,
    required: true
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment"
    }
  ]
})

export default mongoose.model('Post', PostSchema)