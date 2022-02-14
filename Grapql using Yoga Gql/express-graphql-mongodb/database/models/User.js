import mongoose from 'mongoose';
const Schema = mongoose.Schema;
import { ObjectID } from "mongodb";

ObjectID.prototype.valueOf = function() {
  return this.toString();
};

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  age: {
    type: Number,
    required: true
  },
  posts: [{
    type: Schema.Types.ObjectId,
    ref: "Post"
  }],
  comments: [{
    type: Schema.Types.ObjectId,
    ref: "Comment"
  }]
})

export default mongoose.model('User', UserSchema)